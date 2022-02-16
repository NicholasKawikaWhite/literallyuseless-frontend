module.exports = {
  purge: [ "./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}", ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#BB0001',
        secondary: '#BB0001',
        highlight: '#B2BEB5;',
        neutral: '#B2BEB5;',
        dark: '#383838',
        background: '#F9FFF8',
      },
      fontFamily: {
        primary: ['SIKAT, sans-serif'],
        secondary: ['Arial, serif'],
      }

    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
