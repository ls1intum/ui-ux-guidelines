# Website

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

## Prerequisites

Use the Node.js version from [.nvmrc](../.nvmrc) (the current LTS). With [nvm](https://github.com/nvm-sh/nvm), run `nvm use` in the repository.

## Installation

```bash
npm ci
```

`npm ci` installs exactly the versions from `package-lock.json`. Use `npm install <package>` only when you want to add or change a dependency.

## Local Development

```bash
npm start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

## Build and Checks

```bash
npm run typecheck
npm run build
```

`npm run build` generates static content into the `build` directory and can be served using any static contents hosting service.
It fails on broken internal links and anchors, so run both commands before you open a pull request. The same checks run automatically for every pull request.

To test the build locally, you can run:
```bash
npm run serve
```

## Adding or Changing a Page

1. Create a file in [docs](docs) named `position<N>-<topic>.mdx`, where `<N>` is the position in the sidebar.
2. Start it with front matter and exactly one `#` heading:
   ```mdx
   ---
   sidebar_position: 9
   slug: my-topic
   ---

   # My Topic
   ```
   The page is then available at `/docs/my-topic` and appears in the sidebar automatically.
3. Follow the conventions of the existing pages:
   - Start longer pages with a short `## ✅ TL;DR` list of the most important rules.
   - Use `##` headings for the main sections (most pages prefix them with an emoji) and do not skip heading levels.
   - Use tables for rules and recommendations, and the `Callout` component for notes:
     ```mdx
     import Callout from "../src/components/callout/callout";
     import {CalloutVariant} from "../src/components/callout/callout.types";

     <Callout variant={CalloutVariant.info}>
         A short note.
     </Callout>
     ```
   - Link to other guideline pages with absolute paths such as `/docs/colors` or `/docs/buttons#target-size`.
   - Add images as described in [docs/assets/README.md](docs/assets/README.md), always with a meaningful `alt` text.
4. Check external facts and links against their primary source (e.g., the W3C for WCAG) before you add them.

## Dependencies

Dependency versions are pinned. [Renovate](https://docs.renovatebot.com/) opens pull requests for updates of npm packages and GitHub Actions (see [renovate.json](../renovate.json)).

## Deployment

We are using GitHub pages to host the website.

Every push to `main` that changes the site builds and deploys it, see [deploy-guidelines.yml](../.github/workflows/deploy-guidelines.yml).
Pull requests are built and type-checked without deploying, see [build-guidelines.yml](../.github/workflows/build-guidelines.yml).
