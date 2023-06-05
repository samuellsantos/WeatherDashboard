/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ["'Poppins'", 'sans-serif'],
      },
      colors: {
        first: '#4B5C76',
        second: '#18396E',
        third: '#385B91',
      },
    },
  },
  plugins: [],
};
