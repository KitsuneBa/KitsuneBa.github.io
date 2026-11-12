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
- Clamps synced `Int` and `Float` parameters to their minimal required bit count. For example, a toggle that only switches between `0` and `1` is clamped from the standard 8-bit integer cost down to 1 or 2 bits, saving up to 75% parameter memory automatically.

### 2. Explicit Bit-Width Override (`Value+Bits`)
- In addition to automatic reduction, you can manually set the exact network bit allocation for any Toggle Group.
- In the group's **Value** field, append `+Bits` (for example, `1+3` or `2+4`):
  - `1+3` sets the target parameter value to `1` and allocates exactly `3 bits` (supporting up to 8 states: `0` through `7`).
  - This saves 5 bits compared to a standard 8-bit parameter while giving you complete control over network budget.

### 3. Multiplexed Parameter Optimizer
For avatars with dozens or hundreds of toggles, the **Multiplexed Parameter Optimizer** compresses parameter memory beyond the 256-bit budget while maintaining full remote fidelity:

- **How It Works:** Compresses synced parameters into local parameters for instant, 0ms local response on your client. Their values are then multiplexed and transmitted across rotating synced carrier channels to remote players with complete reliability.
- **Targeting Modes:**
  - **Manual Toggles:** Compresses only parameter groups that you explicitly mark for compression.
  - **Excess Toggles:** Automatically compresses only the parameters that exceed your avatar's 256-bit budget, leaving remaining parameters uncompressed.
  - **All Toggles:** Compresses all eligible avatar parameters into rotating carrier batches for maximum network memory savings.
- **Batch Carrier Slots:** Choose between `8 Bools (1 Slot)` and `16 Bools (2 Slots)`.
- **Cycle Refresh Speed:** Select `Fast (~0.05s)` for responsive syncing or `Normal (~0.10s)` for balanced network traffic.
- **Parameter Inspection & Exclusions:** Inspect all avatar parameters, review their bit costs, and exclude sensitive parameters (such as OSC trackers or facial puppet floats) from compression with one click.

---

## Layer Optimizer (Layer Opti)

In Unity Mecanim, every active layer in an avatar's FX Animator Controller adds frame evaluation overhead. Avatars with 50+ animator layers suffer from measurable frame drops.

### The Problem: Non-Animating Logic Layers
Many avatar layers do not actually animate transforms, blendshapes, or mesh properties. Instead, they purely execute logic:
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
4. Keeps the FX controller ultra-lightweight, improves frame rates, and ensures all parameter drivers and logic continue functioning without disruption.

---

## Animator Optimization Modes

Each Toggle Group can be assigned the optimization mode that best fits its purpose:

### Direct BlendTrees (`AAP`)
- Uses Animated Animator Parameters to pack multiple toggles and reactive **Trigger Object** conditions (`Any` or `Every`) into Direct BlendTrees.
- Dozens of toggles and reactive rules run inside a minimal number of animator layers, keeping layer counts low.

### Bake Mode
- **What It Does:** Applies target changes directly to the avatar build copy at build time:
  - GameObjects are permanently set active or inactive.
  - BlendShape weights are permanently applied (and vertices marked with `DEL` are stripped).
  - Material swaps and shader properties are baked directly into the rendered materials.
- **Zero Runtime Overhead:** Baked groups generate 0 animator layers, 0 parameters, 0 clips, and 0 expression menu items.
- **When to Use:** Use Bake for static outfit setups, permanent body proportions, removing hidden meshes beneath default clothes, or disabling unwanted avatar props without runtime cost.

### Asset Optimizer
- **What It Does:** A dedicated optimization feature that organizes external assets, props, and clothing items attached to the avatar.
- When an avatar includes modular assets with their own animator controllers (such as Modular Avatar Merge Animators or VRCFury FullControllers), Asset Optimizer scans those controllers across target GameObjects and consolidates their layers and states into clean sub-state machines inside a unified layer.
- Keeps controllers organized, prevents layer clutter, and maintains clean asset pipeline compatibility.

### Optimize & None
- **Optimize:** Automatically organizes standard 2-state toggles into consolidated layers to balance performance and flexibility.
- **None:** Generates standard individual 2-state animator layers per toggle group for direct compatibility.

---

## Build Modes

At the top of the Toggle Accelerator inspector, you can select between four **Build Modes**:

1. **Standalone:**
   - Non-destructively generates animator layers, clips, parameters, and expression menus automatically when you upload or test your avatar.
   - Requires no external third-party avatar frameworks.
2. **Modular Avatar:**
   - Generates native Modular Avatar components (`MA Menu Item`, `MA Merge Animator`, `MA Parameters`, `MA Shape Changer`, etc.) so your toggles integrate directly into a Modular Avatar pipeline.
3. **VRCFury:**
   - Generates native VRCFury Toggle and Full Controller components.
4. **Instant:**
   - Immediately writes the generated Animator Controller, AnimationClips, Expression Parameters, and Expression Menus into your project's `Assets/!KitsuneBa/Temporary` folder so you can inspect or customize raw Unity assets directly.

---

## Quick Build & Full Build Testing

In the footer of the inspector, you can generate an avatar test clone directly in your scene with one click to test your toggles in Gesture Manager or inspect generated assets:

- **Quick Build:** Builds an editor test copy near-instantly by running VRChat SDK and Toggle Accelerator build hooks while skipping heavy external optimizers. This provides a fast test copy in seconds for rapid iteration.
- **Full Build:** Builds a complete editor test copy with all pipeline components running in full.

Both buttons automatically clone the avatar, run non-destructive preprocessing, disable the original avatar, and select the test copy in your hierarchy so you can immediately test it in Play Mode.

---

## Menu Visualizer & Converter

- **Interactive Menu Tree:** The built-in menu visualizer displays your avatar's complete VRChat Expressions Menu layout inside the inspector, including menus from existing Modular Avatar and VRCFury items. You can inspect page capacities at a glance and track the 8-item menu limit.
- **Scan & Convert Existing Toggles:** Toggle Accelerator can scan your avatar for existing VRCFury and Modular Avatar toggles and convert them into Toggle Accelerator groups with one click, bringing all avatar controls under one unified inspector.
