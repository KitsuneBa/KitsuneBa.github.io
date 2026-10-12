---
sidebar_label: Overview & Setup
---

# Toggle Accelerator

**Toggle Accelerator** is a Unity component and editor workflow designed to dramatically speed up the creation of toggles, radial puppets, material changes, blendshape controls, and world-space freezes for VRChat avatars.

It works seamlessly whether you prefer **Standalone** animator generation, **Modular Avatar**, **VRCFury**, or **Instant** baking.

<div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', margin: '1.25rem 0' }}>
  <a className="button button--primary" href="vcc://vpm/addRepo?url=https://kitsuneba.github.io/KitsuneBaTools/index.json" style={{ textDecoration: 'none' }}>
    ⚡ Install via VCC / ALCOM
  </a>
  <a className="button button--outline button--secondary" href="https://github.com/KitsuneBa/ToggleAccelerator" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
    GitHub Repository
  </a>
</div>

---

## 🛠️ Adding Toggle Accelerator to Your Avatar

1. Ensure the **KitsuneBa's Tools** VPM repository is added to your project and **KitsuneBa's Toggle Accelerator** is installed.
2. Select your avatar root (or a child GameObject inside your avatar hierarchy).
3. In the Inspector, click **Add Component** &rarr; **KitsuneBa** &rarr; **Toggle Accelerator** (or search `Toggle Accelerator`).
4. Create a **Toggle Group** for each menu toggle, button, or radial puppet you want on your avatar, and add target entries inside the group.

---

## ✨ Key Highlights

* **6 Built-In Toggle Modes:** Combine **Object**, **BlendShape**, **Material Swap**, **Material Property**, **World Freeze**, and **Component** toggles within the same group.
* **Flexible Build Modes:** Output directly as **Standalone** (non-destructive on build), **Modular Avatar**, **VRCFury**, or **Instant** baked assets.
* **Smooth Transitions & Delays:** Add linear, exponential, or bounce transitions—or custom ON/OFF delays—without building manual blend trees or state machines.
* **Parameter Modifiers (Exclusive Gates):** Easily turn other toggles ON or OFF automatically when a group activates using `+Param` and `-Param` syntax.
* **Interactive Menu Tree Visualizer:** Preview and organize your VRChat Expressions Menu hierarchy directly inside the component inspector, including detected VRCFury and Modular Avatar menu items.
* **Live Editor Preview:** Test any toggle group non-destructively right inside the Scene view before entering Play Mode or building.
