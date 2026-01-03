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
				background: '#323a43',
				card: '#ebe7dc',
				primary: '#d4cfc0',
				secondary: '#a89f94',
			},
			fontFamily: {
				serif: ['Georgia', 'Garamond', 'serif'],
			},
		},
	},
	plugins: [],
}
