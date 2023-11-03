/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }

      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      lmd: { max: "979px" },
      // => @media (max-width: 979px) { ... }

      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "649px" },
      // => @media (max-width: 639px) { ... }

      xsm: { max: "479px" },
      // => @media (max-width: 479px) { ... }
    },
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    extend: {
      colors: {
        white: "#FFF",
        black: "#0D0D0D",
        lightGray: "#ADADAD",
        semiLightGray: "rgba(13, 13, 13, 0.22)",
        blue: "rgba(13, 13, 13, 0.20)",
        lightPurpal: "#B3B3B3",
      },
      backgroundColor: {
        mahrun: "#BA2144",
        lightGray: "#F5F5F5",
        lightBlue: "#D7F3FF",
      },
      fontFamily: {
        poppins: "Poppins",
        roboto: "Roboto",
      },
    },
  },
  plugins: [],
};
