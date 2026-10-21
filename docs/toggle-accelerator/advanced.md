---
sidebar_label: Build Modes & Helpers
---

# Build Modes, Optimization & Helpers

**Toggle Accelerator** adapts to your preferred avatar workflow and includes dedicated optimization modes and helper components for advanced menu and constraint management.

---

## 🏗️ Build Modes

At the top of the **Toggle Accelerator** inspector, you can choose between four **Build Modes**:

1. **Standalone:**
   * Non-destructively generates animator layers, clips, parameters, and expression menus automatically when you upload or test your avatar.
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

* **Optimize:** Consolidates toggles into efficient layer structures to keep frame time low.
* **Bake:** Bakes static or single-state changes directly into the avatar at build time where possible, eliminating runtime animator overhead.
* **AAP:** Uses Animated Animator Parameters to pack multiple toggles and reactive **Trigger Object** conditions (`Any` or `Every`) into Direct BlendTrees so dozens of toggles and reactive rules run in minimal animator layers.
* **AssetOptimizer:** Structures layers for maximum compatibility with external build-time avatar optimizers.
* **None:** Generates standard individual 2-state animator layers per toggle group.

---

## 🌳 Menu Visualizer & Third-Party Conversion

* **Interactive Menu Tree:** The built-in menu visualizer displays your avatar's entire VRChat Expressions Menu layout right inside the inspector, including existing **Modular Avatar** and **VRCFury** menu items. You can rename menus and parameters inline and see page capacities at a glance.
* **Scan & Convert Existing Toggles:** Toggle Accelerator can automatically scan your avatar for existing VRCFury and Modular Avatar toggles and convert them into Toggle Accelerator groups with one click.
* **Live Scene Preview:** Toggle the preview icon on any group to immediately see its active state in the Scene view. Preview objects are tagged `EditorOnly` and automatically cleaned up before entering Play Mode or building.

---

## ⚡ Quick Build & Full Build

In the footer of the Toggle Accelerator inspector, you can generate an avatar test clone directly in your scene with one click to test your toggles in Gesture Manager or inspect the generated setup:

* **Quick Build:** Builds an editor test copy near-instantly by running VRChat SDK and Toggle Accelerator build hooks while stripping heavy third-party optimizers (such as mesh combiners and texture bakes). This gives you a fast test copy in seconds without waiting for lengthy optimization steps.
* **Full Build:** Builds a complete editor test copy with all components and third-party optimizers running in full.

Both buttons automatically clone the avatar, run the non-destructive build preprocessing, disable the original avatar, and select the test copy in your hierarchy so you can immediately test it in Play Mode or inspect the generated Animator Controllers and parameters.

---

## 🧰 Helper Components (Build Helpers)

Toggle Accelerator is designed to work as a single main component on your avatar root or prefab. You do not need to add helper components manually.

During the avatar build process, Toggle Accelerator automatically generates and manages helper components behind the scenes:

### Toggle Accelerator World Freeze
* An internal helper component automatically created and attached during the build pipeline to resolve world-space parent constraints after Modular Avatar and VRCFury finish their processing.
* Implements `IEditorOnly` so it never uploads to VRChat or bloats avatar file size.
* Can also be inspected or added manually if you need standalone world-space constraint freezing on custom bone chains with automatic hierarchy reference re-binding.

### Toggle Accelerator Submenu Merger
* Generated during the build pipeline to automatically redirect and merge nested expression submenus across prefabs and folders into the final VRCExpressionsMenu layout.
* Ensures toggles distributed across multiple sub-prefabs integrate into cohesive menu folders without manual menu merging.
