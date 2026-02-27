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
        primaryBorder: "#a1763a",
        border: "#e8e6e3",
        background: "#f8f5f2",
        input: "#d6d1cd",
        foreground: "#000000",
        muted: "#EEECE8",
        mutedForeground: "#666666",
        secondaryForeground: "#262626",
        primaryForeground: "#ffffff",
        ring: "#D7D3CD",
      }
    },
  },
  plugins: [],
}
