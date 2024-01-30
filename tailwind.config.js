/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {},
    fontFamily: {
      "family-inter": "var(--font-family-inter)",
      "family-roboto-mono": "var(--font-family-roboto-mono)",
      "family-bebas-neue": "var(--font-family-bebas-neue)",
    },
  },
  plugins: [],
};
