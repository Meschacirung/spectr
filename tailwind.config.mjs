/** @type {import('tailwindcss').Config} */
import themer from '@tailus/themer'

const defaultTheme = require("tailwindcss/defaultTheme");

export default {
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
		'./node_modules/@tailus/themer-**/dist/**/*.{js,ts}'
	],
	darkMode:"class",
	safelist: [
		{
			pattern: /(bg|text)-(gray|primary|secondary|accent)-(50|100|200|300|400|500|600|700|800|900|950)/,
		},
	],
	theme: {
		extend: {
			colors: ({ colors }) => ({
				primary: colors.blue,
				secondary: colors.purple,
				accent : colors.pink,
				success: colors.green,
				danger: colors.red,
				warning: colors.yellow,
				info: colors.blue,
				gray : colors.zinc,
				white: colors.white,
				black: colors.black,
				transparent: colors.transparent,
			}),
			fontFamily: {
				sans: ['Geist', 'Inter', ...defaultTheme.fontFamily.sans],
				mono : ['GeistMono', 'fira-code', ...defaultTheme.fontFamily.mono],
			},
		},
	},
	plugins: [
		themer({
			// ... your themer config
			background: "lighter",
			border:"light",
			radius: "smooth",
			shadow: {
				size: "md",
				opacity:5
			}
		})
	],
}
