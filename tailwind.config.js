/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",                 // 🌟 Crucial: Tells Tailwind to look at your main index page
    "./src/**/*.{js,jsx,ts,tsx}",   // 🌟 Scans your React file components directory tree
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
