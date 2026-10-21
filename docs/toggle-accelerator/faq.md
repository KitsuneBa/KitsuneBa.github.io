---
sidebar_label: FAQ
---

# Frequently Asked Questions

### Do I need VRCFury or Modular Avatar installed to use Toggle Accelerator?
Yes, VRCFury and Modular Avatar should be present in your Unity project. Because Toggle Accelerator is built with direct integrations for both frameworks, Unity requires their assemblies to compile without missing reference errors.

However, you do not have to use them to build your avatar: Toggle Accelerator can build and run completely in its own native **Standalone** or **Instant** build mode without routing through VRCFury or Modular Avatar.

---

### Does Toggle Accelerator overwrite my original avatar, FX controller, or menus?
No. In **Standalone**, **Modular Avatar**, and **VRCFury** build modes, all processing happens non-destructively at build/upload time or when entering Play Mode. Your original Animator Controllers, Expression Parameters, Expression Menus, and meshes remain untouched. If you delete or disable the component, your next build will be as if it was never there.

---

### Where are generated files stored when using Instant mode or testing?
* When you bake assets manually using **Instant** mode, generated controllers, clips, menus, and parameters are saved into `Assets/!KitsuneBa/Temporary`.
* Internal temporary build caches stored in `Packages/com.kitsuneba.toggleaccelerator/Temporary` are managed and cleaned up automatically when exiting Edit Mode.

---

### How do I place a toggle inside a submenu or nested folder?
Simply type forward slashes `/` directly into the **Toggle Name** field!
For example, naming a group `Outfit/Tops/Hoodie` will automatically create (or merge into) an `Outfit` submenu, create a `Tops` submenu inside it, and place the `Hoodie` toggle there. You can also assign custom folder icons for each submenu level.

---

### What is the difference between shared Parameter Values and `+` / `-` Parameter Modifiers?
Both help you coordinate multiple toggles, and they work great together:
* **Shared Parameter + Value:** Give multiple groups the exact same **Parameter Name** (e.g. `Shoes`) and set their **Value** fields to `1`, `2`, `3`, etc. Because a single parameter can only hold one number at a time, turning on `Shoes` with Value `2` automatically turns off all other `Shoes` values and uses only one synced parameter.
* **`+` / `-` Parameter Modifiers:** Append `-OtherParam` or `+OtherParam` to the Parameter Name (for example, `Dress-Top-Bottom` or `Raincoat+Hood`). When that group turns on, it automatically sets `Top` and `Bottom` off (or `Hood` on), even though they use separate parameters.

---

### My avatar already has custom animations or mixes Write Defaults ON and OFF. Will it break?
Toggle Accelerator is designed to coexist cleanly with existing avatar animations:
* It automatically calculates resting and default states from your avatar's current state in the Unity Editor, so you only need to define what changes when a toggle is turned on.
* It preserves your existing FX layers, parameters, and menus, and works whether your existing controller uses Write Defaults `ON` or `OFF`.

---

### How do I delete hidden body mesh under clothes?
1. Add a target entry to your clothing Toggle Group and drag in your avatar's body `SkinnedMeshRenderer`.
2. Set the mode to **BlendShape** and select the shrink/hide blendshape for that clothing area.
3. Set the weight value to **DEL** (or `-1`).
During avatar build, the vertices moved by that blendshape will be stripped from the mesh when the clothing is active, preventing clipping and improving performance.

---

### Can I save a Toggle Accelerator setup inside a prefab and drop it onto another avatar?
Yes! Toggle Accelerator automatically records relative hierarchy paths for your targets and includes an automatic reference fixer. When you drag a prefab onto a matching avatar hierarchy (or duplicate your avatar in the Scene), object references are automatically re-bound to the current avatar.

---

### How do I make a toggle or blendshape activate when pulling/grabbing a PhysBone?
1. On your `VRCPhysBone` component, enter a Parameter name (for example, `OutfitPull`). VRChat automatically drives `OutfitPull_Stretch` from `0.0` to `1.0` when grabbed and stretched.
2. In **Toggle Accelerator**, create a group with **Parameter Name** set to `+OutfitPull_Stretch`, enable **Radial**, and set **Value** to the stretch threshold you want (such as `0.9` for 90% stretch).
3. Any objects, blendshapes, or material changes inside that group will now trigger automatically when the PhysBone is pulled past that threshold.

---

### What does the "Friend" option on a Toggle Group do?
Enabling **Friend** uses VRChat's built-in `IsOnFriendsList` parameter so the toggle's visual changes are only shown to you and users who are on your VRChat friends list, while strangers see the default state.

---

### Can I convert my existing VRCFury or Modular Avatar toggles into Toggle Accelerator?
Yes. In the Toggle Accelerator inspector, use the built-in scanner and converter to detect existing **VRCFury** and **Modular Avatar** toggle components on your avatar and import them directly into Toggle Accelerator groups.
