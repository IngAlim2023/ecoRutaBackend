import { configApp } from '@adonisjs/eslint-config'

export default [
  ...configApp(),
  {
    files: ['**/*.ts'],
    rules: {
      'unicorn/filename-case': 'off',
      'filenames/match-regex': 'off',
    },
  },
]
