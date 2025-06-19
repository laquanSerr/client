// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import storybook from 'eslint-plugin-storybook';

// @ts-check

import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';

// @prettier
import prettier from 'eslint-config-prettier';
import eslintPluginPrettier from 'eslint-plugin-prettier';

// @tailwindcss

export default [
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ['*.ts', '*.tsx', '*.js', '*.jsx'],
    languageOptions: {
      parser: tseslint.parser,
    },
    plugins: {
      tailwindcss,
      prettier: eslintPluginPrettier,
    },
    rules: {
      'prettier/prettier': 'error',
      'tailwindcss/classnames-order': 'warn',
    },
  },
  storybook.configs['flat/recommended'],
  prettier,
];
