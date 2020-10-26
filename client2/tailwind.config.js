module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [
    './pages/**/*.js',
    './components/**/*.js'
  ],
  theme: {
    extend: {
      colors: {
        'p-blue': '#6474af',
      }
    },
  },
  variants: {},
  plugins: [],
}
