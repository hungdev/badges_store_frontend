module.exports = {
  // purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        '500': '500px',
        '400': '400px',
        '300': '300px',
        '330': '330px'
      },
      height: {
        '500': '500px',
        '400': '400px',
        '300': '300px',
        '350': '350px',
      },
      textColor: {
        'pr': '#1A1E47',
        'second': '#A5A7C3',
        'delete': '#EB3428',
        'redLight': '#EB7D6F'
      },
      backgroundColor: theme => ({
        ...theme('colors'),
        'pr': '#1A1E47',
        'second': '#A5A7C3',
        'alignBg': '#E3E5F4',
        'alginDot': '#A5A7C3',
        'input': '#EDEEF6'
      })

    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
