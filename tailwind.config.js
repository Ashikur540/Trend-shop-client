/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
    },

    extend: {
      backgroundImage: {
        'hero-image': "url('/src/Assets/Photos/Hero Bg.png')",
        'blog-banner': "url('/src/Assets/Photos/blog banner.png')",
      },
      colors: {
        'white': '#ffffff',
        'accent': '#FF833E',
        'secondary': '#005162',
      }
    },
  },
  plugins: [],
}