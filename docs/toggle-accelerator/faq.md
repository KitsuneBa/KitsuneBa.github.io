---
sidebar_label: FAQ
---

# Frequently Asked Questions

### Do I need both VRCFury and Modular Avatar installed?
No! **Toggle Accelerator** works completely on its own in **Standalone** or **Instant** mode, or can integrate with **Modular Avatar** and/or **VRCFury** if you have them installed in your project.

---

### Does Toggle Accelerator modify my original avatar files?
When using **Standalone**, **Modular Avatar**, or **VRCFury** build modes, Toggle Accelerator processes everything non-destructively at build time. Your original avatar prefab and scene hierarchy remain clean. If you use **Instant** mode, generated assets are saved neatly into `Assets/!KitsuneBa/ToggleAccelerator/Generated`.

---

### How do I make an exclusive outfit toggle (where turning one outfit ON turns another OFF)?
Use **Parameter Modifiers** in the Group Name field! Append `-OtherGroupName` to your group's parameter name to automatically turn off `OtherGroupName` when the group is enabled, or `+OtherGroupName` to turn it on.

---

### How do I delete hidden body mesh under clothes?
Add a **BlendShape** target entry for the body shrink/hide blendshape on your body mesh, and set its target value to **DEL** (`-1`). At build time, vertices moved by that blendshape will be stripped from the mesh.

---

### Where should I report bugs or request features?
Please open an issue on the [Toggle Accelerator GitHub Repository](https://github.com/KitsuneBa/ToggleAccelerator/issues).
