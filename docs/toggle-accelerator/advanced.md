---
sidebar_label: Build Modes & Helpers
---

# Build Modes, Optimization & Helpers

**Toggle Accelerator** adapts to your preferred avatar setup and includes additional helper components for advanced menu management.

---

## 🏗️ Build Modes

At the top of the **Toggle Accelerator** inspector, you can select one of four **Build Modes**:

1. **Standalone (Default):**
   * Non-destructively generates animator layers, clips, parameters, and expression menus automatically when you upload or test your avatar (via NDMF / VRChat SDK build hooks).
   * Requires no third-party avatar frameworks.
2. **Modular Avatar:**
   * Generates native **Modular Avatar** components (`MA Menu Item`, `MA Merge Animator`, `MA Parameters`, `MA Shape Changer`, etc.) so your toggles integrate directly into a Modular Avatar workflow.
3. **VRCFury:**
   * Generates native **VRCFury** Toggle and Full Controller components.
4. **Instant:**
   * Immediately bakes the generated Animator Controller layers, AnimationClips, Expression Parameters, and Expression Menus directly to your project's `Assets` folder (`!KitsuneBa/ToggleAccelerator/Generated`) so you can inspect or edit them manually.

---

## 🚀 Animator Optimization Modes

When building your toggles, Toggle Accelerator offers several optimization strategies to keep your FX controller fast and lightweight:

* **Optimize:** Consolidates toggles into efficient layer structures to minimize frame-time overhead.
* **Bake:** Bakes static or single-state changes directly into the avatar at build time where possible.
* **AAP (Animated Animator Parameters):** Uses Direct BlendTree / AAP techniques to combine multiple toggles into minimal animator layers.
* **AssetOptimizer:** Prepares layers specifically for maximum compatibility with external build-time asset optimizers.
* **None:** Generates standard individual 2-state animator layers per toggle group.

---

## 🌳 Menu Visualizer & Third-Party Conversion

* **Interactive Menu Tree:** The built-in menu visualizer displays your avatar's entire Expressions Menu layout, including existing **Modular Avatar** and **VRCFury** menu items.
* **Convert Existing Toggles:** Toggle Accelerator can detect existing VRCFury and Modular Avatar toggles on your avatar and import/convert them into Toggle Accelerator groups with one click.
* **Live Scene Preview:** Click the preview icon on any group in the inspector to immediately preview its ON state in the Scene view. Preview changes are safely tagged `EditorOnly` and automatically reverted before play mode or upload.

---

## 🧰 Helper Components

In addition to the main component, the package includes two specialized helper components under **Add Component &rarr; KitsuneBa**:

### Toggle Accelerator Submenu Merger
* Allows you to redirect or merge expression submenus into a target `VRCExpressionsMenu` asset or custom menu path during build.

### Toggle Accelerator World Freeze
* Standalone helper component for setting up world-space constraint freezes on specific avatar objects or bone chains.
