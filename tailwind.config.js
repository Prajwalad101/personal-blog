module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontSize: {
        heading: ['2.5rem', '10px'],
        heading2: ['1rem', '25px'],
        heading3: ['1.1rem', '1.3'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
