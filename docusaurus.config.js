// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "KitsuneBa's Tools",
  tagline: 'Tools and assets to make avatar creation in VRChat faster and easier.',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://kitsuneba.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  baseUrl: '/',

  // GitHub pages deployment config.
  organizationName: 'KitsuneBa',
  projectName: 'KitsuneBa.github.io',
  trailingSlash: false,

  onBrokenLinks: 'warn',
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: 'docs',
        },
        blog: false, // You can enable this later if you want a blog/updates section
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'dark',
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: "KitsuneBa",
        logo: {
          alt: "KitsuneBa Logo",
          src: 'img/favicon.ico',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Documentation',
          },
          {
            to: '/docs/toggle-accelerator',
            label: 'Toggle Accelerator',
            position: 'left',
          },
          {
            to: '/docs/vpm-listing',
            label: 'VPM Repository',
            position: 'left',
          },
          {
            href: 'https://github.com/KitsuneBa/KitsuneBaTools',
            label: 'KitsuneBaTools',
            position: 'right',
          },
          {
            href: 'https://github.com/KitsuneBa',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Tools',
            items: [
              {
                label: 'Toggle Accelerator',
                to: '/docs/toggle-accelerator',
              },
              {
                label: 'Auto Scene Backup',
                to: '/docs/tools/auto-scene-backup',
              },
              {
                label: 'Avatar Optimization Helper',
                to: '/docs/tools/avatar-optimization-helper',
              },
              {
                label: 'Import Highlighter',
                to: '/docs/tools/import-highlighter',
              },
            ],
          },
          {
            title: 'VPM Repository',
            items: [
              {
                label: 'Add to VCC / ALCOM',
                to: '/docs/vpm-listing',
              },
              {
                label: 'KitsuneBaTools Listing',
                href: 'https://github.com/KitsuneBa/KitsuneBaTools',
              },
            ],
          },
          {
            title: 'Community & Code',
            items: [
              {
                label: 'GitHub Profile',
                href: 'https://github.com/KitsuneBa',
              },
              {
                label: 'ToggleAccelerator Source',
                href: 'https://github.com/KitsuneBa/ToggleAccelerator',
              },
            ],
          },
        ],
        copyright: `Copyright © 2026 KitsuneBa`,
      },
    }),
};

module.exports = config;
