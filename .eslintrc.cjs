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
    'plugin:storybook/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    ecmaVersion: 2021,
    sourceType: 'module',
  },
  overrides: [
    {
      files: ['**/src/**/*.test.{ts,tsx}'],
      rules: {
        'i18next/no-literal-string': 'off',
      },
    },
  ],
  rules: {
    'no-param-reassign': 'off',
    'react/react-in-jsx-scope': 'off',
    quotes: ['error', 'single'],
    'no-console': 'error',
    'object-curly-spacing': ['error', 'always'],
    'max-lines': ['error', 200],
    'max-depth': ['error', 4],
    'import/no-extraneous-dependencies': [
      'error',
      { devDependencies: true, optionalDependencies: false, peerDependencies: false },
    ],
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
    'no-restricted-imports': 'off',
    '@typescript-eslint/no-restricted-imports': [
      'warn',
      {
        name: 'react-redux',
        importNames: ['useSelector', 'useDispatch'],
        message: 'Use typed hooks `useAppDispatch` and `useAppSelector` instead.',
      },
    ],
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
            pattern: 'app/**',
            group: 'type',
            position: 'after',
          },
          {
            pattern: 'test-utils',
            group: 'type',
            position: 'after',
          },
          {
            pattern: 'processes/**',
            group: 'type',
            position: 'after',
          },
          {
            pattern: 'pages/**',
            group: 'type',
            position: 'after',
          },
          {
            pattern: 'widgets/**',
            group: 'type',
            position: 'after',
          },
          {
            pattern: 'features/**',
            group: 'type',
            position: 'after',
          },
          {
            pattern: 'entities/**',
            group: 'type',
            position: 'after',
          },
          {
            pattern: 'shared/**',
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
