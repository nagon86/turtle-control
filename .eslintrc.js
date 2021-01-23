module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:prettier/recommended',
    'prettier/react',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react-hooks'],
  rules: {
    indent: 'off',
    semi: ['error', 'always'],
    curly: 'error',
    quotes: ['error', 'single'],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
