---
sidebar_label: Overview & Usage
---

# Auto Backup

**Auto Backup** creates timestamped backup copies of your Unity scenes whenever you save (`Ctrl + S`), protecting your avatar project from accidental edits, broken prefab overrides, or unexpected Unity crashes.

---

## How It Works

1. Once installed, **Auto Backup** hooks directly into Unity's scene-saving pipeline.
2. Whenever you save a modified scene, it automatically archives a copy of the `.unity` scene file into an organized directory with the current date and time.
3. To open the configuration and log window, go to:
   **Tools -> KitsuneBa's Tools -> Auto Backup**

---

## Key Features

- **Zero Interruption:** Backups trigger instantaneously when you press `Ctrl + S`, with no editor freezes while you are posing an avatar or editing hierarchies.
- **Smart Cooldown Timer:** Prevents disk clutter if you press `Ctrl + S` multiple times in short succession.
- **Structured Hierarchy:** Backups are organized cleanly by **Project Name**, **Scene Name**, and **Date**.
- **Live Action Log:** Review recent backups and cooldown notifications directly in the tool window.
