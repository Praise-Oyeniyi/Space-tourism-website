/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    screens: {
      'sm': {'max': '530px'},
      // => @media (max-width: 519px) { ... }

      'md': {'min':'531px', 'max':'750px'},
      // => @media (min-width: 520px) { ... }

      'small': {"max":'750px'},
      // => @media (min-width: 720px) { ... }

      'xl': '751px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [],
}
