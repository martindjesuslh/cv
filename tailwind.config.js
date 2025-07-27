import PrimeUI from "tailwindcss-primeui";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{html,ts}",
    "./node_modules/primeng/**/*.{mjs,js,ts,jsx,tsx,html}",
  ],
  theme: {
    extend: [],
  },
  plugins: [PrimeUI],
};
