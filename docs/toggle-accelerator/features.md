---
sidebar_label: Toggle Modes, Targets & Gating
---

# Toggle Modes, Targets & Gating

In **Toggle Accelerator**, every control is organized into a **Toggle Group**. A group can represent a simple on/off toggle, a momentary button, a 0% to 100% radial puppet slider, or an automated reactive rule.

Inside each group, you can add any number of targets across GameObjects, Transforms, Components, BlendShapes, Material Swaps, Shader Properties, and World Freezes.

---

## Toggle Group Controls & Settings

Each Toggle Group card provides an intuitive row of controls:

### Primary Controls Row
- **Default:** Sets whether the toggle starts ON or OFF when your avatar loads into a world (or the default percentage for radial sliders). In the Unity Editor, clicking **Default** immediately shows that state live on your avatar in the Scene view.
- **Saved:** Remembers your selection across avatar resets and world changes.
- **Synced:** Synchronizes the toggle state across the network to other players. Turning this off creates a client-only local toggle that costs 0 network parameter bits.
- **Control Type Dropdown:** Choose between:
  - **Toggle:** Standard on/off menu control.
  - **Button:** Momentary hold button that stays active while held in your radial menu and turns off when released.
  - **lRadial (Linear Radial):** Continuous 0% to 100% radial puppet wheel for smooth scrubbing.
  - **sRadial (Stepped Radial):** Discrete stepped radial wheel for cycling through options.
- **Optimize Mode Dropdown:** Select the optimization strategy for this group:
  - **Optimize:** Consolidated layer generation.
  - **Bake:** Permanent build-time baking (0 runtime layers, 0 parameters, 0 clips).
  - **Trigger (AAP):** Direct BlendTrees for multi-toggle packing and reactive trigger objects.
  - **aOptimizer (Asset Optimizer):** Consolidates external modular asset controllers into sub-state machines.
  - **Off:** Standard individual 2-state animator layers.

### Extra Controls Menu (`▶`)
Click the arrow button (`▶`) on any group card to reveal additional tools:

- **Smooth:** Opens smooth transition settings (`Smooth Linear`, `Smooth Exponential`, `Bounce Linear`, `Bounce Exponential`, `Delay`), smooth value slider, and independent `Delay On` and `Delay Off` timers.
- **Friend:** Restricts the visual effect so it is only visible to you and players on your VRChat friends list via `IsOnFriendsList`. Remote strangers see the avatar's default resting state.
- **Preview:** Live preview is enabled by default. Clicking **Preview** turns preview OFF for this specific group if you want to inspect default meshes without preview overrides.
- **Create:** Opens the on-demand asset generation menu to export standalone `.anim` clips, Animator Controllers, `VRCExpressionsMenu`, `VRCExpressionParameters`, or Prefabs.
- **Ungroup:** If a group contains multiple targets and you want separate menu buttons for each piece, clicking **Ungroup** explodes the group into individual standalone toggle groups while preserving all modes, parameters, and settings.

---

## The 5 Target Modes

Inside each Toggle Group, you can mix and match targets across five versatile modes:

### 1. Toggle (`TG`)
The primary toggle mode combines GameObject activation, local Transform movement, and individual Component toggles into one clean interface:

- **GameObject:** Toggles a target `GameObject` active or inactive in your avatar hierarchy.
  - **Smart Initial State:** When you drag an object into the targets list, Toggle Accelerator checks if it is currently active in the scene. If it is active, the target sets to turn it **OFF**; if it is inactive, the target sets to turn it **ON**.
  - **ON/OFF Button:** Click the green/red button next to the object to change its target state at any time. Hold **Alt** while clicking to batch switch all targets in the group.
- **Transform (TRAN):** Animates local **Position**, **Rotation**, and **Scale** on the target object.
  - Click **TRAN** to open the transform settings.
  - Enter coordinates manually, or click **REC** to activate scene handles and position, rotate, or scale the object visually in the Unity Scene view with real-time coordinate capture.
- **Component:** Toggles specific components ON or OFF without disabling the parent GameObject. Supported components include:
  - `VRCPhysBone` and `VRCPhysBoneCollider`
  - `VRCContactReceiver`
  - `VRCParentConstraint`
  - `AudioSource`
  - `Light`
  - `ParticleSystem`

### 2. BlendShape (`BS`)
Controls any BlendShape on a `SkinnedMeshRenderer` with a target weight slider (`0` to `100`):

- **Target Weight:** Adjust the target blendshape weight applied when the toggle is active.
- **Mesh Deletion (`DEL`):** Set the weight to `DEL` (or enter `-1`). At build time, Toggle Accelerator permanently strips the vertices affected by that BlendShape from the mesh whenever the clothing is active. This eliminates body clipping beneath clothing and saves vertex processing without requiring manual mesh editing in 3D modeling software.
- **ALL Checkbox:** When enabled, applies the blendshape weight across all renderers on the avatar that share that blendshape name.

### 3. Material Swap (`MS`)
Replaces the material in a specific **Material Slot Index** on a renderer:

- **Slot Index:** Target the exact material slot on the renderer.
- **Scope Modes:**
  - `THIS`: Swaps the material only on the selected renderer.
  - `SHAR`: Swaps the material across all renderers on the avatar that share that same material.
  - `ALL`: Swaps matching materials across every renderer on the entire avatar.

### 4. Material Property (`MP`)
Animates shader properties directly on materials without duplicating material assets:

- **Float / Range:** Animate shader sliders such as dissolve cutoffs, alpha transparency, or emission intensity.
- **Color:** Animate standard or HDR color properties (such as `_Color` or `_EmissionColor`).
- **Vector / ST:** Animate `Vector4` vectors or texture tiling and offset (`_MainTex_ST`).

### 5. World Freeze (`WF`)
Locks a target object, bone chain, or `SkinnedMeshRenderer` in world space when activated using VRChat parent constraints:

- **Props & Drops:** Drop items, weapons, or pets into world space so they stay fixed in place as your avatar walks around.
- **Skinned Mesh Freeze:** Freeze an entire outfit or character mesh in world space.
- **Stylized Low-Framerate / Stop-Motion:** Combine World Freeze with **Bounce Linear** and short delay intervals to produce a stylized, low-framerate stop-motion animation effect in VRChat.

---

## Gating: Smart Suppression & Forced Activation

**Gating** is Toggle Accelerator's built-in logic system that coordinates multiple toggles and clothing layers without writing complicated animator state machines.

When an avatar has multiple outfits or overlapping accessories (for example, jackets, hoodies, shirts, bras, and pants), clipping occurs if conflicting items are worn at the same time. Gating resolves this cleanly by allowing any toggle to suppress or force other toggles.

### Gating Syntax in Parameter Names

You can append gate modifiers directly to any group's **Parameter Name**:

- **`-Param` (Gate Closed / Suppress / Mute):** When this toggle turns ON, it automatically mutes/disables the target toggle.
  - *Example:* A heavy coat toggle with parameter `Coat-Hoodie-Shirt`. When `Coat` is active, both `Hoodie` and `Shirt` are automatically suppressed and hidden so they do not clip through the coat.
- **`+Param` (Gate Forced / Force Active):** When this toggle turns ON, it automatically forces the target toggle ON.
  - *Example:* A shoes toggle with parameter `Shoes+Socks`. When `Shoes` are turned ON, `Socks` are forced ON automatically.
- **Chaining Multiple Gates:** You can chain as many modifiers as needed.
  - *Example:* `Outfit-Bra-Panties+Socks` turns off `Bra` and `Panties` while forcing `Socks` on whenever `Outfit` is active.

### Mutual Exclusion vs. Gating Overrides

There are two primary ways to manage outfit options, and they can be combined:

1. **Shared Parameter with Values (Single-Slot Radio):**
   - Give multiple toggle groups the exact same **Parameter Name** (such as `Shoes`) and assign each group a unique **Value** (`1`, `2`, `3`).
   - Because a single parameter can hold only one number at a time, selecting Value `2` automatically turns off Value `1` and Value `3`. This uses minimal synced memory.
   - If duplicate parameter names and duplicate values are accidentally configured, Toggle Accelerator displays a red conflict highlight to alert you.
2. **Explicit Bit-Width Override in the Value Field:**
   - In the **Value** field, you can append `+Bits` (such as `1+3` or `2+4`) to explicitly allocate the network bit width for that parameter, giving you fine-grained memory control.
3. **Cross-Category Gating with Modifiers:**
   - Use `-TargetParam` when two independent categories need to interact.
   - For example, you want `Tops` and `Jackets` to each have their own independent menu folders and toggles, but wearing `Jacket` should hide `Top`. Setting `Jacket-Top` hides the top when the jacket is worn without forcing them into a single restrictive parameter.

### How Gating Works Under the Hood
- In **Direct BlendTrees (AAP / Trigger Mode)**, Toggle Accelerator wraps target motions in gating Direct BlendTrees driven by internal parameters (`TA_Gate_...`). When the gate is closed, the weight is multiplied by 0, muting the motion cleanly without parameter race conditions.
- In **State Machines**, transitions check gate conditions so states switch smoothly.
- In **Live Scene Preview**, Toggle Accelerator evaluates all gate dependencies live in the editor viewport so you immediately see suppressed and forced items update as you click the **Default** button.

---

## Smooth Transitions & Delays

Toggle Accelerator allows you to apply smooth easing, bouncing, or timed delays to any Toggle Group without manually crafting transition curves:

### Smooth Modes
- **Off:** Instant switch between states.
- **Smooth Linear:** Constant-velocity linear interpolation between states.
- **Smooth Exponential:** Smooth ease-in and ease-out damping, ideal for organic prop moves and fade transitions.
- **Bounce Linear:** Steady linear oscillation between states.
- **Bounce Exponential:** Dynamic elastic bounce effect, great for cartoonish pops and bouncy prop reveals.
- **Delay:** Switches states instantly after a specified delay duration.

### Damping & Timers
- **Smooth Value Slider (0.0 to 1.0):** Controls the damping speed and responsiveness of the smoothing curve.
- **Delay On:** Number of seconds to wait before activating the target when turned ON.
- **Delay Off:** Number of seconds to wait before restoring default resting states when turned OFF.

---

## Reactive Triggers & Trigger Objects

Not every avatar action should require clicking a menu button. **Trigger Objects** and **PhysBone Stretch Triggers** allow your avatar to react automatically to physical interactions:

### Trigger Objects
Instead of (or in addition to) radial menu controls, you can add **Trigger Objects** to a group:

- **Any Condition Mode:** The group activates if **ANY** of the assigned trigger objects are active in the hierarchy.
  - *Example:* Automatically enable a chest shrink blendshape whenever ANY of three coats or jackets is worn.
- **Every Condition Mode:** The group activates only when **ALL** assigned trigger objects are active simultaneously.
  - *Example:* Reveal an exclusive accessory set only when all matching pieces (hat, jacket, and boots) are worn together.

### PhysBone Stretch Triggers
VRChat PhysBones automatically expose stretch parameters when grabbed and pulled:

1. On your `VRCPhysBone` component, assign a Parameter name (e.g. `TopPull`). VRChat provides `TopPull_Stretch` (`0.0` to `1.0`).
2. In Toggle Accelerator, create a Toggle Group with Parameter Name set to `+TopPull_Stretch`, enable **lRadial**, and set **Value** to your desired threshold (e.g. `0.85` for 85% stretch).
3. Add your clothing blendshape or target object. When you or another player pulls the PhysBone past 85%, the reaction triggers automatically.

### Contact Receivers
You can drive any Toggle Group directly with a `VRCContactReceiver`. Simply enter the receiver's parameter name into the group's **Parameter Name** field. When another player's hand, head, or finger touches the contact, Toggle Accelerator smoothly activates your props, blendshapes, or effects.
