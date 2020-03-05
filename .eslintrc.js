module.exports = {
  parser: 'babel-eslint',
  plugins: ['react-hooks'],
  rules: {
    indent: ['error', 2, { SwitchCase: 1 }],
    quotes: [2, 'single'],
    semi: [2, 'never'],
    'comma-dangle': [2, 'never'],
    'no-trailing-spaces': [2],
    'jsx-quotes': ['error', 'prefer-single'],
    'react-hooks/rules-of-hooks': 'error'
  }
}
