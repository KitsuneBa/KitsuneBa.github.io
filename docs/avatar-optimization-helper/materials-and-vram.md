---
sidebar_label: Analysis, Materials & VRAM
---

# Analysis, Materials & VRAM

**Avatar Optimization Helper** is organized into dedicated tabs for performance scoring, material optimization, hierarchy searching, and VRAM measurement.

---

## 📊 Tab 1: Analysis

The **Analysis** tab gives you an immediate breakdown of what is impacting your avatar's frame time and rank:

### Performance Score
* Computes a comprehensive numerical score and performance grade (`Excellent`, `Good`, `Medium`, `Poor`, `VeryPoor`, `ExtremelyPoor`, `CriticallyPoor`, `FPSKiller`).
* Includes checkboxes to toggle **Controllers** and **Components** scoring independently so you can isolate animator overhead vs. mesh/component overhead.

### Components Analysis
* Compares every avatar metric (Triangles, Skinned Meshes, Material Slots, PhysBone Components, Affected Transforms, Colliders, Collision Check Count, Contacts, Constraints, Lights, Audio Sources, Particle Systems) against:
  * Standard **VRChat PC** thresholds
  * **Quest / Mobile** thresholds (toggleable)
  * **Suggested by KitsuneBa** recommended targets (toggleable)

### Controllers Analysis
* Deep-scans all Animator Controllers on your avatar (including sub-state machines and blend trees) and reports:
  * Total Animators, Controllers, Layers, States, Sub-State Machines, and Behaviours
  * **Write Defaults** `ON` vs. `OFF` state counts
  * Total Transitions, Self-Transitions, **AnyState** Transitions, Conditions, and Blend Trees
* Includes a **sortable per-layer table** (sort by Layer Order, Weight, States, AnyState, Transitions, or Conditions) so you can immediately spot your heaviest FX layers.

---

## 🎨 Tab 2: Materials

The **Materials** tab includes four specialized sub-utilities for cleaning up shaders and textures:

### 1. Texture Optimization
* Scans all textures used by your avatar and lets you filter by **Max Size** (`32` up to `8192`).
* Batch-configure **Compression Quality** (`None`, `Low`, `Normal`, `High`) and optional **Crunch Compression** (`0–100` quality).
* **Lock Individual Textures:** Protect specific masks, normal maps, or UI textures from batch changes.
* Choose to apply optimizations immediately or **Optimize On Build**.

### 2. Material Cleaner
* Scans your avatar's materials for leftover serialized properties and unused texture references (common after switching shaders) and strips them cleanly to reduce build size and memory.

### 3. Shadow Cast & Distance Fade
* Quickly fix shadow-casting settings across your avatar's renderers.
* Built-in support for **lilToon** and **Poiyomi** shaders to configure **Distance Fade** and darkness presets (`Slightly Dark`, `Balanced Dark`, `Extra Dark`).

### 4. Render Queue & Material Backup
* Inspect and batch-adjust material **Render Queues** (`Opaque 2000`, `Cutout 2450`, `Transparent 3000`, or custom values).
* **1-Click Material Backup:** Create a safe backup copy of your avatar's materials in `Assets/Materials/Backup/` before making bulk changes.

---

## 🔍 Tab 3: Finder (Component Finder)

Quickly search your avatar hierarchy for specific components without expanding dozens of armature bones:

* **Filter by Component Type:** `SkinnedMeshRenderer`, `MeshRenderer`, `VRCPhysBone`, `VRCPhysBoneCollider`, `VRCContactReceiver`, `VRCContactSender`, `VRCParentConstraint`, `AudioSource`, `Light`, `ParticleSystem`, and more.
* **Search & Sort:** Filter by GameObject name and sort results by **Name**, **Triangle Count**, **Material Count**, or **Vertex Count**.
* Click any result to select and highlight it in the Hierarchy and Inspector.

---

## 💾 Tab 4: VRAM

Get an accurate breakdown of how much GPU memory your avatar uses:

* **Mesh VRAM:** Lists every mesh on your avatar with its **Vertex Count**, **Triangle Count**, **BlendShape Count**, **Base MB**, **BlendShape MB**, and **Total MB**.
* **Texture VRAM:** Lists every texture referenced by your avatar's materials/animators with its **Format**, **Resolution**, **MipMap status**, **Crunch status**, and exact **Memory (MB)** footprint.

---

## 💡 Tab 5: Tips & Build Report

* Detects installed optimization packages in your project and suggests actionable improvements.
* Displays a **Build Optimization Report** log after building or testing your avatar so you can verify everything that was optimized.
