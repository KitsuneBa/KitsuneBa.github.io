---
sidebar_label: Overview & Usage
---

# Comfortable Resting Scene

**Comfortable Resting Scene** provides a minimalist, pleasant avatar home room environment inside Unity so you can work on and preview your avatars in a cozy, well-lit atmosphere instead of an empty default skybox.

<div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', margin: '1.25rem 0' }}>
  <a className="button button--primary" href="vcc://vpm/addRepo?url=https://kitsuneba.github.io/KitsuneBaTools/index.json" style={{ textDecoration: 'none' }}>
    ⚡ Install via VCC / ALCOM
  </a>
</div>

---

## 🛠️ How to Use

1. Open the tool at any time from the top menu bar:
   **Tools &rarr; 🦊KitsuneBa's Tools🦊 &rarr; 🦊Comfortable Resting Scene🦊**
   *(By default, the prompt window also appears automatically when you open your project if the resting scene is not yet loaded.)*
2. Click **Load Scene**.
3. The **ComfortableRestingScene** environment is loaded **additively** (`OpenSceneMode.Additive`) alongside your current working scene, placed at the top of the Hierarchy, and set as the active lighting environment.

---

## ✨ Features & Controls

* **Non-Destructive Additive Loading:** Loads right alongside your existing avatar scene without closing or overwriting your open work.
* **Automatic Startup Prompt:** Offers to load the environment when launching Unity if it isn't already open in your Hierarchy.
* **Don't Show Again Toggle:** Click the **Don't Show Again** button in the window if you prefer to only open and load the scene manually from the **Tools** menu.
