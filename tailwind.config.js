/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],

  theme: {
    extend: {
      backgroundColor: {
        nav: '#1f242d05',
        home: '#1f242d',
        about: '#37474f',
        'light-blue': '#0fe',
      },
      height: {
        nav: '60px',
      },
      colors: {
        'light-blue': '#0fe',
      },
      boxShadow: {
        'back-light': ' 0 0 1rem #0fe',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
