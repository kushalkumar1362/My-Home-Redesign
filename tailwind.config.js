/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'extraSm': '570px',
      },
      flex: {
        '2': '2 2 0%',
        '3': '3 3 0%',
      },
      
      boxShadow: {
        'navbarShadow': '0 2px 4px rgba(0, 0, 0, 0.1)',
        'createBtn': '5px 5px 5px #0000003f',
      },
      backgroundImage: {
        'makerble-gradient': 'linear-gradient(to right, #EC008C, #8E24AA, #673AB7, #03A9F4, #4CAF50, #CDDC39, #FF5722, #F44336)',
      },
    },
  },
  plugins: [],
}
