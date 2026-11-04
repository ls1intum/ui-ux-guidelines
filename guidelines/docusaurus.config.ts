import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)
const GUIDELINES_REPOSITORY_URL =
  "https://github.com/ls1intum/ui-ux-guidelines";
const EDIT_URL = GUIDELINES_REPOSITORY_URL + "/tree/main/guidelines/";

// The GitHub code theme with darker token colors, so that all code reaches a contrast of at least 4.5:1 (WCAG AA)
const ACCESSIBLE_TOKEN_COLORS: Record<string, string> = {
  "#999988": "#6a737d",
  "#e3116c": "#c4105d",
  "#36acaa": "#177a78",
  "#00a4db": "#00739e",
  "#d73a49": "#c4303e",
};
const lightCodeTheme = {
  ...prismThemes.github,
  styles: prismThemes.github.styles.map((style) => ({
    ...style,
    style: {
      ...style.style,
      color: style.style.color
        ? (ACCESSIBLE_TOKEN_COLORS[style.style.color] ?? style.style.color)
        : undefined,
    },
  })),
};

const config: Config = {
  title: "UI-UX Guidelines @ AET",
  tagline:
    "Guidelines and best practices for UI/UX design at Applied Education Technologies (AET)",
  favicon: "img/tum-logo-blue.svg",

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4 (also enables @docusaurus/faster)
  },

  // Set the production url of your site here
  url: "https://ls1intum.github.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/ui-ux-guidelines/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "ls1intum", // Usually your GitHub org/username.
  projectName: "ui-ux-guidelines", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenAnchors: "throw",
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: "throw",
    },
  },

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          // Remove this to remove the "edit this page" links.
          editUrl: EDIT_URL,
          exclude: ["**/README.md"],
        },
        blog: false,
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themes: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        hashed: true,
        language: ["en"],
        indexBlog: false,
      },
    ],
  ],

  themeConfig: {
    // Social card shown when a page is shared (1200 × 630 px)
    image: "img/social-card.png",
    metadata: [
      {
        name: "keywords",
        content:
          "UI, UX, design guidelines, accessibility, WCAG, design tokens, TUM, AET",
      },
    ],
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: "UI-UX Guidelines @ AET",
      logo: {
        alt: "TUM Logo",
        src: "img/tum-logo-blue.svg",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "guidelinesSidebar",
          position: "left",
          label: "Guidelines",
        },
        {
          href: GUIDELINES_REPOSITORY_URL,
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Community",
          items: [
            {
              label: "AET Website",
              href: "https://aet.cit.tum.de/",
            },
            {
              label: "AET LinkedIn",
              href: "https://www.linkedin.com/company/tumaet/",
            },
            {
              label: "AET Instagram",
              href: "https://www.instagram.com/tum.aet/",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "GitHub - UI-UX Guidelines",
              href: GUIDELINES_REPOSITORY_URL,
            },
            {
              label: "GitHub - AET Projects",
              href: "https://github.com/ls1intum",
            },
          ],
        },
        {
          title: "Legal",
          items: [
            {
              label: "Imprint",
              to: "/imprint",
            },
            {
              label: "About Us",
              to: "/about",
            },
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} Technische Universität München – Built with ❤️ by the UI-UX Cross Project Team at Applied Education Technologies (AET)`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
