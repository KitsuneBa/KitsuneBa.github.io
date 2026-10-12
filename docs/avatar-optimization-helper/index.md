---
sidebar_label: Overview & Analysis
---

# Avatar Optimization Helper

**Avatar Optimization Helper** is an all-in-one Unity editor window that inspects your VRChat avatars and Animator Controllers, calculates a detailed performance score, and provides one-click tools to reduce VRAM usage, clean materials, and locate heavy components.

<div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', margin: '1.25rem 0' }}>
  <a className="button button--primary" href="vcc://vpm/addRepo?url=https://kitsuneba.github.io/KitsuneBaTools/index.json" style={{ textDecoration: 'none' }}>
    ⚡ Install via VCC / ALCOM
  </a>
  <a className="button button--outline button--secondary" href="https://github.com/KitsuneBa/AvatarOptimizationHelper" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
    GitHub Repository
  </a>
</div>

---

## 🛠️ Opening the Tool

1. In Unity, go to the top menu bar:
   **Tools &rarr; 🦊KitsuneBa's Tools🦊 &rarr; 🦊Avatar Optimization Helper🦊**
2. Drag and drop one or more **Avatars** (`GameObject` from your Hierarchy) or **Animator Controllers** (`RuntimeAnimatorController` from your Project window) into the drop zone at the top of the window.
3. Use the **Targets** list to switch between analyzed objects or remove them when finished.

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
