const defaultTheme = require('tailwindcss/defaultTheme')
const settingsScreens = require('./tailwind.settings.screens')
const settingsFontSizes = require('./tailwind.settings.fontSizes')

module.exports = {
  content: ['./**/*.html'],
  theme: {
    screens: settingsScreens,
    fontSize: settingsFontSizes,
    container: {
      center: true
    },
    extend: {
      colors: {},
      fontFamily: {
        grotesk: ['"Manrope"', ...defaultTheme.fontFamily.sans]
      }
    }
  },
  variants: {},
  plugins: [require('@tailwindcss/typography')]
}
