/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {},
  },
  future: {
    hoverOnlyWhenSupported: true,
    purgeLayersByDefault: true,
  },
  plugins: [],
};
