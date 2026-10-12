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
        blog: false,
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
        links: [],
        copyright: `Copyright © 2026 KitsuneBa`,
      },
    }),
};

module.exports = config;
