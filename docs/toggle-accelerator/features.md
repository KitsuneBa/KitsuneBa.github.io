---
sidebar_label: Toggle Modes & Setups
---

# Toggle Modes & Setups

In **Toggle Accelerator**, controls are organized into **Toggle Groups**. Each group can act as a standard Toggle, a momentary Button, a Radial Puppet slider, or a reactive rule, and can drive any combination of target modes at once.

---

## 🎛️ Toggle Group Controls

* **Toggle Name & Submenu Path:**
  * The label shown in your VRChat Expressions Menu.
  * **Submenus with Slashes:** Use forward slashes `/` directly in the name to place the control inside nested submenus. For example, `Outfit/Shoes/Boots` automatically creates the `Outfit` and `Shoes` submenus and places `Boots` inside.
* **Parameter Name & Value:**
  * Leave **Parameter Name** blank to auto-generate a parameter from the toggle name, or specify a custom parameter name to share parameters across multiple groups or drive them via PhysBones and OSC.
  * Set **Value** when multiple groups share the same parameter, such as integer outfit slots (`1`, `2`, `3`) or radial slider thresholds (`0.25`, `0.5`, `0.75`).
  * **Parameter Modifiers:** Append `+OtherParam` or `-OtherParam` to automatically turn other toggle groups ON or OFF when this group is activated.
* **Control Type:**
  * **Toggle:** Standard on/off menu toggle.
  * **Button:** Momentary hold button that stays active while held and turns off when released.
  * **Radial:** Converts the control into a `0%` to `100%` radial puppet wheel (`Linear` or `Stepped`) with a configurable default starting value.
* **State & Visibility Options:**
  * **Default On:** Enables the toggle by default when the avatar loads.
  * **Saved:** Remembers your selection across world hops and avatar resets.
  * **Synced:** Synchronizes the toggle state across the network to other players.
  * **Friend:** Restricts the toggle's visual effect so it is only visible to you and players on your VRChat friends list.
* **Smooth Transitions & Delays:**
  * Choose from `Off`, `Smooth Linear`, `Smooth Exponential`, `Bounce Linear`, `Bounce Exponential`, or `Delay` with independent **Delay On** and **Delay Off** durations in seconds.

---

## 🧩 Target Modes

Inside any Toggle Group, you can mix and match targets across five versatile modes:

### 1. Toggle (`TG`)
The primary toggle mode combines GameObject activation, Transform movement, and individual Component toggles into one clean interface:
* **GameObject:** Toggles a target `GameObject` ON or OFF in your avatar hierarchy.
* **Transform:** Animates local **Position**, **Rotation**, and **Scale** on the target object. Click the **TRAN** button to open the transform settings. You can enter values manually or use the interactive **Record** button to position, rotate, and scale objects directly in the Unity Scene view while Toggle Accelerator captures the coordinates.
* **Component:** Toggles specific components ON or OFF (such as `VRCPhysBone`, `VRCPhysBoneCollider`, `VRCContactReceiver`, `VRCParentConstraint`, `AudioSource`, `Light`, or `ParticleSystem`) without having to disable the parent GameObject.

### 2. BlendShape (`BS`)
* Animates any BlendShape on a `SkinnedMeshRenderer` to a target weight (`0` to `100`).
* **Mesh Deletion (`DEL`):** Set the weight to `DEL` (or `-1`) to strip the vertices affected by that BlendShape at build time. This is ideal for removing hidden body mesh underneath clothing to prevent clipping and improve performance.

### 3. Material Swap (`MS`)
* Replaces the material in a specific **Material Slot Index** on a renderer.
* **Scope Modes:**
  * `THIS`: Swaps the material only on the selected renderer.
  * `SHAR`: Swaps the material across a specified group of renderers sharing that material.
  * `ALL`: Automatically swaps matching materials across all renderers on the avatar.

### 4. Material Property (`MP`)
* Animates shader properties directly without duplicating materials:
  * **Float / Range:** Animate sliders such as dissolve, alpha, or emission strength.
  * **Color:** Animate standard or HDR color properties (such as `_Color`).
  * **Vector / ST:** Animate `Vector4` properties or texture tiling and offset (`_ST`).

### 5. World Freeze (`WF`)
* Locks a target object, bone chain, or `SkinnedMeshRenderer` in world space when toggled ON using VRChat constraints.

---

## 💡 Common Setup Guides

Below are practical ways to combine Toggle Accelerator's features for everyday avatar setups:

### 1. Independent vs. Shared Outfit Toggles
* **Independent Toggles:** Create one group per item (such as `Outfit/Accessories/Glasses` and `Outfit/Accessories/Hat`) with default settings so each piece can be toggled on and off freely.
* **Shared Toggles:** Drag multiple objects (for example, left and right shoes, or multiple armor pieces) into a single group so one menu button toggles all of them together.

### 2. Exclusive & Mix-and-Match Outfits
There are two ways to make clothing or accessories turn each other off automatically, and you can combine them:
* **Same Category:** If you have several options for the same slot (such as `Bra 1`, `Bra 2`, `Bra 3` or `Shoes 1`, `Shoes 2`), give every group in that category the exact same **Parameter Name** (e.g. `Shoes`) and assign each group a unique **Value** (`1`, `2`, `3`...). Only one option in that category can be active at a time.
* **Cross-Category Rules:** If putting on a specific `Top` should automatically turn off `Bra`, set the top's parameter name to `Top-Bra` along with its own value. When activated, it switches to that top and disables `Bra` automatically.

### 3. Radial Sliders
* **Smooth Shader / BlendShape Sliders:** Enable **Radial** (`Linear`) on a group and add **Material Property** or **BlendShape** targets to smoothly scrub between `0%` and `100%`.
* **Multi-Item Radial Selector:** Create multiple groups that share the same **Toggle Name** and **Parameter Name** with **Radial** enabled, and give each group a different **Value** threshold (such as `0.25`, `0.50`, `0.75`). Scrubbing a single radial wheel in VRChat will step through each item across the dial.

### 4. PhysBone Stretch & Reactive Triggers
* **PhysBone Grab / Stretch Triggers:** If a `VRCPhysBone` on your avatar has its parameter set to `TopPull`, VRChat automatically provides `TopPull_Stretch` (`0.0` to `1.0`). By setting a Toggle Group's parameter to `+TopPull_Stretch` and its **Value** to `0.9` with **Radial** enabled, stretching that PhysBone past `90%` will automatically trigger the group's objects or blendshapes.
* **Reactive Trigger Objects:** Using **Trigger Objects** (`Any` or `Every` condition mode), you can make body shrink blendshapes or secondary props activate automatically whenever specific clothing objects are turned on or off anywhere on the avatar.

### 5. Stylized Transitions & World-Space Effects
* **Object Pop / Smooth Transitions:** Combine **Toggle** (Transform) settings with **Smooth Exponential** or **Bounce** mode so props smoothly scale, slide, or pop into place instead of snapping instantly.
* **Stop-Motion / Low-Framerate Effect:** Combine **World Freeze** on a mesh with **Bounce Linear** and short **Delay On / Delay Off** intervals to create a stylized low-framerate or stop-motion animation effect in VRChat.
