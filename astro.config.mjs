import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  site: 'https://ashley-lizbeth.github.io',
  base: "/portfolio",
  integrations: [tailwind(), svelte()],
  trailingSlash: 'always',
  i18n: {
    defaultLocale: "en",
    locales: ["en", "es"],
    routing: {
      prefixDefaultLocale: true
    }
  }
});