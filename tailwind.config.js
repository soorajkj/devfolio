/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {},
    fontFamily: {
      'family-inter': 'var(--font-family-inter)',
      'family-firac': 'var(--font-family-firac)',
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
    purgeLayersByDefault: true,
  },
  plugins: [require('prettier-plugin-tailwindcss')],
};
