/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(166.28deg, #73E6ED 1.67%, rgb(145, 179, 234) 100.9%)',
      },
      fontFamily:{
        'inter':"Merriweather, serif"
      }
    },
  },
  plugins: [],
}