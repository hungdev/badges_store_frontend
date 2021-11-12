module.exports = {
  // purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        '2p5': '10px',
        '500': '500px',
        '400': '400px',
        '300': '300px',
        '330': '330px'
      },
      height: {
        '2p5': '10px',
        '500': '500px',
        '400': '400px',
        '300': '300px',
        '350': '350px',
      },
      minHeight: {
        '45': '45px',
      },
      maxHeight: {
        '300': '300px'
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
        'input': '#EDEEF6',
        'redLight': '#EB7D6F',
        'delete': '#EB3428',
      }),
      fontSize: {
        '10': '10px'
      },
      borderColor: {
        'blue': '#28ABFF'
      }

    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
