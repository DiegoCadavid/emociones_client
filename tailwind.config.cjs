/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          "50" : "#FFCBCB",
          "100" : "#F25C5C",
          "200" : "#C0372E"
        }
      },
      fontFamily: {
        title: ["Dosis", "sans-serif"],
        subtitle: ["Raleway","sans-serif"],
        serif: ["Hind", "sans-serif"]
      },
      boxShadow: {
        primary : "0 7px 0 0px #F25C5C",
        "primary-min" : "0 3px 0 0px #F25C5C"
      },
      translate:{
        "shadow" : "7px",
        "shadow-min" : "4px"
      },
      fontSize: {
        title: "6rem"
      },
      gridTemplateColumns: {
        "images-container" : " repeat(auto-fit, minmax(370px, 1fr))"
      }
    },
  },
  plugins: [],
}