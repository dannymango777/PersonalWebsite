/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				background: '#1e1e1e',
				card: '#2a2a2a',
				primary: '#ffffff',
				secondary: '#a0a0a0',
				border: '#3a3a3a',
			},
			fontFamily: {
				serif: ['Georgia', 'Garamond', 'serif'],
			},
		},
	},
	plugins: [],
}
