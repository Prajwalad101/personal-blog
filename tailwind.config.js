const colors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
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
