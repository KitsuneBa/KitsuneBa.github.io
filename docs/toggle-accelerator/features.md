---
sidebar_label: Toggle Modes & Groups
---

# Toggle Modes & Groups

In **Toggle Accelerator**, your controls are organized into **Toggle Groups**. Each group represents a single control in your VRChat Expressions Menu (a Toggle, a Button, or a Radial Puppet) and can drive multiple targets across 6 different modes simultaneously.

---

## 🎛️ Toggle Group Settings

Each Toggle Group provides full control over how it behaves in your menu and animator:

* **Group Name (`groupParamName`):** Name of the menu control and animator parameter.
  * **Parameter Modifiers (`+` / `-`):** You can append `+OtherGroup` or `-OtherGroup` to automatically enable or disable other toggle groups when this group is activated (ideal for exclusive outfits or mutually exclusive accessories).
* **Menu Path (`menuPath`):** Optional slash-separated submenu path (e.g. `Outfits/Casual`). Leave empty to place at the root menu.
* **Control Type:**
  * **Toggle:** Standard on/off toggle.
  * **Button (`isButton`):** Momentary press-and-hold control.
  * **Radial Puppet:** Drive continuous `0%–100%` values (`Linear`) or discrete steps (`Stepped`) with a configurable default percentage.
* **State Options:**
  * **Default On:** Starts enabled when the avatar loads.
  * **Saved:** Persists state across worlds and restarts.
  * **Synced:** Synchronizes parameter across the network to other players.
* **Custom Icons:** Assign custom textures for both the toggle control itself and any generated submenu folders.
* **Smooth Transitions & Delays:**
  * **Transition Mode:** `Off`, `Smooth Linear`, `Smooth Exponential`, `Bounce Linear`, `Bounce Exponential`, or `Delay`.
  * Configurable transition duration (seconds) or independent **Delay On** / **Delay Off** timers.

---

## 🧩 The 6 Target Modes

Inside any Toggle Group, you can add as many target entries as you need and set each entry's mode independently:

### 1. Object (`Object`)
* Toggles a `GameObject` active or inactive (`SetActive`).
* **Transform Animation (`useTransform`):** Optionally animate local **Position**, **Rotation**, and **Scale** instead of (or in addition to) toggling the object. Includes a quick button to capture the object's current transform values from the Scene view.

### 2. BlendShape (`BlendShape`)
* Animates a specific BlendShape on a `SkinnedMeshRenderer` to a target weight (`0` to `100`).
* **Mesh Deletion (`DEL` / `-1`):** Set the value to `DEL` (`-1`) to strip/delete vertices affected by that BlendShape during avatar build optimization (great for hiding body mesh under clothing to prevent clipping and save performance).

### 3. Material Swap (`MaterialSwap`)
* Swaps the material on a specific **Material Slot Index** of a renderer.
* **Scope Modes:**
  * `THIS`: Applies only to the target renderer.
  * `SHAR` (Shared Objects): Applies to a custom list of renderers that share the material.
  * `ALL`: Automatically swaps the material across all matching renderers on the avatar.

### 4. Material Property (`MaterialProperty`)
* Animates shader properties directly on a renderer without creating duplicate materials:
  * **Float / Range:** Animate numeric sliders (e.g. dissolve, emission strength, alpha).
  * **Color:** Animate HDR or standard color properties.
  * **Vector / ST:** Animate `Vector4` or texture tiling & offset (`_ST`) values.

### 5. World Freeze (`WorldFreeze`)
* Freezes a target object, bone, or `SkinnedMeshRenderer` in world space when toggled ON using VRChat constraints.
* Supports optional bone-chain freezing and bounce transition effects.

### 6. Component (`Component`)
* Enables or disables specific components on a target `GameObject`—such as `VRCPhysBone`, `VRCPhysBoneCollider`, `VRCContactReceiver`, `VRCParentConstraint`, or `AudioSource`.
