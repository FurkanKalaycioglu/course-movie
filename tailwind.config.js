/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        backgrounddark: "#0D0C0F",
        primary: "#B43FEB",
        success: "#25DC37",
        error: "#EB3F5E",
        warning: "#FFCD1A",
        darksmooth: "#1A161F",
        linedark: "#29282F",
        linelight: "#E9EBED",
        grayscale: {
          10: "#F9F9F9",
          20: "#ECF1F6",
          30: "#E3E9ED",
          40: "#D1D8DD",
          50: "#BFC6CC",
          60: "#9CA4AB",
          70: "#78828A ",
          80: "#66707A",
          90: "#434E58",
          100: "#171725",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms", "prettier-plugin-tailwindcss")],
};
