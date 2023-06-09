module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
    'prettier',
  ],
  ignorePatterns: ['.eslintrc.js'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:import/recommended',
  ],
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
  },
  settings: {
    'import/resolver': {
      typescript: {}
    },
  },
  rules: {
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
        'newlines-between': 'always'
      }
    ],

    "curly": "error",

    'no-process-exit': 'error',
    'no-process-env': 'error',
    'no-await-in-loop': 'error',
    'no-console': 'error',

    'no-restricted-syntax': [
      'error',
      {
        selector: 'ForStatement',
        message: 'Use functions like Array.forEach and Array.map instead'
      },
      {
        selector: 'ForInStatement',
        message: 'Use functions like Array.forEach and Array.map instead'
      },
      {
        selector: 'ForOfStatement',
        message: 'Use functions like Array.forEach and Array.map instead'
      }
    ],
    'prettier/prettier': [
      'error',
      {
        'singleQuote': true,
        'trailingComma': 'all',
        'printWidth': 100
      }
    ],
    'object-shorthand': 'error',
    'no-plusplus': 'error',
    'no-param-reassign': ['error', { props: true }],
  }
};
