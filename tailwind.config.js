/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-bg': '#2C3333',
        'secondary-bg': '#395B64',
        'primary-text': '#E7F6F2',
        'secondary-text': '#A5C9CA',
      },
    },
  },
  plugins: [],
}
