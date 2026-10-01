/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        brand: '#0052cc',
        accent: '#00a8e8',
        light: '#f8f9fa',
        whatsapp: '#25d366',
        dark: '#1f2937'
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    }
  },
  plugins: [],
}