module.exports = {
  mode: 'jit',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '480px',
      // => @media (min-width: 480px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '976px',
      // => @media (min-width: 976px) { ... }

      'xl': '1440px',
      // => @media (min-width: 1440px) { ... }
    },
    extend: {},
  },
  plugins: [
      require('tailwind-scrollbar-hide'),
  ],
}
