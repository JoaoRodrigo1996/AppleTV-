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
    },
  },
  plugins: [],
}

