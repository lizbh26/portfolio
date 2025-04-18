import { defineConfig } from 'astro/config'

import svelte from '@astrojs/svelte'

import tailwindcss from '@tailwindcss/vite'

// https://astro.build/config
export default defineConfig({
	site: 'http://lizthecoder.me',
	integrations: [svelte()],
	trailingSlash: 'always',

	i18n: {
		defaultLocale: 'en',
		locales: ['en', 'es'],
		routing: {
			prefixDefaultLocale: true,
		},
	},

	vite: {
		plugins: [tailwindcss()],
	},
})
