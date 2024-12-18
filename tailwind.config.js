/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
	  "./index.html",
	  "./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
	  extend: {
		colors: {
		  // Dark Theme Color Palette
		  primary: '#3100D2', // Bluish color for primary
        accent: '#4FD1C5', // Teal accent
        background: '#FFFFFF', // White background
        'card-dark': '#F3F4F6', // Light gray card background
        'card-dark-secondary': '#F9FAFB', // Slightly lighter secondary background
        text: {
          primary: '#1F2937', // Dark gray for primary text
          secondary: '#4B5563', // Slightly lighter gray for secondary text
          tertiary: '#6B7280',// Tertiary Text
		  },
		},
		fontFamily: {
		  display: ['Inter', 'system-ui', 'sans-serif'],
		  sans: ['Inter', 'system-ui', 'sans-serif'],
		},
		boxShadow: {
		  'lg': '0 10px 15px -3px rgba(0, 0, 0, 0.3), 0 4px 6px -2px rgba(0, 0, 0, 0.2)',
		  '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
		},
	  },
	},
	plugins: [], // Removed line-clamp plugin
  };