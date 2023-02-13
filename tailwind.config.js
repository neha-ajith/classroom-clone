/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js}',
    './public/**/*.{html,js}',
  ],
  theme: {
    extend: {
      colors:{
        btn2: '#1B73E9',
        cardGreen: '#32AC71'
      },
    },
  },
  plugins: [],
}
