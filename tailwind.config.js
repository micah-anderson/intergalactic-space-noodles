/** @type {import('tailwindcss').Config} */
export default {
  mode: "jit",
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        micahDarkestGrey: "#1e1e1e",
        micahDarkGrey: "#333333",
        micahLightGrey: "#CCCCCC",
        micahVibrantPink: "#FF00FF",
        micahVibrantPurple: "#800080",
        micahVibrantBlue: "#0000FF",
        micahVibrantGreen: "#00FF00",
        micahVibrantOrange: "#FFA500",
        micahVibrantYellow: "#FFFF00",
        micahVibrantRed: "#FF0000",
      },
      fontFamily: {
        jetbrains: ["Poppins", "JetBrains Mono", "monospace"],
      },
    },
    screens: {
      xs: "480px", // Extra Small (Mobile)
      s: "620px", // Small (Tablet Portrait)
      m: "768px", // Medium (Tablet Landscape)
      l: "1060px", // Large (Desktop Small)
      xl: "1200px", // Extra Large (Desktop Large)
      xxl: "1700px", // Extra Extra Large (Wide Screen)
    },
  },
  plugins: [],
};