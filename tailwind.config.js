const colors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        dark: '#101820ff',
        'dark-text': '#f2aa4cff',
        'dark-card': '#0e151b',
      },
      fontSize: {
        heading2: ['1rem', '25px'],
        heading3: ['1.2rem', '1.3'],
        post: ['1.3rem', '1.3'],
      },
      borderWidth: {
        5: '5px',
      },
      spacing: {
        3: '3px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
