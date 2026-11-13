---
sidebar_label: Overview & Quick Start
---

# Toggle Accelerator

Toggle Accelerator is a comprehensive, non-destructive Unity workflow for VRChat avatars that makes creating toggles, radial sliders, clothing selectors, material swaps, shader animations, blendshapes, and props effortless.

Instead of manually creating animation clips, setting up animator layers, wiring transitions, and registering expression parameters by hand, Toggle Accelerator lets you configure everything from a single inspector. It adapts to your preferred pipeline: run completely Standalone, integrate seamlessly with Modular Avatar or VRCFury on build, convert instantly to MA/VRCFury components, or bake states directly into your avatar.

---

## Quick Start (Your First Toggle in 30 Seconds)

Setting up a toggle takes just a few clicks:

1. **Add the Component:** Select your avatar root (or any clothing or prop object in your avatar hierarchy), click **Add Component**, and choose **KitsuneBa -> Toggle Accelerator**.
2. **Create a Toggle Group:** Click **Add Toggle Group** at the bottom of the inspector.
3. **Name Your Toggle:** In the **Toggle Name** field, type the name that will appear in your VRChat radial menu (for example, Glasses or Hat).
4. **Assign Your Target:** Drag the GameObject you want to toggle into the group's target list. Toggle Accelerator automatically selects **Toggle (TG)** mode and inspects the object's current state in the scene:
   - If the object is currently active in the scene, the target sets to turn it **OFF**.
   - If the object is currently inactive in the scene, the target sets to turn it **ON**.
   - You can click the green/red **ON/OFF** button next to any target at any time to switch its behavior (or Alt-click to batch switch all targets in the group).
5. **Test Your Toggle:**
   - **Live Scene Preview:** Preview is automatically on in the editor. Click the **Default** button on the group card to toggle its starting state, and your avatar in the Scene view will immediately update live to show the change.
   - **Interactive Menu Testing:** To test your toggles and radial menus interactively with Gesture Manager or EmoteBox, enter Unity **Play Mode**.
   - **Editor Test Copy:** You can click **Quick Build** in the footer to build a test copy directly in the editor in seconds, bypassing heavy external optimizers so you can inspect the generated avatar hierarchy and components before uploading.

When you upload your avatar or enter Play Mode, Toggle Accelerator automatically generates all required Animator layers, transitions, clips, parameters, and expression menu entries non-destructively.

---

## Organizing with Submenus & Folders

Keeping your Expressions Menu organized is simple with Toggle Accelerator:

### Slashes Create Submenus
Type forward slashes / into the **Toggle Name** field to place a toggle inside nested folders:

- Clothing/Tops/Hoodie creates a **Clothing** submenu, a **Tops** submenu inside it, and places the **Hoodie** toggle inside **Tops**.
- Clothing/Tops/T-Shirt will automatically place the **T-Shirt** toggle into that same **Tops** folder alongside the hoodie.
- Accessories/Glasses creates an **Accessories** folder and adds **Glasses** inside.

Toggle Accelerator automatically tracks the 8-control limit per menu page. If a folder contains more than 8 items, it creates next-page folders automatically.

### Custom Folder Icons
When you type submenus using slashes, folder icon pickers appear directly in the inspector for each folder level. Click any folder icon to assign a custom Texture2D icon that will appear on that folder button in your VRChat radial menu.

### Label Colors
Every toggle group features a built-in color picker next to its name field. Choosing a color automatically formats the menu label with rich text color tags, allowing you to highlight special toggles or color-code outfit sets directly in the VRChat radial menu.

---

## Multi-Drop & The Ungroup Button

Toggle Accelerator is designed for fast batch setup:

1. **Multi-Object Drop:** You can drag multiple GameObjects at once into the targets drop area of a single toggle group (for example, selecting several accessories or outfit parts in your hierarchy and dropping them together).
2. **Ungroup:** If you want each dropped item to have its own individual toggle in your menu instead of sharing one button, click the arrow button (▶) on the group card and click **Ungroup**.
3. Toggle Accelerator immediately splits the multi-object group into separate, individual toggle groups for each object, automatically naming each group after its target object and preserving all settings.

---

## The Create Button: Adding Assets & Templates

Inside any Toggle Group, click the arrow button (▶) to reveal extra controls, then click **Create** to open the asset generation menu:

- **Animation:** Creates a new .anim clip pre-configured for this group's targets and immediately assigns it to the group.
- **Controller:** Creates a standalone Unity AnimatorController pre-wired with states, default resting states, and transitions for this toggle.
- **Menu:** Creates a standalone VRCExpressionsMenu asset containing this control.
- **Parameters:** Creates a standalone VRCExpressionParameters asset containing the synced parameter.
- **Prefabs:** Inserts pre-defined template prefabs that ship with Toggle Accelerator directly into your avatar hierarchy.

Generated assets are placed cleanly in your project so you can inspect, modify, or export them at any time.

---

## Built-In Recording (No Manual Keyframing)

You never need to open the Unity Animation window and manually search through avatar bones to record keyframes. Toggle Accelerator includes two built-in recording workflows directly in the inspector:

### 1. In-Tool Animation Recorder
When you add an Animation Clip target or create an animation using the Create button:

1. Click the **REC** button next to the animation target.
2. Toggle Accelerator automatically creates an isolated, clean temporary copy of your avatar in the scene and opens the Unity Animation window focused directly on that clip.
3. Move bones, adjust blendshapes, change materials, or animate components on the clone.
4. When finished, click **REC** again (or close the Animation window).
5. Toggle Accelerator automatically removes the temporary clone, restores your original avatar untouched, and saves your recorded keyframes cleanly inside the .anim file.

### 2. Scene-View Transform Recorder
To animate local position, rotation, or scale on any target object:

1. In any **Toggle (TG)** target, click the **TRAN** button to open the Transform settings.
2. Click the **REC** button next to the transform.
3. Interactive 3D movement, rotation, and scale gizmos appear directly on the object in the Unity Scene view.
4. Grab the handles and pose, move, or scale your prop visually in 3D space. Toggle Accelerator captures the coordinates in real time.
5. Click **REC** again to finalize the recorded position.

---

## Live Scene Preview

Toggle Accelerator features built-in, real-time Scene view previewing:

- **Live Preview is Enabled by Default:** You do not need to enter Play Mode to see how toggles look.
- **Testing with the Default Button:** Clicking the **Default** button on any group card flips its default state and immediately updates the avatar in the Scene view live.
- **Disabling Group Preview:** Every group has a **Preview** button inside the extra controls dropdown (▶). Because preview is enabled by default, clicking **Preview** will turn preview OFF for that specific group if you want to inspect resting meshes without active preview overrides.
- **Global Preview Toggle:** You can also click **Hide Preview** (or **Show Preview**) in the inspector footer to toggle previewing globally across the entire avatar.
- **Gating Support in Preview:** Live preview fully evaluates **Gating** rules in real time. If activating an outfit is set to suppress an accessory, toggling Default on the outfit will hide the accessory in the Scene view automatically.
- All preview overrides are non-destructive and cleaned up automatically before building or entering Play Mode.
