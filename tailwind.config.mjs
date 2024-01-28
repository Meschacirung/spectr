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
				primary: {
				50: 'rgb(var(--colors-primary-50) / <alpha-value>)',
				100: 'rgb(var(--colors-primary-100) / <alpha-value>)',
				200: 'rgb(var(--colors-primary-200) / <alpha-value>)',
				300: 'rgb(var(--colors-primary-300) / <alpha-value>)',
				400: 'rgb(var(--colors-primary-400) / <alpha-value>)',
				500: 'rgb(var(--colors-primary-500) / <alpha-value>)',
				600: 'rgb(var(--colors-primary-600) / <alpha-value>)',
				700: 'rgb(var(--colors-primary-700) / <alpha-value>)',
				800: 'rgb(var(--colors-primary-800) / <alpha-value>)',
				900: 'rgb(var(--colors-primary-900) / <alpha-value>)',
				950: 'rgb(var(--colors-primary-950) / <alpha-value>)',
			},
			secondary: {
				50: 'rgb(var(--colors-secondary-50) / <alpha-value>)',
				100: 'rgb(var(--colors-secondary-100) / <alpha-value>)',
				200: 'rgb(var(--colors-secondary-200) / <alpha-value>)',
				300: 'rgb(var(--colors-secondary-300) / <alpha-value>)',
				400: 'rgb(var(--colors-secondary-400) / <alpha-value>)',
				500: 'rgb(var(--colors-secondary-500) / <alpha-value>)',
				600: 'rgb(var(--colors-secondary-600) / <alpha-value>)',
				700: 'rgb(var(--colors-secondary-700) / <alpha-value>)',
				800: 'rgb(var(--colors-secondary-800) / <alpha-value>)',
				900: 'rgb(var(--colors-secondary-900) / <alpha-value>)',
				950: 'rgb(var(--colors-secondary-950) / <alpha-value>)',
			},
			accent: {
				50: 'rgb(var(--colors-accent-50) / <alpha-value>)',
				100: 'rgb(var(--colors-accent-100) / <alpha-value>)',
				200: 'rgb(var(--colors-accent-200) / <alpha-value>)',
				300: 'rgb(var(--colors-accent-300) / <alpha-value>)',
				400: 'rgb(var(--colors-accent-400) / <alpha-value>)',
				500: 'rgb(var(--colors-accent-500) / <alpha-value>)',
				600: 'rgb(var(--colors-accent-600) / <alpha-value>)',
				700: 'rgb(var(--colors-accent-700) / <alpha-value>)',
				800: 'rgb(var(--colors-accent-800) / <alpha-value>)',
				900: 'rgb(var(--colors-accent-900) / <alpha-value>)',
				950: 'rgb(var(--colors-accent-950) / <alpha-value>)',
			},
			gray: {
				50: 'rgb(var(--colors-gray-50) / <alpha-value>)',
				100: 'rgb(var(--colors-gray-100) / <alpha-value>)',
				200: 'rgb(var(--colors-gray-200) / <alpha-value>)',
				300: 'rgb(var(--colors-gray-300) / <alpha-value>)',
				400: 'rgb(var(--colors-gray-400) / <alpha-value>)',
				500: 'rgb(var(--colors-gray-500) / <alpha-value>)',
				600: 'rgb(var(--colors-gray-600) / <alpha-value>)',
				700: 'rgb(var(--colors-gray-700) / <alpha-value>)',
				800: 'rgb(var(--colors-gray-800) / <alpha-value>)',
				900: 'rgb(var(--colors-gray-900) / <alpha-value>)',
				950: 'rgb(var(--colors-gray-950) / <alpha-value>)',
				},
				success: colors.green,
				danger: colors.red,
				warning: colors.yellow,
				info: colors.blue,
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
			border:"lighter",
			radius: "smooth",
			padding:"large",
			shadow: {
				size: "md",
				opacity:3.5
			}
		})
	],
}
