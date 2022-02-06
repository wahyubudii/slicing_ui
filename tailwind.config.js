const plugin = require("tailwindcss/plugin")

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Source Sans Pro", "sans-serif", "ui-sans-serif", "system-ui"],
        mono: ["IBM Plex Mono", "monospace", "ui-monospace"]
      },
      colors: {
        yellow: {
          50: "#FFFDEB",
          100: "#FEFAD7",
          200: "#FEF5AA",
          300: "#FDF181",
          400: "#FDEC59",
          500: "#FCE72D",
          600: "#ECD503",
          700: "#B09F02",
          800: "#746802",
          900: "#3C3601",
        },
      },
    },
  },
  plugins: [
    plugin(({addUtilities}) => {
      const utilities = {
        ".bg-hero": {
          "background-image": "url(/hero.png)"
        }
      }

      addUtilities(utilities)
    })
  ],
};
