const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  important: true,
  theme: {
    extend: {
      colors: {
        amber: colors.amber,
        emerald: colors.emerald,
        primary: "#4F46E5",
        secondary: "rgb(17, 24, 39)",
        tertiary: "rgb(16, 185, 129)",
        primary_shade: "#EFF6FF",
        white: "#fff",
        black: "#000",
      },
    },
  },
  plugins: [],
};
