module.exports = {
	purge: {
		enabled: true,
		content: ['./**/*.{html,md}'],
	},
	darkMode: 'class', // or 'media' or 'class'
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
			spacing: {
				20: '5.25rem',
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [require('tailwindcss-debug-screens')],
}
