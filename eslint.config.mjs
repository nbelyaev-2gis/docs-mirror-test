import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import { defineConfig, globalIgnores } from 'eslint/config';
import * as reactHooks from 'eslint-plugin-react-hooks';

export default defineConfig([
  globalIgnores(['node_modules', '.docusaurus', 'static', 'build']),
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    plugins: { js },
    extends: ['js/recommended'],
  },
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    languageOptions: { globals: { ...globals.browser, ...globals.node } },
  },
  tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  reactHooks.configs['recommended-latest'],
  {
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          ignoreRestSiblings: true,
        },
      ],
      '@typescript-eslint/no-explicit-any': 0,
      'react/react-in-jsx-scope': 0,
      'react/prop-types': 0,
      'react/no-danger': [
        'error',
        {
          customComponentNames: ['*'],
        },
      ],
      'no-nested-ternary': 2,
      'prefer-const': ['error', { destructuring: 'all' }],
    },
  },
]);
