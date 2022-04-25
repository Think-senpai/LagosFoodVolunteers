const defaultTheme = require('tailwindcss/defaultTheme')
const plugin = require('tailwindcss/plugin')
module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Rubik', ...defaultTheme.fontFamily.sans],
      },
      borderRadius: {
        none: '0',
        sm: '0.125rem',
        default: '0.25rem',
        md: '0.375rem',
        lg: '0.5rem',
        xl: '35px',
        full: '9999px',
      },
      inset: {
        0: '0',
        auto: 'auto',
        10: '10px',
        20: '20px',
        30: '30px',
        40: '40px',
        50: '50px',
        60: '50px',
      },
      colors: {
        brand: {
          accent: '#DEEDAD',
          acccentLight: '#F9FFD6',
          accentLighter: '#FBFBF3',
          primary: '#7B9B0D',
          primaryLight: '#CDE380',
          background: '#E5E5E5',
          backgroundLight: '#FFFFFF',
          backgroundOption: 'rgba(229, 229, 229, 1)',
          green: '#3BD814',
          backgroundGreen: 'rgba(202, 242, 151, 0.2)',
          lightgreen: 'rgba(123, 155, 13, 1)',
        },
      },
    },
  },
  variants: {
    margin: ['responsive', 'last'],
    backgroundColor: ['responsive', 'hover', 'focus', 'active'],
    textColor: ['responsive', 'hover', 'focus', 'active'],
    borderColor: ['responsive', 'hover', 'focus', 'active'],
    borderWidth: ['responsive', 'focus'],
  },
  plugins: [
    plugin(function ({ addComponents }) {
      const buttons = {
        '.btn': {
          paddingLeft: '2rem',
          paddingRight: '2rem',
          borderRadius: '0.5rem',
          paddingTop: '0.75rem',
          paddingBottom: '0.75rem',

          // backgroundColor: "#EAF3CA",
          '&:focus': {
            outline: '0',
            // boxShadow: '0 0 0 3px rgba(66, 153, 225, 0.5)',
          },
          '&:hover': {
            // boxShadow: '5px 4px 4px 0px #0000001f',
          },
        },
        '.btn-blue': {
          backgroundColor: '#3490dc',
          color: '#fff',
          '&:hover': {
            backgroundColor: '#2779bd',
          },
        },
        '.btn-red': {
          backgroundColor: '#e3342f',
          color: '#fff',
          '&:hover': {
            backgroundColor: '#cc1f1a',
          },
        },
      }

      addComponents(buttons)
    }),
  ],
}
