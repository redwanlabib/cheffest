/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'selector',
  content: ["*"],
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1202px',
      // => @media (min-width: 1202px) { ... }
    },
    container: {
      center: true,
      padding: '1rem',
    },
    fontFamily: {
      'inter': ['inter', 'sans-serif',],
    },
    extend: {
      backgroundImage: {
        'hero-image': "url('../image/Background.jpg')",
      }
    },
  },
  plugins: [],
}


