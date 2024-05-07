/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
				'./node_modules/flowbite/**/*.js' 
			],
	theme: {
		extend: {
		
		},
	},
	plugins: [
		require("daisyui"),
		require('tailwindcss-animated'),
		require('flowbite/plugin')
	],
	daisyui: {
		themes: [
		  {
			main: {
			  "primary": "#ff5151",
			  "secondary": "#0f1825",
			  "accent": "#0609a1",
			  "base-100": "#172439",
			},
		  },
		],
	  },
}

