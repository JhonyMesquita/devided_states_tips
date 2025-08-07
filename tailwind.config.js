/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#646cff',
        'primary-hover': '#535bf2',
        dark: {
          100: '#1a1a1a',
          200: '#1e1e1e',
          300: '#2a2a2a',
          400: '#2d2d2d',
          500: '#333',
          600: '#444',
          700: '#555',
          800: '#888',
        }
      },
    },
  },
  plugins: [],
}
