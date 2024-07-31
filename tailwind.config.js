/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      sm: '400px',
      md: '920px',
    },
    extend: {
      colors: {
        black: '#000000',
        white: '#ffffff',
        primary: '#EDEDED',
        secondary: '#A6A6A6',
        border: '#AAAAAA',
      },
    },
  },
  plugins: [],
}
