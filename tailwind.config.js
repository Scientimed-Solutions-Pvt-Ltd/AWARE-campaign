/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'brandon': ['Brandon', 'system-ui', 'sans-serif'],
      },
      colors: {
        'pink': {
          '600': '#EE0B6B',
          '700': '#D50960',
        },
        'blue': {
          '400': '#0BB5E9',
          '600': '#0066CC',
        }
      },
    },
  },
  plugins: [],
}
