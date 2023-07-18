/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'azul': '#293145',
        'azul-low': '#EFF8FF',
        'button': '#0F9AFE',
        'gray': '#6E7275',
        'gray-300': '#DBDBDB',
      },
      fontFamily: {
        'sora': ['Sora', 'san-serif',],
        'inter': ['Inter', 'sans-serif']
      },
    },
  },
  plugins: [],
}