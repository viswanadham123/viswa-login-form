module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        gray: {
          50: "#f8f8f8",
          500: "#9c9c9c",
          800: "#3f424b",
          "800_f7": "#3f424bf7",
        },
        deep_purple: { A100: "#9a6aff" },
        white: { A700: "#ffffff" },
      },
      fontFamily: { poppins: "Poppins" },
      backgroundImage: {
        gradient: "linear-gradient(136deg ,#3f424b,#3f424bf7,#3f424b)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
