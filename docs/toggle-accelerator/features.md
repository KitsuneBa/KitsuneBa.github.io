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
  - **Bake:** Permanent build-time baking (0 runtime layers, 0 parameters, 0 menu items).
  - **Trigger (AAP):** Reactive triggers where an object state (ON or OFF) drives target actions automatically.
  - **aOptimizer (Asset Optimizer):** Consolidates external modular asset controllers into sub-state machines.
  - **Off:** Standard individual 2-state animator layers.

### Extra Controls Menu (`▶`)
Click the arrow button (`▶`) on any group card to reveal additional tools:

- **Smooth:** Opens smooth transition settings (`Smooth Linear`, `Smooth Exponential`, `Bounce Linear`, `Bounce Exponential`, `Delay`), smooth value slider, and independent `Delay On` and `Delay Off` timers. Smooth transitions run completely automatically in BlendTrees without manual keyframing.
- **Friend:** Restricts the toggle so it is only visible to players on your VRChat friends list via `IsOnFriendsList`. Remote strangers see the avatar's default resting state. An internal bypass option allows completely skipping that security restriction when desired. This is recommended for toggles considered risky to use around strangers.
- **Preview:** Live preview is enabled by default. Clicking **Preview** turns preview OFF for this specific group if you want to inspect default meshes without preview overrides.
- **Create:** Adds a single asset directly into Toggle Accelerator (Animation clip, Animator Controller, Expressions Menu, or Expression Parameters), or inserts pre-defined template prefabs that ship with the tool.
- **Ungroup:** If a group contains multiple dropped objects, clicking **Ungroup** splits each object into its own individual toggle group, speeding up toggle creation.

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
- **Mesh Deletion (`DEL`):** Set the weight to `DEL` (or enter `-1`). At build time, Toggle Accelerator permanently strips the vertices affected by that blendshape whenever the clothing or prop is active. This eliminates body clipping beneath clothes and saves vertex processing without modifying your source 3D models.

### 3. Material Swap (`MS`)
Swaps an entire material on a specific material slot of any `Renderer`:

- **Material Slot:** Automatically detects how many material slots exist on the renderer and provides a dropdown to pick the slot.
- **Replacement Material:** Drag in the replacement `Material`. When active, Toggle Accelerator swaps to this material; when inactive, it restores the default resting material.

### 4. Material Property (`MP`)
Directly animates individual shader properties without needing duplicate materials or full material swaps:

- **Property Name:** Enter the exact shader property (e.g. `_Color`, `_EmissionColor`, `_Cutoff`, `_Metallic`, `_Smoothness`).
- **Property Types:**
  - **Float:** Animate cutoff thresholds, smoothness, or intensity sliders.
  - **Color:** Pick colors using an integrated Unity color picker (including HDR emission).
  - **Vector / ST:** Animate texture tiling, offsets, or custom vector uniforms.
- **Scope Dropdown:**
  - **THIS:** Modifies only this specific Renderer.
  - **SHAR:** Modifies all Renderers on the avatar that share this material.
  - **ALL:** Modifies all Renderers across the entire avatar that have this shader property.

### 5. World Freeze (`WF`)
Freezes an object, accessory, pet, or prop in global world space:

- When toggled ON, the object remains stationary in world space regardless of how your avatar moves, walks, runs, or rotates.
- When toggled OFF, the object snaps back to follow your avatar body cleanly.
- Supports both static meshes and skinned meshes with zero drift.

---

## Animation Clips, Controllers & Path Modes (`RE` vs `AB`)

In addition to direct object toggles, you can assign external **Animation Clips** (`.anim`) or **Animator Controllers** (`.controller`) directly into any group target list:

- **Layer Type:** Assign which VRChat playable layer executes the controller (defaults to **FX**).
- **Path Mode (`RE` vs `AB`):**
  - **AB (Absolute):** Binds animation property paths starting from the avatar descriptor root. Best suited for core avatar elements (such as body meshes, head, default hair, or standard base clothes).
  - **RE (Relative):** Binds animation property paths starting from the GameObject where this Toggle Accelerator component is located. Ideal for modular clothing prefabs and asset packs organized under nested parent GameObjects.
  - **Automatic Fallback Protection:** If an animation binding cannot be resolved in the selected mode at build time, Toggle Accelerator automatically swaps and tests the alternative mode (`AB` or `RE`) to make sure your toggles never break.

---

## Gating System (Smart Outfit Mutual Exclusion)

Avatar creators often face mutual exclusion dilemmas:
- Wearing a **Coat** should automatically hide the **Shirt** beneath it.
- Selecting a **Full Dress** should disable both the **Skirt** and the **Top**.
- Enabling a **Jacket** should force the **Sleeves** to stay visible.

In traditional setups, this requires dozens of animator states, condition variables, and nested transitions. Toggle Accelerator replaces this complexity with a simple **Gating System** directly inside the **Parameter Name** field.

### Basic Syntax
- `-TargetParam`: Automatically **turns OFF** the target parameter when this group turns ON.
- `+TargetParam`: Automatically **turns ON** the target parameter when this group turns ON.

### Practical Examples
- **Suppressing Another Toggle:**
  - Create a toggle named `Coat` with parameter `Coat-Hoodie`. When the `Coat` is turned ON, the `Hoodie` toggle is automatically forced OFF.
- **Forcing Another Toggle:**
  - Create a toggle named `Shoes` with parameter `Shoes+Socks`. When `Shoes` are turned ON, `Socks` are forced ON automatically.
- **Chaining Multiple Gates:** You can chain as many modifiers as needed:
  - `Outfit-Bra-Panties+Socks` turns off `Bra` and `Panties` while forcing `Socks` on whenever `Outfit` is active.

### Mutual Exclusion vs. Gating Overrides
- **Shared Parameter with Values (Single-Slot Radio):**
  - Give multiple toggle groups the exact same **Parameter Name** (such as `Shoes`) and assign each group a unique **Value** (`1`, `2`, `3`).
  - Selecting Value `2` automatically turns off Value `1` and Value `3`. This uses minimal synced memory.
  - If duplicate parameter names and duplicate values are accidentally configured, Toggle Accelerator displays a red conflict highlight to alert you.
- **Explicit Bit-Width Override in the Value Field:**
  - In the **Value** field, you can append `+Bits` (such as `1+3` or `2+4`) to explicitly allocate the network bit width for that parameter, giving you fine-grained memory control.
- **Cross-Category Gating with Modifiers:**
  - Use `-TargetParam` when two independent categories need to interact (for example, independent `Tops` and `Jackets` menus where `Jacket-Top` hides the top without forcing both into one restrictive parameter).

### How Gating Works Under the Hood
- In **Direct BlendTrees (Trigger / AAP Mode)**, Toggle Accelerator wraps target motions in gating BlendTrees driven by internal parameters (`TA_Gate_...`). When the gate is closed, the weight is multiplied by 0, muting the motion cleanly without parameter race conditions.
- In **State Machines**, transitions check gate conditions so states switch smoothly.
- In **Live Scene Preview**, Toggle Accelerator evaluates all gate dependencies live in the editor viewport so you immediately see suppressed and forced items update as you click the **Default** button.

---

## Smooth Transitions & Delays

Toggle Accelerator allows you to apply smooth easing, bouncing, or timed delays to any Toggle Group without manually crafting transition curves:

### Automated BlendTree Smoothing
Smooth Mode works completely automatically. It is generated in BlendTrees using internal smoothing logic to blend transitions slowly instead of instantly switching. You do not need to create or edit keyframes; simply choose your mode and enter a smooth value.

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

In addition to regular radial menu toggles, Toggle Accelerator provides **Trigger Mode** (AAP) for reactive behaviors:

### How Trigger Mode Works
Trigger mode lets an object state (ON or OFF) automatically drive other target actions.
- **Trigger Objects:** You assign one or more trigger objects to the group. Trigger mode checks whether those objects are currently active or inactive in the hierarchy.
- **Requires a Driving Toggle:** The trigger itself does not create a menu button. It relies on another toggle group (or external asset) to toggle that specific trigger object ON or OFF.
- **Target Actions:** When the trigger object reaches the required state, your target actions execute automatically (such as blendshape adjustments, unshrinking a torso, swapping materials, or toggling props).
  - *Example:* When the `Top` clothing object is toggled OFF by its own outfit toggle, the Trigger group detects this and automatically unshrinks the torso blendshape to restore the base body shape.

### Any vs. Every Condition Modes
- **Any Condition Mode:** The target action triggers if **ANY** of the assigned trigger objects match the required on/off state.
  - *Example:* Automatically enable a chest shrink blendshape whenever ANY of three coats or jackets is worn.
- **Every Condition Mode:** The target action triggers only when **ALL** assigned trigger objects match the required state simultaneously.
  - *Example:* Reveal an exclusive accessory set only when all matching pieces (hat, jacket, and boots) are worn together.
