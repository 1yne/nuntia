/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        "purple": "#b33dd1",
        "bgColor": "#1E1E1E",
        "white": "#D9D9D9"
      }
    },
  },
  plugins: [],
}
