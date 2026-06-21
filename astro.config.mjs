// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// User/org page (virengovin.github.io) deploys from the domain root, so no `base` needed.
export default defineConfig({
  site: 'https://virengovin.github.io',
  integrations: [mdx(), sitemap()],
});
