/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "4rem",
        },
      },
      colors: {
        primary: "#a1763a",
        secondary: "#ebe8e5",
        secondaryBorder: "#d9d4ce",
        background: "#f8f5f2"
      }
    },
  },
  plugins: [],
}
