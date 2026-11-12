---
sidebar_label: Overview & Quick Start
---

# Toggle Accelerator

**Toggle Accelerator** is a comprehensive, non-destructive Unity workflow for VRChat avatars that makes creating toggles, radial sliders, clothing selectors, material swaps, shader animations, blendshapes, and props effortless.

Instead of manually creating animation clips, setting up animator layers, wiring transitions, and registering expression parameters by hand, Toggle Accelerator lets you configure everything from a single inspector. It adapts to your preferred pipeline: run completely **Standalone**, integrate seamlessly with **Modular Avatar** or **VRCFury**, or bake assets in **Instant** mode.

---

## Quick Start (Your First Toggle in 30 Seconds)

Setting up a toggle takes just a few clicks:

1. **Add the Component:** Select your avatar root (or any clothing/prop prefab in your avatar hierarchy), click **Add Component**, and choose **KitsuneBa -> Toggle Accelerator**.
2. **Create a Toggle Group:** Click **Add Toggle Group** at the bottom of the inspector.
3. **Name Your Toggle:** In the **Toggle Name** field, type the name that will appear in your VRChat radial menu (for example, `Glasses` or `Hat`).
4. **Assign Your Target:** Drag the GameObject you want to toggle into the group's target list. Toggle Accelerator automatically selects **Toggle (TG)** mode and sets it to turn ON when the menu button is selected.
5. **Test Your Toggle:** Click the **Preview** button on the group to test it live in the Scene view, or hit **Play** in Unity to test it in Gesture Manager.

When you upload your avatar or enter Play Mode, Toggle Accelerator automatically generates all required Animator layers, transitions, clips, parameters, and expression menu entries non-destructively.

---

## Organizing with Submenus & Folders

Keeping your Expressions Menu organized is essential. Toggle Accelerator makes nested menus instant:

### Slashes Create Submenus
Simply type forward slashes `/` into the **Toggle Name** field to place a toggle inside nested folders:

- `Clothing/Tops/Hoodie` creates a **Clothing** submenu, a **Tops** submenu inside it, and places the **Hoodie** toggle inside **Tops**.
- `Clothing/Tops/T-Shirt` will automatically place the **T-Shirt** toggle into that same **Tops** folder alongside the hoodie.
- `Accessories/Glasses` creates an **Accessories** folder and adds **Glasses** inside.

Toggle Accelerator automatically tracks the 8-control limit per menu page. If a folder contains more than 8 items, it creates next-page folders automatically.

### Custom Folder Icons
When you type submenus using slashes, folder icon pickers appear directly in the inspector for each folder level. Click any folder icon to assign a custom `Texture2D` icon that will appear on that folder button in your VRChat radial menu.

### Label Colors
Every toggle group features a built-in color picker next to its name field. Choosing a color automatically formats the menu label with rich text color tags, allowing you to highlight special toggles or color-code outfit sets directly in the VRChat radial menu.

---

## The "Create" Button: Generating Assets On Demand

Toggle Accelerator can generate and export complete Unity assets directly from any toggle group:

Inside any Toggle Group, click the **Create** button to open the asset generation menu:

- **Animation:** Creates a new `.anim` clip pre-configured for this group's targets and adds it directly to the group.
- **Controller:** Creates a standalone Unity `AnimatorController` containing configured states, default resting states, and transitions for this toggle.
- **Menu:** Creates a standalone `VRCExpressionsMenu` ScriptableObject containing this control.
- **Parameters:** Creates a standalone `VRCExpressionParameters` ScriptableObject containing the synced parameter.
- **Prefabs:** Packages the current toggle group and its target hierarchy into a modular prefab ready to share or reuse across avatars.

All generated assets are neatly organized in `Assets/!KitsuneBa/Temporary` so you can inspect, modify, or export them at any time.

---

## Built-In Recording (No Manual Keyframing)

You never need to open the Unity Animation window and manually search through avatar bones to record keyframes. Toggle Accelerator includes two built-in recording workflows directly in the inspector:

### 1. In-Tool Animation Recorder
When you add an Animation Clip target or create an animation using the Create button:

1. Click the **REC** button next to the animation target.
2. Toggle Accelerator automatically creates an isolated, clean temporary copy of your avatar in the scene and opens the Unity Animation window focused directly on that clip.
3. Move bones, adjust blendshapes, change materials, or animate components on the clone.
4. When finished, click **REC** again (or close the Animation window).
5. Toggle Accelerator automatically removes the temporary clone, restores your original avatar untouched, and saves your recorded keyframes cleanly inside the `.anim` file.

### 2. Scene-View Transform Recorder
To animate local position, rotation, or scale on any target object:

1. In any **Toggle (TG)** target, click the **TRAN** button to open the Transform settings.
2. Click the **REC** button next to the transform.
3. Interactive 3D movement, rotation, and scale gizmos appear directly on the object in the Unity Scene view.
4. Grab the handles and pose, move, or scale your prop visually in 3D space. Toggle Accelerator captures the coordinates in real time.
5. Click **REC** again to finalize the recorded position.

---

## Live Scene Preview

Every Toggle Group includes a **Preview** button in the inspector:

- Clicking **Preview** immediately applies that group's active state in the Unity Scene view, showing you exactly how clothes fit, how props position, or how blendshapes look.
- Live Preview respects **Gating** rules: if activating Group A is set to turn off Group B, turning on Group A's preview will automatically hide Group B in the scene.
- Preview objects and state changes are tagged `EditorOnly` and are automatically restored to their default resting states whenever you enter Play Mode or build your avatar.
