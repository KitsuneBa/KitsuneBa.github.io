---
sidebar_label: Overview & Usage
---

# Auto Scene Backup

**Auto Scene Backup** automatically creates timestamped backup copies of your Unity scene whenever you save (`Ctrl + S`), protecting your avatar project from accidental edits, broken prefabs, or Unity crashes.

<div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', margin: '1.25rem 0' }}>
  <a className="button button--primary" href="vcc://vpm/addRepo?url=https://kitsuneba.github.io/KitsuneBaTools/index.json" style={{ textDecoration: 'none' }}>
    ⚡ Install via VCC / ALCOM
  </a>
  <a className="button button--outline button--secondary" href="https://github.com/KitsuneBa/AutoSceneBackup" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
    GitHub Repository
  </a>
</div>

---

## 🛠️ How It Works

1. Once installed, **Auto Scene Backup** hooks into Unity's scene-saving pipeline (`EditorSceneManager.sceneSaved`).
2. Whenever you save a modified scene, it automatically copies the `.unity` scene file into an organized archive directory with the current date and time.
3. To open the configuration and log window, go to:
   **Tools &rarr; 🦊KitsuneBa's Tools🦊 &rarr; 🦊Auto Scene Backup🦊**

---

## ✨ Key Features

* **Zero Interruption:** Backups happen instantaneously when you already press `Ctrl + S`—no unexpected editor freezes while you are in the middle of posing or editing.
* **Smart Cooldown Timer:** Prevents filling up your disk if you spam `Ctrl + S` multiple times in a row.
* **Organized Folder Hierarchy:** Automatically sorts backups by **Project Name**, **Scene Name**, and **Date (`YYYY-MM-DD`)**.
* **Live Action Log:** Inspect recent backups and skipped-save cooldown notifications directly inside the tool window.
