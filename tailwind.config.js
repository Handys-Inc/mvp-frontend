/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: " #CE1449",
        secondary: "#EFE4D9",
        gray: "#626262",
      },
      backgroundImage: {
        workerHero: "url('/src/assets/img/workers.png')",
      },
    },
  },
  plugins: [],
};
