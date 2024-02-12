/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      TrajanRegular: ["Trajan Pro Regular", "serif"],
      Trajan: ["Trajan", "serif"],
      'Avenir-Regular': ['Avenir Regular', 'sans-serif'],
      'Avenir-Black': ['Avenir Black', 'sans-serif'],
      'Avenir-Medium': ['Avenir Medium', 'sans-serif'],
    },
    extend: {
      colors: {
        "primary-green": "#006633",
        "primary-gold": "#CC9933",
        "gold-light": "#FCF9F3",
        "black": "#333333",
        "green-light": "#F0FFF7",
      },
      background: {
        dark: "#333",
      },
      textColor: {
        dark: "#fff",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
