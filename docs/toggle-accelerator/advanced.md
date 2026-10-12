---
sidebar_label: Build Modes & Helpers
---

# Build Modes, Optimization & Helpers

**Toggle Accelerator** adapts to your preferred avatar workflow and includes dedicated optimization modes and helper components for advanced menu and constraint management.

---

## 🏗️ Build Modes

At the top of the **Toggle Accelerator** inspector, you can choose between four **Build Modes**:

1. **Standalone (Default):**
   * Non-destructively generates animator layers, clips, parameters, and expression menus automatically when you upload or test your avatar (via NDMF / VRChat SDK build hooks).
   * Requires no external third-party avatar frameworks.
2. **Modular Avatar:**
   * Generates native **Modular Avatar** components (`MA Menu Item`, `MA Merge Animator`, `MA Parameters`, `MA Shape Changer`, etc.) so your toggles integrate directly into a Modular Avatar pipeline.
3. **VRCFury:**
   * Generates native **VRCFury** Toggle and Full Controller components.
4. **Instant:**
   * Immediately writes the generated Animator Controller, AnimationClips, Expression Parameters, and Expression Menus into your project's `Assets/!KitsuneBa/Temporary` folder so you can inspect or customize the raw Unity assets directly.

---

## 🚀 Animator Optimization Modes

Each Toggle Group can use the optimization strategy that best fits your avatar:

* **Optimize (Default):** Consolidates toggles into efficient layer structures to keep frame time low.
* **Bake:** Bakes static or single-state changes directly into the avatar at build time where possible, eliminating runtime animator overhead.
* **AAP (Animated Animator Parameters):** Packs multiple toggles and reactive **Trigger Object** conditions (`Any` or `Every`) into highly optimized Direct BlendTrees so dozens of toggles and reactive rules run in minimal animator layers.
* **AssetOptimizer:** Structures layers for maximum compatibility with external build-time avatar optimizers.
* **None:** Generates standard individual 2-state animator layers per toggle group.

---

## 🌳 Menu Visualizer & Third-Party Conversion

* **Interactive Menu Tree:** The built-in menu visualizer displays your avatar's entire VRChat Expressions Menu layout right inside the inspector, including existing **Modular Avatar** and **VRCFury** menu items. You can rename menus and parameters inline and see page capacities at a glance.
* **Scan & Convert Existing Toggles:** Toggle Accelerator can automatically scan your avatar for existing VRCFury and Modular Avatar toggles and convert them into Toggle Accelerator groups with one click.
* **Live Scene Preview:** Toggle the preview icon on any group to immediately see its active state in the Scene view. Preview objects are tagged `EditorOnly` and automatically cleaned up before entering Play Mode or building.

---

## 🧰 Helper Components

In addition to the main component, the package includes two helper components under **Add Component &rarr; KitsuneBa**:

### Toggle Accelerator Submenu Merger
* Redirects or merges expression submenus into a target `VRCExpressionsMenu` asset or custom menu path during build, making it easy to combine menus from multiple prefabs into one clean folder.

### Toggle Accelerator World Freeze
* Standalone helper component for configuring world-space constraint freezes on specific avatar objects, props, or bone chains, with automatic hierarchy reference re-binding.
