module.exports = {
  env: {browser: true, es2020: true},
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
    'plugin:@typescript-eslint/recommended',
    "plugin:@conarti/feature-sliced/recommended",
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {ecmaVersion: "latest", sourceType: "module"},
  settings: {react: {version: "18.2"}},
  plugins: ["react-refresh", '@typescript-eslint'],
  rules: {
    "react-refresh/only-export-components": "warn",
  },
  root: true,
}
