/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        "purple": "#4526D3",
        "bgColor": "#1E1E1E",
        "white": "#D9D9D9",
        "dominantColor": "#4526D3",
        "accent": "#1E1926",
        "complementary": "#FDF7FF"
      },
      backgroundImage: {
        "heroImage": "url('./static/images/stockOne.png')"
      }
    },
  },
  plugins: [],
}
