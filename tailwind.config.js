/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/containers/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      primary: '#edf2f8',
      secondary: '#313bac',
      'black-color': '#030303',
      'lightGray-color': '#e4e4e4',
      'gray-color': '#6b7688',
      'brown-color': '#46364a',
    },
    extend: {},
  },
  plugins: [],
};
