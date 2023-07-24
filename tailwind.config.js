/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  plugins: [require('prettier-plugin-tailwindcss')],
  theme: {
    extend: {},
    fontFamily: {
      'family-inter': 'var(--font-family-inter)',
      'family-firac': 'var(--font-family-firac)',
    },
  },
};
