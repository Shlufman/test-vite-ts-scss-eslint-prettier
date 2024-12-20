import pluginJs from '@eslint/js';
import globals from 'globals';

import eslintReact from 'eslint-plugin-react';
import eslintReactHooks from 'eslint-plugin-react-hooks';
import eslintReactRefresh from 'eslint-plugin-react-refresh';
import prettierPlugin from 'eslint-plugin-prettier';
import eslintConfigPrettier from 'eslint-config-prettier';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';

/** @type {import('eslint').Linter.Config[]} */
export default tseslint.config(
  {
    plugins: {
      '@typescript-eslint': tseslint.plugin,
      'react-hooks': eslintReactHooks,
      react: eslintReact,
      'react-refresh': eslintReactRefresh,
      prettier: prettierPlugin,
    },
  },
  {
    ignores: ['node_modules', 'dist'],
  },
  { files: ['**/*.{ts,tsx}'] },
  {
    languageOptions: {
      globals: { ...globals.browser, ...globals.node, ...globals.es2021 },
      parserOptions: {
        project: ['tsconfig.json', 'tsconfig.node.json'],
      },
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    rules: {
      ...eslintConfigPrettier.rules,
      // 'prefer-const': 'warn',
      'react/react-in-jsx-scope': 'off',
      // 'arrow-parens': ['error', 'always'],
      // 'react/prop-types': 'warn',
      // 'prettier/prettier': ['error'],
      // 'no-var': 'error',
    },
  }
);
