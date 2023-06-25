/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {},
    colors:{
      Light:'#e8dfec',
      LightHover:'#dfd3e4',
      LightAux:'#d1c4d6',
      Dark:'#2a2a2a',
      DarkHover:'#3a3a3a',
      White:'#FFF',
      Blue: '#2B2D42',
      Red: '#EF233C',
      Yellow: '#cdbe00',
      Pix:'#66ecda',
      
      
      //meta
      transparent:'transparent',

      //categories
      Clothes: '#c35dee',
      Tech: '#5d91ee',

    }
  },
  plugins: [],
}

