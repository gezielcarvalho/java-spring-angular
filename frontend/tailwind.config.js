/** @type {import('tailwindcss').Config} */
module.exports = {
  //prefix: "tw-",  tailwind prefix
  //important: true, // tailwind important,
  content: ["./src/**/*.{html,ts}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#202225",
        secondary: "#5865f2",
        gray: {
          100: "#f2f3f5",
          200: "#ebedef",
          300: "#e3e5e8",
          400: "#d4d7dc",
          600: "#4f545c",
          700: "#36393f",
          800: "#2f3136",
          900: "#202225",
        },
      },
    },
  },
  plugins: [],
};
