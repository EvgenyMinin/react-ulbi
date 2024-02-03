module.exports = {
  root: true,
  env: { browser: true, es2020: true, jest: true },
  plugins: ['@typescript-eslint', 'i18next'],
  extends: [
    'airbnb-base',
    'airbnb-typescript',
    'airbnb-typescript',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'plugin:i18next/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    ecmaVersion: 2021,
    sourceType: 'module',
  },
  settings: {
    'import/resolver': {
      alias: [
        ['@/src', './src'],
        ['@/app', './app'],
        ['@/modules', './modules'],
        ['@/components', './components'],
        ['@/services', './services'],
        ['@/shared', './shared'],
        ['@/locales', './locales'],
        ['@/test-utils', './test-utils'],
      ],
      node: {
        extensions: ['.ts', '.tsx', '.js'],
      },
    },
  },
  rules: {
    'react/react-in-jsx-scope': 'off',
    quotes: ['error', 'single'],
    'no-console': 'error',
    'object-curly-spacing': ['error', 'always'],
    'max-lines': ['error', 200],
    'max-depth': ['error', 4],
    'no-unused-vars': [
      'error',
      {
        vars: 'all',
        args: 'none',
      },
    ],
    '@typescript-eslint/semi': ['error'],
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        vars: 'all',
        args: 'none',
      },
    ],
    '@typescript-eslint/no-explicit-any': 'off',
    'react/display-name': 'off',
    'import/extensions': 'off',
    'max-len': [
      'error',
      {
        code: 100,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreComments: true,
      },
    ],
    'no-plusplus': [
      'error',
      {
        allowForLoopAfterthoughts: true,
      },
    ],
    'react/jsx-key': 'error',
    'import/no-cycle': ['error'],
    'import/prefer-default-export': 'off',
    'import/order': [
      'error',
      {
        'newlines-between': 'always',
        groups: ['builtin', 'external', 'type', 'internal', ['parent', 'sibling']],
        pathGroups: [
          {
            pattern: 'react',
            group: 'builtin',
            position: 'before',
          },
          {
            pattern: '@/app/**',
            group: 'type',
            position: 'after',
          },
          {
            pattern: '@/modules/**',
            group: 'type',
            position: 'after',
          },
          {
            pattern: '@/services/**',
            group: 'type',
            position: 'after',
          },
          {
            pattern: '@/pages/**',
            group: 'type',
            position: 'after',
          },
          {
            pattern: '@/components/**',
            group: 'type',
            position: 'after',
          },
          {
            pattern: '@/test-utils',
            group: 'type',
            position: 'after',
          },
          {
            pattern: '@/shared/**',
            group: 'type',
            position: 'after',
          },
          {
            pattern: './*.module.css',
            group: 'sibling',
            position: 'after',
          },
        ],
        pathGroupsExcludedImportTypes: ['react'],
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
  },
};
