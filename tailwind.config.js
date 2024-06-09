/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "logo-color": "#25f432",
        "back-color": "#f6f6f6",
        "item-color": "#FFFFFF",
        "ui-color": "#3cac9d",
      },
    },
    screens: {
      sm: "640px",
      "sm-1": "410px",
      "sm-2": "306px",
      md: "768px",
      lg: "1024px",
    },
  },
  plugins: [],
};
