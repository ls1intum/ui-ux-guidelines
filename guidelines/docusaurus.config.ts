import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)
const GUIDELINES_REPOSITORY_URL = "https://github.com/ls1intum/ui-ux-guidelines"
const PAGE_TITLE = "UI-UX Guidelines @ AET"

const config: Config = {
  title: "Welcome to the UI-UX Guidelines @ AET",
  tagline: 'Guidelines and best practices for UI/UX design at Applied Education Technologies (AET)',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/username.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Remove this to remove the "edit this page" links.
          editUrl: GUIDELINES_REPOSITORY_URL,
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Remove this to remove the "edit this page" links.
          editUrl: GUIDELINES_REPOSITORY_URL,
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: PAGE_TITLE,
      logo: {
        alt: 'TUM Logo',
        src: 'img/tum-logo-blue.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Tutorial',
        },
        {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: GUIDELINES_REPOSITORY_URL,
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Community',
          items: [
            {
              label: 'AET Website',
              href: 'https://aet.cit.tum.de/',
            },
            {
              label: 'AET LinkedIn',
              href: 'https://www.linkedin.com/company/tumaet/posts/?feedView=all',
            },
            {
              label: 'AET Instagram',
              href: 'https://www.instagram.com/tum.aet/',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub - UI-UX Guidelines',
              href: GUIDELINES_REPOSITORY_URL,
            },
              {
                  label: 'GitHub - AET Projects',
                  href: "https://github.com/ls1intum",
              },
          ],
        },
      ],
      copyright: `© 2025 Technische Universität München – Built with ❤️ by the UI-UX Cross Project Team at Applied Education Technologies (AET)`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
