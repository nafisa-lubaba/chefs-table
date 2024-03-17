/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      backgroundImage:{
        'header':"url('https://i.ibb.co/Fxdgkcv/rectangle-1.png')"
      }
    },
  },
  plugins: [require("daisyui")],
}

