module.exports = {
	purge: [],
	darkMode: false, // or 'media' or 'class'
	theme: {
		debugScreens: {
			position: ['top', 'right'],
		},
		extend: {
			fontFamily: {
				headline: ['StyleScript'],
			},

			colors: {
				mainColor: '#212f49',
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [require('tailwindcss-debug-screens')],
}
