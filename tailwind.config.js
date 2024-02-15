const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      TrajanRegular: ["Trajan Pro Regular", "serif"],
      Trajan: ["Trajan", "serif"],
      "Avenir-Regular": ["Avenir Regular", "sans-serif"],
      "Avenir-Black": ["Avenir Black", "sans-serif"],
      "Avenir-Medium": ["Avenir Medium", "sans-serif"],
      "Avenir-Heavy": ["Avenir Heavy", "sans-serif"],
    },
    extend: {
      colors: {
        "primary-green": "#006633",
        "primary-gold": "#CC9933",
        "gold-light": "#FCF9F3",
        black: "#333333",
        "green-light": "#F0FFF7",
        "gray-primary": "#373737",
        "blue-black": "#03070D",
        "gold-light": "#FAF5EB",
        "green-100": "#044625",
        "gray-light": "#F7F7F7F7",
        grey: "#666666",
      },
      background: {
        dark: "#333",
      },
      textColor: {
        dark: "#fff",
      },
      fontFamily: {
        trajanPro: ["var(--font-trajanPro)"],
        avenir: ["var(--font-avenir)"],
      },
      screens: {
        xxs: "375px",
        xs: "440px",
        "3xl": "1800px",
        "4xl": "2000px",
        ...defaultTheme.screens,
      },
    },
    // colors: {
    //   "gray-light": "#F7F7F7F7",
    //   "gray-primary": "#373737",
    //   "black-light": "#333333",
    //   "blue-black": "#03070D",
    //   green: "#006633",
    //   "green-100": "#044625",
    //   "gold-light": "#FAF5EB",
    // },
  },
  plugins: [],
  darkMode: "class",
};
