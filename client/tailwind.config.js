const withMT = require("@material-tailwind/react/utils/withMT")

/** @type {import('tailwindcss').Config} */
module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    borderRadius: {
      'main': '0.5rem',
      'full': '50%',
    },
    fontFamily: {
      Inter: "Inter"
    },
    extend: {
      backgroundImage: {
        'banner-bg': `url('./src/assets/banner-bg.png')`,
        'contact-banner-bg': `linear-gradient(to right bottom, rgba(24,24,24, 0.8), rgba(24,24,24, 0.8)), url('./src/assets/contact-banner-bg.webp')`
      },
      colors: {
        "color-primary": "var(--color-primary)",
        "color-primary-light": "var( --color-primary-light)",
        "color-secondary": "var(--color-secondary)",
        "btn-primary-bg": "var(--btn-primary-bg)",
        "btn-secondary-bg": "var(--btn-secondary-bg)",
        "btn-primary-text": "var(--btn-primary-text)",
        "btn-secondary-text": "var(--btn-secondary-text)",
        "card-primary-bg": "var(--card-primary-bg)",
        "card-secondary-bg": "var(--card-secondary-bg)",
        "color-title": "var(--text-color-title)",
        "color-subtitle": "var(--text-color-subtitle)",
        "shadow-color": "var(--shadow-color)",
        "grey-bg": "var(--grey-bg)"
      }
    },
  },
  plugins: [],
})

