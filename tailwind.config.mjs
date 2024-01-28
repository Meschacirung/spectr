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
		keyframes: {
			overlayShow: {
				from: { opacity: 0 },
				to: { opacity: 1 },
			},
			contentShow: {
				from: { opacity: 0, transform: 'translate(-50%, -48%) scale(0.96)' },
				to: { opacity: 1, transform: 'translate(-50%, -50%) scale(1)' },
			},
		},
		animation: {
			overlayShow: 'overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1)',
			contentShow: 'contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1)',
		},
	},
	plugins: [
		themer({
			// ... your themer config
			appearance:"dark",
			background: "light",
			border:"light",
			radius: "smooth",
			padding:"large",
			shadow: {
				size: "md",
				opacity:5
			}
		})
	],
}
