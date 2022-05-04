const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
(module.exports = {
    title: 'Genomenal',
    url: 'https://genomenal.com',
    baseUrl: '/ngsw-docs-en/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.png',
    organizationName: 'genomenal', // Usually your GitHub org/user name.
    projectName: 'ngsw-docs-en', // Usually your repo name.

    presets: [
        [
            '@docusaurus/preset-classic',
            {
                docs: {
                    routeBasePath: '/',
                    homePageId: 'intro',
                    sidebarPath: require.resolve('./sidebars.js'),
                    // editUrl: 'https://github.com/genomenal/ngsw-docs-en/edit/master/website/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],

  themeConfig:
    ({
      navbar: {
        title: '',
        logo: {
          alt: 'Genomenal Logo',
          src: 'img/app-logo.svg',
		  srcDark: 'img/app-logo-white.svg',
		  href: 'https://genomenal.com',
        },
        items: [],
      },
      footer: {
        style: 'dark',
        links: [],
		copyright: `© 2019-2022 Novel Software Systems. All rights reserved.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
	  algolia: {
          apiKey: 'fd0be1a4b0953b8d432a3361f8bb1b67',
          indexName: 'ngsw-en',
          appId: '7Q65UNCM90',
      }
    }),
});
