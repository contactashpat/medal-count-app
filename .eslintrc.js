// .eslintrc.js
module.exports = {
  root: true,
  extends: ['next', 'next/core-web-vitals', 'plugin:tailwindcss/recommended', 'prettier'],
  plugins: ['tailwindcss'],
  rules: {
    'tailwindcss/no-custom-classname': 'off',
  },
}
