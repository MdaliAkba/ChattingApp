/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'roboto':['Roboto', 'sans-serif'],
        'poppins':['Poppins', 'sans-serif'],
        'nunito':['Nunito', 'sans-serif'],
        'openSans':['Open Sans', 'sans-serif'],
        'oswald':['Oswald',' sans-serif'],
      },
      colors:{
        'primary':'#11175D',
        'secendary':'#FFFFFF',
        'third':'#03014C',
        'forth':'#EA6C00',
        'fiveth':'#64699D',
        'six':'red',

      },
    },
  },
  plugins: [],
}

