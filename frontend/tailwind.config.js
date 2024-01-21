/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        h1: "48px",
        h2: "36px",
        h3: "30px",
        h4: "24px",
        h5: "20px",
        h6: "16px",
      },
    },
    colors: {
      transparent: "transparent",
      primary: "#6D4DF0",
      white: "#ffffff",
      black: "#000000",
      dark: "#292929",
      light: "#ccc",
      red: "#FFB1B1,",
      blue: "#B1C9FF",
      green: "#B1FFB1",
      yellow: "#FFF4B1",
      purple: "#D8B1FF",
      cyan: "#B1FFF4",
    },
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "6rem",
        "2xl": "8rem",
      },
    },
  },
  plugins: [],
};
