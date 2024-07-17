/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#000000",
        backgroundContrast: "#111111",
        textBlack: "#1D1D1F",
        white: "#FFFFFF"
      },
      fontFamily: {
        sans: [
          "Open Sans", "sans-serif"
        ]
      },
      keyframes: {
        "carousel-move": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      animation: {
        "carousel-move": "carousel-move var(--duration,80s) infinite",
      },
    },
  },
  plugins: [],
}

