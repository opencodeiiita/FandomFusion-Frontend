/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
	  "./src/**/*.{js,jsx,ts,tsx}",
	],
	theme: {
	  extend: {
		colors: {
		  "custom-green": "#92FE9D",
		  "custom-blue": "#00C9FF",
		},
		animation: {
		  bounce: "bounce 1s infinite",
		  spin: "spin 1s linear infinite",
		},
		spacing: {
		  "50px": "50px",
		  "390px": "390px",
		  "760px": "760px",
		  "770px": "770px",
		},
		fontSize: {
		  "160px": "160px",
		},
		transitionProperty: {
		  transform: "transform",
		},
	  },
	},
	plugins: [],
  };
  