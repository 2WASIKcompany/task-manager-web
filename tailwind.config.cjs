/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "assent-color": "#286EF1",
        "bg-darkest": "#17171A",
        "bg-lighter": "#1E1E29",
        "border-light-blue": "#282865",
      },
    },
  },
  plugins: [],
};
