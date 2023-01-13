/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Satoshi"],
        serif: ["Satoshi"],
        mono: ["Satoshi"],
        display: ["Satoshi"],
        body: ["Satoshi"],
      },
      colors: {
        primary: " #CE1449",
        secondary: "#EFE4D9",
        gray: "#626262",
        lightGray: "#FAFAFA",
      },
      backgroundImage: {
        workerHero: "url('/src/assets/img/workers.png')",
        womanHero: "url('/src/assets/img/woman.png')",
      },
    },
  },
  plugins: [],
};
