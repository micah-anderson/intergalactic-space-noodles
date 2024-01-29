/** @type {import('tailwindcss').Config} */
export default {
  mode: "jit",
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        micahBlack: "#000000",
        micahDarkestGrey: "#1e1e1e",
        micahDarkGrey: "#333333",
        micahLightGrey: "#CCCCCC",
        micahVibrantPink: "#FF00FF",
        micahPink: "#ff6b81",
        micahVibrantPurple: "#800080",
        micahPurplePower: "#a06b9a",
        micahVibrantBlue: "#0000FF",
        micahVividSkyBlue: "#51d6ff",
        micahVistaBlue: "#8d9ec6",
        micahVibrantGreen: "#00FF00",
        micahPlantGreen: "#00df9a",
        micahSpringGreen: "#37ff8b",
        micahVibrantOrange: "#FFA500",
        micahVibrantYellow: "#FFFF00",
        micahVibrantRed: "#FF0000",
      },
      fontFamily: {
        jetbrains: ["JetBrains Mono", "monospace"],
        poppins: ["Poppins", "monospace"],
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
    dropShadow: {
  '3xl': '0 35px 35px rgba(0, 0, 0, 0.25)',
  '4xl': [
    '0 35px 35px rgba(0, 0, 0, 0.25)',
    '0 45px 65px rgba(0, 0, 0, 0.15)'
  ]
  },
  },
  plugins: [require("flowbite/plugin")],
};