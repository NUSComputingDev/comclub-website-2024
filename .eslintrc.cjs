module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist'],
  parser: '@typescript-eslint/parser',
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: [
    '@html-eslint',
    '@stylistic',
    '@typescript-eslint',
    'react',
    'react-refresh',
  ],
  overrides: [
    {
      files: ['*.html'],
      parser: '@html-eslint/parser',
      extends: ['plugin:@html-eslint/recommended'],
    },
    {
      files: ['*.ts', '*.tsx'],
      parser: '@typescript-eslint/parser',
      extends: ['plugin:react/recommended'],
    }
  ],
  rules: {
    '@html-eslint/indent': ['error', 2],
    '@html-eslint/quotes': ['error', 'single'],
    '@stylistic/array-bracket-spacing': ['error', 'never'],
    '@stylistic/comma-dangle': ['error', 'always-multiline'],
    '@stylistic/eol-last': ['error', 'always'],
    '@stylistic/indent': ['error', 2],
    '@stylistic/jsx-quotes': ['error', 'prefer-single'],
    '@stylistic/max-len': ['error', 120],
    '@stylistic/no-trailing-spaces': ['error'],
    '@stylistic/object-curly-spacing': ['error', 'always'],
    '@stylistic/quotes': ['error', 'single'],
    '@stylistic/semi': ['error', 'always'],
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
  },
  globals: { 'module': true },
}
