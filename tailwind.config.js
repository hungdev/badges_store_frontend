module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        '500': '500px',
        '400': '400px',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
