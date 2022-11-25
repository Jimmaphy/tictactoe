module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    plugins: [
      '@typescript-eslint',
      'import',
      'jsdoc'
    ],
    parserOptions: {
      project: './tsconfig.json',
    },
    rules: {
      'camelcase': 'off',
      "indent": ["error", 4, { "SwitchCase": 1 }],
      'no-console': 'off',
      'linebreak-style': 'off',
      'no-plusplus': ["error", { "allowForLoopAfterthoughts": true }],
      'jsdoc/require-jsdoc': [
        'error',
        {
          'publicOnly': false,
          'checkConstructors': true,
          'contexts': [
            'MethodDefinition[key.name!=/get.*/][key.name!=/set.*/]',
          ],
          'require': {
            'ClassDeclaration': true,
            'MethodDefinition': true
          },
        }
      ],
      'jsdoc/require-param-type': 'off',
      'jsdoc/require-returns-type': 'off',
      'jsdoc/no-types': [
        'warn',
        {
          'contexts': ['any']
        }
      ],
      '@typescript-eslint/explicit-member-accessibility': [
        'error',
        {
          'accessibility': 'explicit',
        }
      ],
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/no-inferrable-types': 'off',
      '@typescript-eslint/triple-slash-reference': 'off',
      '@typescript-eslint/naming-convention': [
        'error',
        {
          'selector': 'default',
          'format': ['camelCase']
        },
        {
          'selector': 'variable',
          'format': ['camelCase', 'UPPER_CASE']
        },
        {
          'selector': 'classProperty',
          'format': ['camelCase', 'UPPER_CASE']
        },
        {
          'selector': 'parameter',
          'format': ['camelCase'],
          'leadingUnderscore': 'allow'
        },
        {
          'selector': 'memberLike',
          'modifiers': ['private'],
          'format': ['camelCase']
        },
        {
          'selector': 'typeLike',
          'format': ['PascalCase']
        }
      ],
    }
  };
  