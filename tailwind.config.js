/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark-green": "#182C25",
        green: "#455B55",
        "light-green": "#62a3ba",
        "lighter-green": "#243f88",
        brownish: "#CDB079",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
