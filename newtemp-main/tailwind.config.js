/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors:{
        pri_yellow: "#fde93b",
        pri_black: "#18181b"
      },
      screens: {
        mb: "320px",
        lmb: "480px",
        tablet: "768px",
        lp: "1024px",
        lcd: "1400px",
        narrow: { raw: "(max-aspect-ratio: 3 / 2)" },
        wide: { raw: "(min-aspect-ratio: 3 / 2)" },
        "taller-than-854": { raw: "(min-height: 854px)" },
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        pulsy: {
          '0%, 100%': { opacity: '0.7' },
          '50%': { opacity: '1' },
        },
        height: {
          '0%, 100%': { transform: "translate(0px,0px)" },
          '50%': {transform: "translate(0px,10px)" },
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "pulsy": "pulsy 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;",
        "heighty": "height 2s ease-in-out infinite;"
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}