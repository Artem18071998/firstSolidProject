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
      sg: ['14px', '20px'],
      tg: ['48px', '58px'],
      tx: ['17px', '25px'],
      gh: ['14px', '20px'],
      tl: ['36px', '43px'],
      xg: ['16px', '19.2px'],
      lj: ['15px', '21px']
    },
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/images/Main.webp')",
      },
      colors: {
        primary: {
          400: '#444444;',
        }
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'roboto': ['Roboto', 'sans-serif']
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
