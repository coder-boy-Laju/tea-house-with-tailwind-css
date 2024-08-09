const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      fontFamily:{
        "manrope":["Manrope", ...defaultTheme.fontFamily.sans]
      },
      colors:{
        transparent: 'transparent',
        current: 'currentColor',
       "primary":"#FF0000",
        "secondary":"#FF8938",
        "gray-1": "#1C1C1C",
        "gray-2": "#777777",
       "gray-3": "#494949",
        "gray-4": "#D2D2D2",
        "white": "#FFFFFF",
        "white-light":" #F4F4F4",
        
    
      },
    },
  },
  plugins: [],
}

