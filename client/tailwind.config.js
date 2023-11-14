/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "color-primary": "var(--color-primary)",
        "color-secondary": "var(--color-secondary)",
        "btn-primary-bg": "var(--btn-primary-bg)",
        "btn-secondary-bg": "var(--btn-secondary-bg)",
        "btn-primary-text": "var(--btn-primary-text)",
        "btn-secondary-text": "var(--btn-secondary-text)",
        "card-primary-bg": "var(--card-primary-bg)",
        "card-secondary-bg": "var(--card-secondary-bg)",
        "text-color-title": "var(--text-color-title)",
        "text-color-subtitle": "var(--text-color-subtitle)",
        "shadow-color": "var(--shadow-color)"
      }
    },
    fontFamily:{
      Inter: ['"Inter var", sans-serif',]
    }
  },
  plugins: [],
}

