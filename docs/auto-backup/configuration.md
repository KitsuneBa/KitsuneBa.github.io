---
sidebar_label: Settings & Backup Structure
---

# Settings & Backup Structure

You can configure where **Auto Backup** stores your scene archives and how frequently saves are captured from **Tools -> KitsuneBa's Tools -> Auto Backup**.

---

## Window Controls

- **Auto Backup Status:**
  - Click the status button at the top of the window to toggle automatic scene backups ON or OFF at any time.
- **Backup Destination Folder:**
  - Displays the current root path where backups are saved (defaults to `Assets/!KitsuneBa/AutoBackup`).
  - **Browse:** Select any directory on your computer, including external drives or cloud-synchronized folders.
  - **Open:** Opens the current backup directory directly in Windows File Explorer.
- **Cooldown Interval:**
  - Sets the minimum cooldown duration in seconds between consecutive backups (default: `60s`).
  - Use the arrow buttons to adjust in 5-second increments (1-second increments below 5 seconds), or hold **Shift** while clicking for 10-second increments.
- **Logs & Clear Logs:**
  - Displays a scrollable history of timestamped backup events and cooldown notices, with a one-click **Clear Logs** button to reset history.

---

## Backup Directory Structure

Every backup is organized cleanly using the following directory layout:

```text
<BackupFolder>/
 └── <ProjectName>/
      └── <SceneName>/
           └── <YYYY-MM-DD>/
                └── <SceneName>_<YYYY-MM-DD_HH-mm-ss>.unity
```

### Restoring an Earlier Scene
To restore a previous version of your scene:

1. Click **Open** in the Auto Backup window, or navigate to `Assets/!KitsuneBa/AutoBackup` in the Unity Project window.
2. Locate the date folder and timestamped `.unity` file you wish to recover.
3. Open the backup scene directly in Unity or copy it back to your primary scenes folder.
