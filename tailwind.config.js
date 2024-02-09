/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        trajanPro: ["var(--font-trajanPro)"],
        avenir: ["var(--font-avenir)"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
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
};
