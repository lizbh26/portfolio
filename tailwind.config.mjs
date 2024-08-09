/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: "#e11d48",
				secondary: "#fb7185",
				background: "#171717"
			}
		},
	},
	plugins: [],
}
