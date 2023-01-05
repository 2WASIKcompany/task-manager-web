/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "assent-color": "#286EF1",
        darkest: "#17171A",
        "bg-lighter": "#1E1E29",
        "border-light-blue": "#282865",
      },
      boxShadow: {
        auth: "4px 4px 100px rgba(40, 110, 241, 0.2)",
      },
      fontFamily: {
        sans: ["var(--font-nunito)"],
      },
    },
  },
  plugins: [],
};
