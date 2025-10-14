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
        primary: "#8B4513",     // brown for hover & button
        secondary: "#5C4033",   // darker brown for gradient
        accent: "#D2B48C"       // light brown for subtle highlights if needed
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
