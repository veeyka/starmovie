/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        menuBack:"#E0E0E0",
        menuBackDark:"#464646",
        grayColor:"#808080",
        iconsColor:"#b3abab",
        siteBg:"#ffffff",
        siteBg2:"#eaeaea",
        siteBgDark:"#525252",
        siteBgDark2:"#767676",
        textDark:"#ffffff",
        textLight:"#383838",
        textGray:"#808080",
        textHeaders:"#3B3636",
        siteRed:"#f53b71",
      },
      
    },
  },
  plugins: [],
  darkMode:'class',

}

