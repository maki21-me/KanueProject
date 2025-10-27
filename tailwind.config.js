// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        logo: ["Pacifico", "cursive"],  // stylish script font
        sans: ["Poppins", "sans-serif"], // modern sans
      },
      colors: {
        primary: "#d4af37",   // ✨ white-gold / golden brown
        secondary: "#b8860b", // slightly darker gold tone for gradients or hovers
        accent: "#fff8e7",    // creamy white accent (pairs well with gold)
        light: "#ffffff",     // pure white
        dark: "#2b2b2b",      // dark contrast for text or backgrounds
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "3rem",
        },
      },
    },
  },
  plugins: [],
};