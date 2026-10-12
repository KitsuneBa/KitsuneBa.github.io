// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Getting Started',
      collapsible: true,
      collapsed: false,
      items: [
        'intro',
      ],
    },
    {
      type: 'category',
      label: 'Toggle Accelerator',
      collapsible: true,
      collapsed: false,
      items: [
        'toggle-accelerator/index',
        'toggle-accelerator/features',
        'toggle-accelerator/advanced',
        'toggle-accelerator/faq',
      ],
    },
    {
      type: 'category',
      label: 'Avatar Optimization Helper',
      collapsible: true,
      collapsed: false,
      items: [
        'avatar-optimization-helper/index',
        'avatar-optimization-helper/materials-and-vram',
      ],
    },
    {
      type: 'category',
      label: 'Import Highlighter',
      collapsible: true,
      collapsed: false,
      items: [
        'import-highlighter/index',
        'import-highlighter/settings',
      ],
    },
    {
      type: 'category',
      label: 'Auto Scene Backup',
      collapsible: true,
      collapsed: false,
      items: [
        'auto-scene-backup/index',
        'auto-scene-backup/configuration',
      ],
    },
  ],
};

module.exports = sidebars;
