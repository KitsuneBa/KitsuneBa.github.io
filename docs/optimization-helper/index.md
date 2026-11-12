---
sidebar_label: Overview & Usage
---

# Optimization Helper

**Optimization Helper** is a unified Unity editor window that inspects your VRChat avatars and Animator Controllers, calculates an accurate performance score, and provides one-click tools to reduce VRAM usage, clean unused material data, and locate heavy hierarchy components.

Whether preparing an avatar for crowded public worlds or optimizing for standalone Quest users, Optimization Helper gives you clear, actionable guidance on where performance is lost and how to recover it.

---

## How It Works

1. In Unity, open the tool from the menu bar:
   **Tools -> KitsuneBa's Tools -> Optimization Helper**
2. Drag and drop one or more **Avatar GameObjects** from your Hierarchy or **Animator Controllers** from your Project window into the drop area at the top.
3. Use the **Targets** list to switch between analyzed objects or remove them when you are done inspecting.

---

## Key Features

- **Overall Performance Score & Grade:** Evaluates both avatar components and Animator Controllers into a clear grade (from `Excellent` down to `FPSKiller`), with independent toggles to isolate component overhead versus controller overhead.
- **PC, Mobile & Suggested Thresholds:** Compares polygons, skinned meshes, material slots, PhysBones, contacts, constraints, lights, and particle systems against standard VRChat limits alongside **Suggested by KitsuneBa** recommended targets.
- **Deep Animator Controller Breakdown:** Counts total layers, states, sub-state machines, transitions, AnyState transitions, conditions, and Write Defaults (`ON` vs `OFF`), with a sortable per-layer table to pinpoint heavy FX layers.
- **One-Click Material & Texture Optimization:** Batch-compress textures, strip unused serialized material properties, configure shadow casting and distance fade on lilToon and Poiyomi shaders, adjust render queues, and create instant material backups.
- **Hierarchy Component Finder:** Quickly locate components across complex avatar armatures without manually expanding bone chains. Filter and sort by component type, polygon count, or material count.
- **Exact Mesh & Texture VRAM Footprint:** Calculates the exact GPU memory consumption in megabytes (MB) for every mesh and texture on your avatar.
