
module.exports = {
	content: [
	  "./src/**/*.{js,jsx,ts,tsx}", // Update to your project's file paths

	],
	theme: {
	  extend: {
		colors: {
		  primary: "#1C1C1E", // Replace with colors from the Figma file
		  secondary: "#2C2C2E",
		  accent: "#FFD700", // Accent color for ratings, etc.
		  textPrimary: "#FFFFFF",
		  textSecondary: "#A1A1AA",
		  buttonBg: "#6366F1",
		  buttonHover: "#4F46E5",
		},
		fontFamily: {
		  sans: ['"Roboto"', "sans-serif"], // Replace with font from the Figma file
		},
	  },
	},
	plugins: [],
  };
