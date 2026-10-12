---
sidebar_label: Overview & Usage
---

# Avatar Optimization Helper

**Avatar Optimization Helper** is an all-in-one Unity editor window that inspects your VRChat avatars and Animator Controllers, calculates a detailed performance score, and provides one-click tools to reduce VRAM usage, clean materials, and locate heavy components.

---

## 🛠️ How It Works

1. In Unity, open the window from the top menu bar:
   **Tools → 🦊KitsuneBa's Tools🦊 → 🦊Avatar Optimization Helper🦊**
2. Drag and drop one or more **Avatars** from your Hierarchy or **Animator Controllers** from your Project window into the drop zone at the top of the window.
3. Use the **Targets** list to switch between analyzed objects or remove them when finished.

---

## ✨ Key Features

* **Overall Performance Score & Grade:** Evaluates both avatar components and Animator Controllers into a clear score and grade (`Excellent` through `FPSKiller`) with independent toggles to isolate component vs. controller overhead.
* **PC, Mobile & Suggested Thresholds:** Compares triangles, skinned meshes, material slots, PhysBones, contacts, constraints, lights, and particles against standard VRChat limits and **Suggested by KitsuneBa** targets.
* **Deep Animator Controller Breakdown:** Counts total layers, states, sub-state machines, transitions, AnyState transitions, conditions, and Write Defaults (`ON` vs. `OFF`), with a sortable per-layer table to pinpoint heavy FX layers.
* **One-Click Material & Texture Optimization:** Batch-compress textures, strip unused serialized material properties, configure **lilToon** and **Poiyomi** shadow casting and distance fade, adjust render queues, and create 1-click material backups.
* **Hierarchy Component Finder:** Search and sort your avatar's hierarchy by component type (`VRCPhysBone`, `SkinnedMeshRenderer`, `VRCParentConstraint`, `VRCContactReceiver`, etc.) and triangle or vertex count.
* **Exact Mesh & Texture VRAM Calculator:** Calculates the exact GPU memory footprint in MB for every mesh and texture on your avatar.
