// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Getting Started',
      collapsed: false,
      items: [
        'intro',
        'vpm-listing',
      ],
    },
    {
      type: 'category',
      label: 'Toggle Accelerator',
      collapsed: false,
      items: [
        'toggle-accelerator/index',
        'toggle-accelerator/features',
        'toggle-accelerator/faq',
      ],
    },
    {
      type: 'category',
      label: 'Other Tools (Preview)',
      collapsed: false,
      items: [
        'tools/auto-scene-backup',
        'tools/avatar-optimization-helper',
        'tools/import-highlighter',
      ],
    },
  ],
};

module.exports = sidebars;
