/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#000613",
        secondary: "#ede0d4",
        tertiary: "#0a534ab4",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
        "hero-color": "linear-gradient(90deg, #000613, #030E22, #0D0A17)",
        "hero-tertiary": "linear-gradient(50deg, #000819, #0a534ab4, #000819)",
      },
    },
  },
  plugins: [],
};  