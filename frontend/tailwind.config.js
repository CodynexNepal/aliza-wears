/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        alabaster: '#F7F7F5',
        charcoal: '#0E0F0C',
        lime: {
          DEFAULT: '#C3FF7D',
          dark: '#9FE870',
        },
      },
    },
  },
  plugins: [],
};