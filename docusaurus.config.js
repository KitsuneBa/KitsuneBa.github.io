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

  themes: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
      ({
        hashed: true,
        indexBlog: false,
        indexPages: true,
        docsRouteBasePath: 'docs',
        highlightSearchTermsOnTargetPage: true,
        searchBarShortcut: false,
        searchBarShortcutHint: false,
        searchBarPosition: 'right',
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
            href: 'https://x.com/kitsune_ba',
            position: 'right',
            className: 'header-icon-link header-x-link',
            'aria-label': 'X (Twitter)',
            title: 'X (Twitter)',
          },
          {
            href: 'https://bsky.app/profile/kitsuneba.bsky.social',
            position: 'right',
            className: 'header-icon-link header-bsky-link',
            'aria-label': 'Bluesky',
            title: 'Bluesky',
          },
          {
            href: 'https://kitsuneba.booth.pm',
            position: 'right',
            className: 'header-icon-link header-booth-link',
            'aria-label': 'BOOTH Shop',
            title: 'BOOTH Shop',
          },
          {
            href: 'https://ko-fi.com/kitsuneba',
            position: 'right',
            className: 'header-icon-link header-kofi-link',
            'aria-label': 'Ko-fi',
            title: 'Ko-fi',
          },
          {
            href: 'https://github.com/KitsuneBa',
            position: 'right',
            className: 'header-icon-link header-github-link',
            'aria-label': 'GitHub',
            title: 'GitHub',
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
