import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
		"./sections/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		screens: {
			sm: "375px",
			md: "768px",
			lg: "1200px",
		},
		container: {
			center: true,
			padding: {
				DEFAULT: "1rem",
				md: "2rem",
			},
		},
		extend: {
			fontFamily: {
				sans: ["var(--font-sans)"],
				serif: ["var(--font-serif)"],
			},
			keyframes: {
				scroll: {
					"0%": { transform: "translateX(0)" },
					"100%": { transform: "translateX(-100%)" }, // Adjust as needed
				},
				"scroll-back": {
					to: {
						transform: "translate(calc(50% + 0.5rem))",
					},
				},
				shake: {
					"0%": { transform: "translateX(0)" },
					"25%": { transform: "translateX(-5px)" },
					"50%": { transform: "translateX(0)" },
					"75%": { transform: "translateX(5px)" },
					"100%": { transform: "translateX(0)" },
				},
				tapeScroll: {
					"0%": { transform: "translateX(0)" },
					"100%": { transform: "translateX(-50%)" },
				},
			},
			animation: {
				scroll: "scroll var(--animation-duration, 15s) linear infinite",
				"scroll-back":
					"scroll-back var(--animation-duration, 15s) var(--animation-direction, forwards) linear infinite",
				shake: "shake 0.5s ease-in-out",
				tapeScroll: "tapeScroll 20s linear infinite",
			},
		},
	},
	plugins: [],
};
export default config;
