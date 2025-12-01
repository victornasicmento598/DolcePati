/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        display: ['Playfair Display', 'serif'],
      },
      colors: {
        marrom: {
          dark: '#5A3A15',
          light: '#6E4B1F',
        },
        dourado: {
          DEFAULT: '#EAA95A',
          hover: '#D69245',
        },
        creme: '#FDFBF7',
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'fade-in-down': 'fadeInDown 0.8s ease-out forwards',
      }
    },
  },
  plugins: [],
}