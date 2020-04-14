module.exports = {
  extends: ['prettier/react', 'prettier/standard'],
  parser: 'babel-eslint',
  plugins: ['react', 'react-hooks', 'import', 'prettier', 'standard'],
  rules: {
    indent: ['error', 2, { SwitchCase: 1 }],
    quotes: [2, 'single'],
    semi: [2, 'never'],
    'comma-dangle': [2, 'never'],
    'no-trailing-spaces': [2],
    'jsx-quotes': ['error', 'prefer-single'],
    'react-hooks/rules-of-hooks': 'error',
    'react/jsx-boolean-value': [0],
    'prettier/prettier': 2,
    'space-before-function-paren': 0
  }
}
