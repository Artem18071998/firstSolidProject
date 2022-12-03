/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontSize: {
      sm: ['13px', '14px'],
      base: ['14px', '14px'],
      lg: ['13px', '20px'],
      xl: ['16px', '22px'],
    },
    extend: {
      colors: {
        primary: {
          400: '#444444;',
        }
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif']
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
