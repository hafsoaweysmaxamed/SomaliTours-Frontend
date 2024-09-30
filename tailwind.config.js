/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primryColor: "#F0EEEE",
        secdaryColor: "#16325B"
      },
      fontFamily:{
        poppins:  "Poppins",
        roboto:"Roboto",
        Playwrite :"Playwrite CZ"
      }
    },
  },
  plugins: [],
}

