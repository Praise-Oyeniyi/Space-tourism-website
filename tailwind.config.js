/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    screens: {
      'sm': {'max': '519px'},
      // => @media (max-width: 519px) { ... }

      'md': '520px',
      // => @media (min-width: 520px) { ... }

      'lg': '720px',
      // => @media (min-width: 720px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [],
}
