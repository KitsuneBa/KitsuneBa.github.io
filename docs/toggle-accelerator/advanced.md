---
sidebar_label: Optimizers & Build Pipeline
---

# Optimizers & Build Pipeline

**Toggle Accelerator** includes advanced optimization tools to keep avatar performance high, stay within VRChat's network memory limits, and adapt to any avatar creation workflow.

---

## Parameter Optimizer (Param Opti)

VRChat limits every avatar to **256 bits** of synced network memory for Expression Parameters. When avatars feature extensive wardrobes, hairstyles, and accessories, parameter memory is quickly exhausted.

Toggle Accelerator includes a comprehensive **Parameter Optimization Hub** featuring three layers of parameter optimization:

### 1. Dynamic Bit-Width Reduction
- Enabled via the **Lower Synced Parameter Bit-Width on Build** toggle in the Parameter Hub.
- Automatically analyzes all merged animators, transitions, and menus on your avatar at build time.
- Lowers parameter cost whenever the full bit width is not needed. For example, an integer that only switches between `0` and `1` is clamped from the standard 8-bit integer cost down to 1 bit.
- It is completely automated and safe to keep enabled by default.

### 2. Explicit Bit-Width Override (`Value+Bits`)
- In addition to automatic reduction, you can manually set the exact network bit allocation for any Toggle Group.
- In the group's **Value** field, append `+Bits` (for example, `1+3` or `2+4`):
  - `1+3` sets the target parameter value to `1` and allocates exactly `3 bits` (supporting up to 8 states: `0` through `7`).
  - This saves 5 bits compared to a standard 8-bit parameter while giving you complete control over your network budget.

### 3. Multiplexed Parameter Compressor
For avatars with dozens or hundreds of toggles, the **Multiplexed Parameter Compressor** bypasses VRChat's 256-bit sync limit:

- **How It Works:** Unsyncs parameters for remote users and synchronizes them through a cycling carrier channel system. By transmitting values across rotating carrier parameters, you can use far more toggles than standard VRChat networking normally allows.
- **Speed Modes:**
  - **Fast (~0.05s):** Best for maximum parameter update responsiveness in worlds where you and other players have consistently high framerates.
  - **Normal (~0.10s):** Recommended balanced speed for everyday use.
  - **Slow (~0.20s):** Safer synchronization mode designed for environments where players may have lower framerates, preventing lost update cycles.
- **Targeting Modes:**
  - **Manual Toggles:** Compresses only parameter groups that you explicitly mark for compression.
  - **Excess Toggles:** Automatically compresses only the parameters that exceed your avatar's 256-bit budget, leaving remaining parameters uncompressed.
  - **All Toggles:** Compresses all eligible avatar parameters into rotating carrier batches for maximum network memory savings.
- **Batch Carrier Slots:** Choose between `8 Bools (1 Slot)` and `16 Bools (2 Slots)`.
- **Parameter Exclusions:** Inspect all avatar parameters, review their bit costs, and exclude sensitive parameters (such as OSC trackers or facial puppet floats) from compression with one click.

---

## Layer Optimizer (Layer Opti)

In Unity Mecanim, every active layer in an avatar's FX Animator Controller adds frame evaluation overhead. Avatars with 50+ animator layers suffer from measurable frame drops.

### The Problem: Non-Animating Logic Layers
Many avatar layers do not animate transforms, blendshapes, or mesh properties. Instead, they purely execute logic:
- `VRCAvatarParameterDriver` behaviors (calculating counters, setting toggles, managing math).
- Audio triggers and sound playback.
- Custom state machine tracking behaviors.

Leaving dozens of non-animating logic layers inside the FX controller forces Mecanim to evaluate full layer blending matrices every frame, wasting CPU time.

### The Action Layer Weight 0 Optimization
In VRChat, `StateMachineBehaviour` scripts attached to states in the **Action** playable layer continue executing even when the layer's weight is set to `0.0`.

At weight `0.0`, Mecanim completely skips transform blending and matrix calculations, eliminating runtime evaluation overhead while allowing all parameter drivers and state behaviors to run at full speed.

### How Layer Optimizer Works
1. Scans your avatar's FX controller at build time to identify non-animating logic layers.
2. Clones those logic layers over to the Action Animator Controller, setting their default layer weight to `0.0` while ensuring graph execution.
3. Removes the original logic layers from the FX controller.
4. Gives you a free FPS boost by keeping FX lightweight, running completely automatically without manual setup.

---

## Animator Optimization Modes

Each Toggle Group can be assigned the optimization mode that best fits its purpose via the **Optimize Mode** dropdown:

### Trigger Mode (`AAP` / Direct BlendTrees)
- Labeled **Trigger** on the group card dropdown.
- Uses Animated Animator Parameters to link trigger object states (ON or OFF) directly with target actions without requiring extra animator layers.
- Dozens of toggles and reactive rules run inside a minimal number of animator layers, keeping layer counts low.

### Bake Mode
- **What It Does:** Applies target changes directly to the avatar clone at build time:
  - GameObjects are permanently set active or inactive.
  - BlendShape weights are permanently applied (and vertices marked with `DEL` are stripped).
  - Material swaps and shader properties are baked directly into the rendered materials.
- **Zero Runtime Overhead:** Baked groups generate 0 animator layers, 0 parameters, 0 clips, and 0 expression menu items.
- **When to Use:** Use Bake for static outfit setups, permanent body proportions, removing hidden meshes beneath default clothes, or disabling unwanted avatar props without runtime cost and without altering your original avatar.

### Asset Optimizer (`aOptimizer`)
A dedicated optimization feature that organizes external assets, props, and clothing items attached to the avatar.

When an avatar includes modular assets with their own animator controllers (such as Modular Avatar Merge Animators or VRCFury FullControllers), Asset Optimizer consolidates their layers and states into clean sub-state machines inside a unified layer.

#### How to Use
1. Set the group's Optimize Mode to **Asset Optimizer**.
2. Drag and drop your asset root GameObject (such as a wand, prop, or clothing prefab) into the target drop area.
3. Define the asset's existing activation parameter name (the specific on/off parameter used by the asset to turn on and off).
4. On build, Toggle Accelerator excludes the inactive sub-state machines, allowing multiple assets to reuse the same controller layers and dramatically reducing layer bloat.

### Optimize & Off
- **Optimize:** Automatically organizes standard 2-state toggles into consolidated layers to balance performance and flexibility.
- **Off:** Generates standard individual 2-state animator layers per toggle group for direct compatibility.

---

## Build Modes

At the top of the Toggle Accelerator inspector, you can choose between the following **Build Modes**:

1. **Toggle Accelerator On Build (Standalone):**
   - Non-destructively generates animator layers, clips, parameters, and expression menus automatically when you upload or test your avatar.
   - Requires no external third-party avatar frameworks.
2. **Modular Avatar On Build:**
   - Generates native Modular Avatar components at build time so your toggles integrate directly into a Modular Avatar pipeline.
3. **VRCFury On Build:**
   - Generates native VRCFury components non-destructively at build time.
4. **Instant Modes (VRCFury Instant / Modular Avatar Instant):**
   - Converts Toggle Accelerator into native VRCFury or Modular Avatar components directly on your avatar in the hierarchy. This turns Toggle Accelerator into an instant toggle generator for MA or VRCFury users.
5. **Disabled (Select Tool):**
   - Completely disables this specific Toggle Accelerator component on the GameObject (without affecting other components or tools), useful for testing and debugging.

---

## Inspector Footer Tools

The footer of the Toggle Accelerator inspector provides convenient tools for testing and customization:

- **Quick Build:** Builds an editor test copy near-instantly by running core build hooks while stripping external third-party tools and optimizers. This speeds up build preprocessing by roughly 4 times, allowing you to quickly inspect the generated avatar hierarchy and components in the editor before an actual upload.
- **Full Build:** Builds a complete editor test copy with all pipeline components and external optimizers running in full.
- **Testing in Play Mode:** To test animated toggles and radial menus interactively with Gesture Manager or EmoteBox, enter Unity **Play Mode**. When finished, you can remove the test copy and re-enable your original avatar.
- **Hide Preview / Show Preview:** Toggles live scene preview globally across the entire avatar (preview is enabled by default).
- **Show Convert / Hide Convert:** Scans the avatar for existing VRCFury and Modular Avatar toggles and lets you convert them into Toggle Accelerator groups with one click.
- **Show Menu / Hide Menu:** Opens the built-in Expressions Menu visualizer tree to inspect folder structures, page capacities, and the 8-item menu limit.
- **Color:** Opens the Toggle Accelerator color picker to customize rich-text menu label colors.
- **Layer Opti:** One-click button to toggle Layer Optimizer on or off.
- **Param Opti:** Opens the Parameter Optimization Hub panel to configure dynamic bit-widths, multiplexed compression, and parameter exclusions.
- **Prior TA:** Gives Toggle Accelerator folders, icons, and menu orders priority when merging with existing avatar menus or third-party prefabs.
