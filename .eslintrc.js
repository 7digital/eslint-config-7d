'use strict';

module.exports = {
  extends: 'eslint:recommended',
  env: {
    node: true,
    commonjs: true,
    mocha: true,
    jest: true,
    es6: true
  },
  parserOptions: { 'ecmaVersion': 8 },
  rules: {
    'linebreak-style': [ 'error', 'unix' ],
    quotes: [ 'error', 'single' ],
    semi: [ 'error', 'always' ],
    'no-console': 'off'
  }
};