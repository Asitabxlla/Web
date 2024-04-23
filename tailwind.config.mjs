/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
		
		},
	},
	plugins: [
		require("daisyui"),
		require('tailwindcss-animated')
	],
	daisyui: {
		themes: [
		  {
			main: {
			  "primary": "#ff5151",
			  "secondary": "#0f1825",
			  "accent": "#0609a1",
			  "neutral": "#292020",
			  "base-100": "#172439",
			},
		  },
		],
	  },
}

