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
<<<<<<< HEAD
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
=======
      fontFamily: {
        trajanPro: ["var(--font-trajanPro)"],
        avenir: ["var(--font-avenir)"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
>>>>>>> f38d154257ac003846d80f9fd9b8b917b2c76b30
      },
    },
    colors: {
      "gray-light": "#F7F7F7F7",
      "gray-primary": "#373737",
      "black-light": "#333333",
      "blue-black": "#03070D",
      green: "#006633",
      "green-100": "#044625",
      "gold-light": "#FAF5EB",
    },
  },
  plugins: [],
  darkMode: "class",
};
