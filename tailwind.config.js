/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],

  theme: {
    extend: {
      colors: {
        blues: '#0fe',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
