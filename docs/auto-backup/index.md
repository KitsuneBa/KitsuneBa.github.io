---
sidebar_label: Overview & Usage
---

# Auto Backup

**Auto Backup** automatically creates timestamped backup copies of your Unity scene whenever you save (`Ctrl + S`), protecting your avatar project from accidental edits, broken prefabs, or Unity crashes.

---

## 🛠️ How It Works

1. Once installed, **Auto Backup** hooks into Unity's scene-saving pipeline.
2. Whenever you save a modified scene, it automatically copies the `.unity` scene file into an organized archive directory with the current date and time.
3. To open the configuration and log window, go to:
   **Tools → 🦊KitsuneBa's Tools🦊 → 🦊Auto Backup🦊**

---

## ✨ Key Features

* **Zero Interruption:** Backups happen instantaneously when you already press `Ctrl + S`, with no unexpected editor freezes while you are in the middle of posing or editing.
* **Smart Cooldown Timer:** Prevents filling up your disk if you press `Ctrl + S` multiple times in a row.
* **Organized Folder Hierarchy:** Automatically sorts backups by **Project Name**, **Scene Name**, and **Date**.
* **Live Action Log:** Inspect recent backups and skipped-save cooldown notifications directly inside the tool window.
