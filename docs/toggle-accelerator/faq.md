---
sidebar_label: FAQ & Troubleshooting
---

# Frequently Asked Questions

### Do I need VRCFury or Modular Avatar installed to use Toggle Accelerator?
Yes, VRCFury and Modular Avatar should be present in your Unity project so that all direct integration assemblies compile cleanly.

However, you are never locked into using them: Toggle Accelerator can build and run completely in its own native **Standalone** or **Instant** build mode without routing through either framework.

---

### Does Toggle Accelerator overwrite my original avatar, FX controller, or menus?
No. All options are non-destructive. In **Standalone**, **Modular Avatar**, and **VRCFury** build modes, all processing happens non-destructively during the avatar build or Play Mode test.

Your original Animator Controllers, Expression Parameters, Expression Menus, and meshes remain completely untouched. If you delete or disable the component, your avatar returns to its exact original state. If you choose **Instant**, Toggle Accelerator converts itself into native MA or VRCFury components directly in the hierarchy, serving as a rapid toggle generator.

---

### What does "Disabled (Select Tool)" do?
Selecting **Disabled (Select Tool)** in the build mode dropdown completely disables that specific Toggle Accelerator component on the GameObject. It does not affect other components or the rest of the project, making it ideal for debugging and testing.

---

### What happens when I drag a GameObject into a group's target list?
When you drag an object in, Toggle Accelerator inspects whether the object is currently active or inactive in the scene:
- If the object is currently **active**, the target is configured to turn it **OFF**.
- If the object is currently **inactive**, the target is configured to turn it **ON**.

You can click the green/red **ON/OFF** button next to any target at any time to switch its behavior, or hold **Alt** while clicking to batch switch all targets in the group.

---

### How do I test my toggles live in the Scene view?
Live preview is enabled automatically in the Unity Scene view:
- **Testing States:** Click the **Default** button on any group card. This flips its default state and immediately updates your avatar in the Scene view so you can test how clothes, props, and blendshapes look.
- **Preview Button:** The **Preview** button located inside the extra controls dropdown (`▶`) is enabled by default. Clicking it turns preview **OFF** for that group if you want to inspect default meshes without preview overrides.
- **Global Preview:** You can also click **Hide Preview** in the inspector footer to toggle previewing globally across the entire avatar.

---

### How do I test my avatar before uploading?
- **Interactive Menu Testing:** To test toggles and radial menus interactively with Gesture Manager or EmoteBox, enter Unity **Play Mode**.
- **Editor Test Builds (Quick Build & Full Build):** Quick Build and Full Build are editor tests that allow you to inspect your avatar directly in the editor without entering Play Mode.
  - **Quick Build:** Strips external third-party tools and optimizers (keeping Unity, VRChat, VRCFury, Modular Avatar, and Toggle Accelerator), speeding up build preprocessing by roughly 4 times.
  - **Full Build:** Runs all tools and external optimizers in full.
  - Both options create an editor test copy (`<AvatarName>(Clone)`) and disable the original avatar. When testing is finished, you can remove the clone and re-enable your avatar.

---

### How do I place a toggle inside a submenu or nested folder?
Simply type forward slashes `/` directly into the **Toggle Name** field.

For example, entering `Clothing/Tops/Hoodie` will automatically create a `Clothing` menu, create a `Tops` submenu inside it, and place the `Hoodie` toggle inside. You can also assign custom folder icons directly from the inspector.

---

### What is the difference between shared Parameter Values and Gating modifiers?
Both allow you to coordinate multiple items, and they can be used together:

- **Shared Parameter + Value (Single-Slot Radio):** Give multiple groups the exact same **Parameter Name** (such as `Shoes`) and assign each group a unique **Value** (`1`, `2`, `3`). Because a single parameter can hold only one number at a time, selecting Value `2` automatically turns off Value `1` and Value `3` while using only one parameter. Toggle Accelerator displays a red conflict highlight if duplicate parameter names and duplicate values are accidentally configured.
- **Gating Modifiers (`+` and `-`):** Append `-OtherParam` or `+OtherParam` to the Parameter Name (for example, `Coat-Hoodie-Shirt` or `Shoes+Socks`). When this toggle turns ON, it automatically mutes or forces the target toggles without forcing them to share a single parameter.

---

### How do I specify custom bit widths for specific toggles?
In any group's **Value** field, you can append `+Bits` to override the network bit allocation:

- For example, typing `1+3` sets the target value to `1` and allocates `3 bits` (giving 8 possible states: `0` through `7`).
- In addition, you can open the **Parameter Optimization Hub** and enable **Lower Synced Parameter Bit-Width on Build** to have Toggle Accelerator analyze all animators and automatically clamp parameter bit-widths across your entire avatar.

---

### What does the "Ungroup" button do?
Toggle Accelerator supports multi-drop: you can drop several GameObjects into a group's target list at once.

If you want each object to have its own separate toggle button in your radial menu instead of sharing one group, click the arrow button (`▶`) and choose **Ungroup**. Toggle Accelerator immediately splits the multi-object group into individual, standalone toggle groups.

---

### How does the "Trigger" mode work?
Trigger mode (labeled **Trigger** in the optimize mode dropdown) allows an object's on/off state to automatically drive target actions (such as blendshapes, material swaps, or component toggles).

- Trigger mode only accepts object on/off states.
- The trigger itself does not create a menu button; it requires another toggle group to turn the trigger object on or off.
- *Example:* If your `Top` clothing is toggled off, a Trigger group detects this and automatically unshrinks your torso blendshape.
- Supports **Any** (any trigger object matches) or **Every** (all trigger objects must match) condition modes.

---

### What does the "Friend" option do?
Enabling **Friend** restricts the toggle so it is only visible to you and players on your VRChat friends list via `IsOnFriendsList`. Remote strangers see the avatar's default resting state.

The bypass option allows completely skipping that security restriction when desired. This feature is recommended for toggles considered risky to use around strangers.

---

### What does Bake mode do and when should I use it?
When a group's optimize mode is set to **Bake**, Toggle Accelerator applies the group's target changes (GameObjects, BlendShapes, DEL mesh stripping, material swaps, and shader properties) directly to the avatar clone at build time.

Baked groups generate **0 animator layers, 0 parameters, 0 clips, and 0 menu items**, completely eliminating runtime overhead without modifying your original avatar. Use Bake for permanent body shapes, default clothing setups, or static props.

---

### How does Smooth mode work?
Smooth mode runs completely automatically. It is generated in BlendTrees using internal smoothing math to blend transitions slowly instead of instantly switching. You do not need to create or edit keyframes; simply select your desired smoothing mode and enter a smooth value.

---

### What is the difference between Relative (`RE`) and Absolute (`AB`) path mode?
- **AB (Absolute):** Binds animation paths starting from the avatar descriptor root. Best for base avatar elements (body, head, default clothing).
- **RE (Relative):** Binds animation paths starting from the GameObject where Toggle Accelerator is placed. Ideal for modular assets organized inside sub-folders.
- If either mode fails to find a target on build, Toggle Accelerator automatically swaps and tests the alternative mode to ensure toggles do not break.

---

### What does Asset Optimizer do and how do I use it?
**Asset Optimizer** is designed for modular assets (clothing, props, or weapons) that come with their own animator controllers:

1. Set the group's Optimize Mode to **Asset Optimizer**.
2. Drag and drop the asset's root GameObject into the drop area.
3. Define the asset's existing activation parameter name (the specific on/off toggle used by that asset).
4. On build, Toggle Accelerator excludes inactive sub-state machines, allowing multiple assets to reuse the same controller layers and dramatically reducing layer bloat.

---

### How does Layer Optimizer improve performance?
Many avatar layers only contain logic (`VRCAvatarParameterDriver` behaviors, audio triggers, or state tracking) without animating transforms or blendshapes. In VRChat, `StateMachineBehaviour` scripts in the **Action** layer execute even when the layer weight is set to `0.0`, where Mecanim skips transform blending entirely.

Layer Optimizer automatically identifies these non-animating logic layers, clones them to the Action controller at weight `0.0`, and removes them from the FX controller, giving you a free FPS boost without breaking any parameters.

---

### Can I convert my existing VRCFury or Modular Avatar toggles into Toggle Accelerator?
Yes. Click **Show Convert** in the inspector footer to scan your avatar for existing VRCFury and Modular Avatar toggles and convert them into Toggle Accelerator groups with a single click.
