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
<<<<<<< HEAD
  rules: {
    'vue/multi-word-component-names': 'off',
    'object-shorthand': 0,
  },
=======
  rules: {},
>>>>>>> 6be8659041b83b09af120d84481d4acfcef09924
}
