---
sidebar_label: Analysis, Materials & VRAM
---

# Analysis, Materials & VRAM

Optimization Helper is organized into specialized tabs that guide you through diagnosing performance bottlenecks, cleaning materials, locating heavy components, and measuring VRAM consumption.

---

## Tab 1: Analysis

The **Analysis** tab provides an immediate breakdown of everything impacting your avatar's frame rate and performance rank:

### Performance Score & Grade
- Calculates a weighted score and performance grade: `Excellent`, `Good`, `Medium`, `Poor`, `VeryPoor`, `ExtremelyPoor`, `CriticallyPoor`, or `FPSKiller`.
- Features independent checkboxes for **Controllers** and **Components** scoring so you can determine whether frame drops are caused by animator complexity or heavy meshes and PhysBones.

### Avatar Components Breakdown
- Measures every avatar metric against VRChat PC limits, Quest mobile limits, and suggested creator targets:
  - Triangles and vertex counts
  - Skinned mesh renderers and material slots
  - PhysBone components, affected transforms, colliders, and collision check counts
  - Contact receivers and senders
  - Parent, position, and rotation constraints
  - Lights, audio sources, and particle systems

### Animator Controllers Diagnostics
- Scans all layers, sub-state machines, and blend trees on the avatar's Animator Controllers:
  - Counts total layers, states, and StateMachineBehaviours
  - Reports **Write Defaults** consistency (`ON` vs `OFF`) to help you avoid animator conflicts
  - Measures total transitions, self-transitions, **AnyState** transitions, and conditions
  - Provides a **sortable layer table** (sort by layer index, weight, states, AnyState count, transitions, or conditions) to locate slow FX layers instantly.

---

## Tab 2: Materials

The **Materials** tab includes four dedicated tools to optimize textures, strip unused material data, and adjust shader settings:

### 1. Texture Optimization
- Scans all textures referenced by avatar materials and animators.
- Filter textures by maximum resolution (`32` up to `8192`).
- Batch-configure compression format, texture quality (`None`, `Low`, `Normal`, `High`), and optional **Crunch Compression** (`0` to `100`).
- **Lock Textures:** Protect specific face masks, normal maps, or UI icons from batch adjustments.
- Apply optimizations immediately or configure them to run non-destructively during avatar build.

### 2. Material Cleaner
- Swapping shaders often leaves behind orphaned serialized properties and hidden texture references in material asset files.
- The Material Cleaner inspects materials, identifies unused serialized data, and strips it cleanly to reduce avatar package size and save memory.

### 3. Shadow Casting & Distance Fade
- Quickly set shadow-casting modes across all renderers on the avatar.
- Native integration with **lilToon** and **Poiyomi** shaders to configure distance fading and darkness levels (`Slightly Dark`, `Balanced Dark`, `Extra Dark`) to prevent visual artifacts in dark worlds.

### 4. Render Queue & Material Backup
- Inspect and batch-adjust material render queues (`Opaque 2000`, `Cutout 2450`, `Transparent 3000`, or custom values).
- **One-Click Backup:** Creates a safe duplicate copy of your materials in `Assets/Materials/Backup/` before you make bulk changes.

---

## Tab 3: Finder

The **Finder** tab lets you search and inspect your avatar hierarchy without hunting through dozens of armature bone chains:

- **Filter by Component:** Locate `SkinnedMeshRenderer`, `MeshRenderer`, `VRCPhysBone`, `VRCPhysBoneCollider`, `VRCContactReceiver`, `VRCParentConstraint`, `AudioSource`, `Light`, or `ParticleSystem` components.
- **Search & Sort:** Search GameObjects by name and sort results by **Name**, **Triangle Count**, **Material Count**, or **Vertex Count**.
- Clicking any result instantly highlights and selects the GameObject in the Unity Hierarchy and Inspector.

---

## Tab 4: VRAM

Get a clear measurement of GPU video memory consumption before uploading:

- **Mesh VRAM:** Displays every mesh on the avatar with its vertex count, triangle count, blendshape count, base memory, blendshape memory, and total VRAM in megabytes (MB).
- **Texture VRAM:** Details every texture with its format, resolution, mipmap status, crunch compression state, and exact memory footprint in megabytes (MB).

---

## Tab 5: Tips & Build Tracker

- **Optimization Suggestions:** Detects installed avatar tools and highlights recommended actions based on your avatar's specific analysis results.
- **Build Optimization Log:** Displays a post-build report summarizing what was optimized when entering Play Mode or uploading to VRChat.
