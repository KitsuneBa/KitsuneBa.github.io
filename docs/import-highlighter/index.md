---
sidebar_label: Overview & Usage
---

# Import Highlighter

**Import Highlighter** automatically tracks newly imported, moved, renamed, and deleted assets in your Unity project and highlights them directly inside the **Project Window**, so you never lose track of where a `.unitypackage` unpacked its folders and files.

---

## 🛠️ How It Works

1. Once installed, **Import Highlighter** runs automatically in the background whenever you import a `.unitypackage`, drag files into Unity, move assets, or delete files.
2. In the **Unity Project Window**, newly added or modified files and their parent folders are highlighted with a colored background fill and outline border that smoothly fades out over time.
3. A compact **Import Highlighter** companion window lists every affected folder (`📁`) and file (`📄`) from the recent import batch.
   * You can also open the window manually at any time via **Tools → 🦊KitsuneBa's Tools🦊 → 🦊Import Highlighter🦊**.

---

## ✨ Key Features

* **Project Window Overlay:** Highlights both the imported files and their parent folder chain so you can follow the trail from `Assets/` down to the exact prefab or texture.
* **Click-to-Ping Navigation:** Click any item row or its `●` button in the Import Highlighter window to immediately select and ping that folder or asset in the Project window.
* **Hover-to-Pause Timer:** Moving your mouse cursor over the Import Highlighter window pauses the fade-out countdown so highlights remain visible for as long as you are inspecting them.
* **Auto-Collapse When Idle:** When all highlights finish fading out or are cleared, the window automatically shrinks down to a minimal compact bar to stay out of your way.
