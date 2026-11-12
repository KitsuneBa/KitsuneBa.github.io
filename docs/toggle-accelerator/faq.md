---
sidebar_label: FAQ & Troubleshooting
---

# Frequently Asked Questions

### Do I need VRCFury or Modular Avatar installed to use Toggle Accelerator?
Yes, VRCFury and Modular Avatar should be present in your Unity project so that all direct integration assemblies compile cleanly.

However, you are never locked into using them: Toggle Accelerator can build and run completely in its own native **Standalone** or **Instant** build mode without routing through either framework.

---

### Does Toggle Accelerator overwrite my original avatar, FX controller, or menus?
No. In **Standalone**, **Modular Avatar**, and **VRCFury** build modes, all processing happens non-destructively at upload time or when entering Play Mode.

Your original Animator Controllers, Expression Parameters, Expression Menus, and meshes remain completely untouched. If you delete or disable the component, your next build will be as if it was never there.

---

### How do I place a toggle inside a submenu or nested folder?
Simply type forward slashes `/` directly into the **Toggle Name** field.

For example, entering `Clothing/Tops/Hoodie` will automatically create a `Clothing` menu, create a `Tops` submenu inside it, and place the `Hoodie` toggle inside. You can also assign custom folder icons directly from the inspector.

---

### What is the difference between shared Parameter Values and Gating modifiers?
Both allow you to coordinate multiple items, and they can be used together:

- **Shared Parameter + Value (Single-Slot Radio):** Give multiple groups the exact same **Parameter Name** (such as `Shoes`) and assign each group a unique **Value** (`1`, `2`, `3`). Because a single parameter can hold only one number at a time, selecting Value `2` automatically turns off Value `1` and Value `3` while using only one parameter.
- **Gating Modifiers (`+` and `-`):** Append `-OtherParam` or `+OtherParam` to the Parameter Name (for example, `Coat-Hoodie-Shirt` or `Shoes+Socks`). When this toggle turns ON, it automatically mutes or forces the target toggles without forcing them to share a single parameter.

---

### How do I specify custom bit widths for specific toggles?
In any group's **Value** field, you can append `+Bits` to override the network bit allocation:

- For example, typing `1+3` sets the target value to `1` and allocates `3 bits` (giving 8 possible states: `0` through `7`).
- In addition, you can open the **Parameter Optimization Hub** and enable **Lower Synced Parameter Bit-Width on Build** to have Toggle Accelerator analyze all animators and automatically clamp parameter bit-widths across your entire avatar.

---

### What does the "Ungroup" button do?
If you have a Toggle Group containing multiple target objects (such as multiple clothing parts or props) and decide you want separate menu buttons for each object, click **Ungroup**.

Toggle Accelerator immediately splits that group into individual, standalone toggle groups while preserving all parameters, target modes, and settings.

---

### How does built-in Animation and Transform recording work?
Toggle Accelerator allows you to create animations without manual animator setup:

- **Animation Recording:** Click **REC** next to an Animation Clip target. Toggle Accelerator creates a clean temporary clone of your avatar in the scene and opens the Unity Animation window focused directly on that clip. When you finish recording and stop, Toggle Accelerator restores your original avatar untouched and saves your keyframes into the clip.
- **Transform Recording:** Under any Toggle target, click **TRAN** and then **REC**. Interactive 3D move, rotate, and scale handles appear directly in the Unity Scene view. Position, rotate, or scale your prop visually, and the coordinates are captured in real time.

---

### How does the `DEL` BlendShape mesh stripper work?
When using **BlendShape (BS)** mode, set the target weight to `DEL` (or enter `-1`).

During the avatar build process, Toggle Accelerator permanently strips the vertices affected by that blendshape from the mesh whenever the clothing is active. This eliminates body clipping beneath clothes and saves vertex processing without modifying your source 3D models.

---

### What does the "Friend" option do?
Enabling **Friend** uses VRChat's built-in `IsOnFriendsList` parameter so the toggle's visual effect is only visible to you and players on your VRChat friends list. Remote strangers see the avatar's default resting state, and no additional synced parameter memory is used.

---

### What does Bake mode do and when should I use it?
When a group's optimize mode is set to **Bake**, Toggle Accelerator applies the group's target changes (GameObjects, BlendShapes, DEL mesh stripping, material swaps, and shader properties) directly to the avatar build copy at build time.

Baked groups generate **0 animator layers, 0 parameters, 0 clips, and 0 menu items**, completely eliminating runtime overhead. Use Bake for permanent body shapes, default clothing setups, or static props.

---

### How does Layer Optimizer improve performance without breaking parameters?
In Unity Mecanim, every active layer in the FX controller incurs per-frame evaluation overhead.

Many layers only contain logic: `VRCAvatarParameterDriver` behaviors, audio triggers, or state tracking that do not animate transforms or blendshapes. In VRChat, `StateMachineBehaviour` scripts in the **Action** layer execute even when the layer weight is set to `0.0`, where Mecanim skips transform blending entirely.

Layer Optimizer identifies these non-animating logic layers, clones them to the Action controller at weight `0.0`, and removes them from the FX controller, keeping FX lightweight while ensuring all parameter drivers continue working.

---

### What does Asset Optimizer do?
**Asset Optimizer** is a dedicated feature designed for avatars with multiple modular assets (such as clothing or props that include their own animators like Modular Avatar Merge Animators or VRCFury FullControllers).

It scans external animators on target GameObjects and consolidates their layers and states into clean sub-state machines inside unified layers, reducing layer clutter while preserving complete animation fidelity.

---

### What is the difference between Quick Build and Full Build?
- **Quick Build:** Builds an editor test copy near-instantly by running core build hooks while bypassing heavy external optimization steps. It allows you to test toggles and menus in Gesture Manager in seconds.
- **Full Build:** Builds a complete editor test copy with all pipeline components running in full.

Both buttons clone the avatar, run non-destructive preprocessing, disable the original avatar, and select the test copy in your scene.

---

### Can I convert my existing VRCFury or Modular Avatar toggles into Toggle Accelerator?
Yes. Use the built-in scanner and converter in the Toggle Accelerator inspector to scan your avatar for existing VRCFury and Modular Avatar toggles and convert them into Toggle Accelerator groups with a single click.
