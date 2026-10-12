---
sidebar_label: Settings & Backup Structure
---

# Settings & Backup Structure

You can customize where **Auto Scene Backup** stores your scene archives and how frequently backups are created from **Tools &rarr; 🦊KitsuneBa's Tools🦊 &rarr; 🦊Auto Scene Backup🦊**.

---

## 🎛️ Window Controls

* **Auto Backup Enabled / Disabled:**
  * Click the status button at the top of the window to toggle automatic scene backups ON (green) or OFF (red) at any time.
* **Backup Folder:**
  * Displays the current root path where backups are saved (defaults to `Assets/!KitsuneBa/AutoSceneBackup`).
  * **Browse:** Select any folder inside or outside your Unity project (for example, an external drive or cloud-synced backup folder).
  * **Open:** Opens the current backup directory directly in Windows File Explorer.
* **Cooldown:**
  * Sets the minimum time (in seconds) between consecutive backups (default: `60s`).
  * Use the `◀` and `▶` buttons to adjust in `5s` increments (`1s` increments below `5s`), or hold **Shift** while clicking for `10s` increments.
* **Logs & Clear Logs:**
  * Shows a scrollable history of timestamped backup events and cooldown skips, with a one-click **Clear Logs** button.

---

## 📂 Backup Folder Structure

Every backup is automatically organized using the following folder and filename pattern:

```text
<BackupFolder>/
 └── <ProjectName>/
      └── <SceneName>/
           └── <YYYY-MM-DD>/
                └── <SceneName>_<YYYY-MM-DD_HH-mm-ss>.unity
```

### Restoring a Backup
To restore an earlier version of your scene:
1. Click **Open** in the Auto Scene Backup window (or navigate to `Assets/!KitsuneBa/AutoSceneBackup` in the Project window).
2. Locate the date folder and timestamped `.unity` file you want to recover.
3. Open the backup scene directly in Unity or copy it back to your working scenes folder.
