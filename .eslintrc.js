module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false,
  },
  extends: ['@nuxtjs', 'plugin:nuxt/recommended', 'prettier'],
  plugins: [],
  // add your custom rules here
  rules: {
    "no-console": "off",
    "vue/order-in-components": "off",
    "vue/attributes-order": "off",
    "prefer-const": "off",
    "camelcase": "off",
  },
}
