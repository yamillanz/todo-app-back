module.exports = {
  parserOptions: {
    project: ['./functions/tsconfig.json', './functions/tsconfig.dev.json'],
    sourceType: 'module',
  },
  root: true,
  env: {
    es6: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'google',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  ignorePatterns: [
    '/lib/**/*', // Ignore built files.
    '/generated/**/*', // Ignore generated files.
  ],
  plugins: ['@typescript-eslint', 'import'],
  rules: {
    'import/no-unresolved': 0,
    'indent': ['error', 2],
    'object-curly-spacing': ['error', 'always'],
  },
};
