/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {},
    container: {
      center: true,
      padding: {
        default: '20px',
        md: '40px'
      }
    }
  },
  plugins: [],
}

