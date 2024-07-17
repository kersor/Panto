/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        GilroyBold: 'GilroyBold',// добавьте ваш кастомный шрифт
        GilroyMedium: 'GilroyMedium',
        GilroyRegular: 'GilroyRegular'
      },
    },
  },
  plugins: [],
}
