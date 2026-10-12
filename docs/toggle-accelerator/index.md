---
sidebar_label: Overview & Usage
---

# Toggle Accelerator

**Toggle Accelerator** is a powerful, non-destructive Unity component and editor workflow built to speed up the creation of toggles, buttons, radial sliders, material swaps, shader property animations, blendshapes, and world-space freezes for VRChat avatars.

Whether you prefer working completely **Standalone**, integrating with **Modular Avatar** or **VRCFury**, or baking **Instant** animator assets, Toggle Accelerator lets you build complex avatar logic in seconds from a single unified inspector.

---

## 🛠️ How It Works

1. Ensure the **KitsuneBa's Tools** repository is installed in your project via VCC or ALCOM.
2. Select your avatar root (or any child GameObject inside your avatar hierarchy).
3. In the Inspector, click **Add Component &rarr; KitsuneBa &rarr; Toggle Accelerator** (or search `Toggle Accelerator`).
4. Add a **Toggle Group** for each menu control you want to create, drag in your target objects, and choose how they should respond.
5. Hit **Play** (with Gesture Manager / Av3Emulator) or **Build & Publish** in the VRChat SDK—Toggle Accelerator automatically generates the required Animator layers, parameters, and VRChat Expressions Menu entries.

---

## ✨ Key Features

* **No Animation Clips or Manual FX Editing:** Create object toggles, transform moves, blendshape sliders, material swaps, shader property animations, component toggles, and world freezes directly in the inspector without recording `.anim` clips or wiring state machine transitions by hand.
* **Non-Destructive & Completely Reversible:** In **Standalone**, **Modular Avatar**, and **VRCFury** modes, your original FX controller, synced parameters, and expression menus are never overwritten. All work is applied on a build copy right before upload or play mode.
* **Automatic Default States (No Write Defaults Headaches):** Resting states are automatically captured from your avatar's current state in the editor, and generated layers work cleanly alongside existing controllers regardless of whether they use Write Defaults `ON` or `OFF`.
* **Prefab-Ready with Automatic Re-Binding:** Toggle Accelerator stores relative hierarchy paths and automatically re-binds object references whenever a prefab or component is moved, duplicated, or dropped onto a new avatar.
* **Exclusive Sets, Parameter Modifiers & Reactive Triggers:** Build one-at-a-time outfit selectors using shared parameter values, cross-toggle categories with `+Param` / `-Param` modifiers, or drive toggles automatically from PhysBone stretch parameters and reactive **Trigger Objects**.
* **Interactive Menu Visualizer & Live Preview:** Inspect your entire VRChat Expressions Menu tree (including existing Modular Avatar and VRCFury items), convert third-party toggles in one click, and preview any toggle group live in the Scene view.
