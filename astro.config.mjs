import { defineConfig } from 'astro/config'
import vercelServerless from '@astrojs/vercel/serverless'
import tailwind from '@astrojs/tailwind'

// https://astro.build/config
export default defineConfig({
	site: 'https://portfolio-eight-coral-65.vercel.app',
	base: "/",
	output: "hybrid",
	adapter: vercelServerless({
		webAnalytics: true,
		imageService: true,
	}),
	integrations: [tailwind()],
	trailingSlash: 'always',
	i18n: {
		defaultLocale: "en",
		locales: ["en", "es"],
		routing: {
			prefixDefaultLocale: true
		}
	}
})
