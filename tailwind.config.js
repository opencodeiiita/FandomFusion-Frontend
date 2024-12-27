/** @type {import('tailwindcss').Config} */
export default {
	content: [
	  "./index.html",
	  "./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
	  extend: {
		colors: {
		  primary: '#3100D2',
		  accent: '#4FD1C5',
		  background: '#FFFFFF',
		  'card-dark': '#F3F4F6',
		  'card-dark-secondary': '#F9FAFB',
		  text: {
			primary: '#1F2937',
			secondary: '#4B5563',
			tertiary: '#6B7280',
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
	plugins: [],
  };
  