// tailwind.config.js
import animate from 'tailwindcss-animate'; // you have this dep

export default {
  content: [
		"./src/components/**/*.{ts,tsx}",
   		"./src/animation/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
  theme: { extend: {} },
  plugins: [animate]
};
