/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				cardBG: "#191321",
				cardSubtitleColor: "#818181",
				cardButtonColor: "#3100d2",
				cardButtonHoverColor: "#4d29c4",
			}
		},
	},
	plugins: [],
};
