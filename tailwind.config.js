/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        pulse: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.05)" },
        },
        bounceSlow: {
          "0%, 100%, 50%": {
            transform: "translateY(0)",
          },
          "25%": {
            transform: "translateY(-15px)",
          },
        },
      },
      animation: {
        "fade-in": "fadeIn 2s ease-in-out",
        "pulse-slow": "pulse 3s infinite",
        "bounce-slow": "bounceSlow 4s infinite",
      },
    },
  },
  plugins: [],
};
