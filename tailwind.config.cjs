/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        "purple": "#4526D3",
        "bgColor": "#1E1E1E",
        "dominantColor": "#4526D3", // Purple color
        "accent": "#1E1926", // Dark color
        "complementary": "#FDF7FF" // Peach-ish
      },
    },
  },
  plugins: [],
}
