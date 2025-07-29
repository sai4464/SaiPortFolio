/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#050816",
        secondary: "#aaa6c3",
        tertiary: "#2d1600", // Changed from blue/purple to dark orange-brown
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",

        // ✅ Orange palette added
        orange: {
          50: '#fff4e6',
          100: '#ffe8cc',
          200: '#ffd1a3',
          300: '#ffb266',
          400: '#ff9933',
          500: '#ff8000',
          600: '#e67300',
          700: '#cc6600',
          800: '#b35900',
          900: '#994d00',
        },
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
      },
    },
  },
  plugins: [],
};
