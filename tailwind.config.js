/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/views/**/*.ejs",      // Ini supaya Tailwind baca semua file EJS
    "./src/public/**/*.html",
    "./src/**/*.js"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}