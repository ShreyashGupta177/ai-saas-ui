/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        dark: {
          bg: "#0D0D1A",
          secondary: "#1A1A2E",
          text: "#F1F1EE",
          "text-secondary": "#A1A1AA",
          border: "rgba(255,255,255,0.08)",
          accent: "#0066FF",
        },
        light: {
          bg: "#F8F8FB",
          secondary: "#FFFFFF",
          text: "#1A1A24",
          "text-secondary": "#666680",
          border: "rgba(0,0,0,0.05)",
          accent: "#0066FF",
        },
      },
      animation: {
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        float: "float 3s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
}