const daisyui = require("daisyui");
const daisyUIThemes = require("daisyui/src/theming/themes");

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {},
	},
	plugins: [daisyui],

	daisyui: {
		themes: [
			"light",
			{
				black: {
					...daisyUIThemes["black"],

					primary: "#06B6D4",      // cyan
					secondary: "#1E3A8A",    // deep blue
					accent: "#F59E0B",       // gold
					neutral: "#0F172A",      // surface dark
					"base-100": "#050816",   // background

					info: "#38BDF8",
					success: "#22C55E",
					warning: "#F59E0B",
					error: "#EF4444",
				},
			},
		],
	},
};
