// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    'intro',
    'vpm-listing',
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
  ],
};

module.exports = sidebars;
