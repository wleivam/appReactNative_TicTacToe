module.exports = {
    root: true,
    env: {
        'react-native/react-native': true,
    },
    extends: ['@react-native-community', 'prettier'],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
    },
    plugins: ['react', 'react-native'],
    rules: {
        'react-native/no-unused-styles': 2,
        'react-native/no-inline-styles': 2,
        'react-native/no-color-literals': 2,
        'react-native/no-raw-text': 2,
        'react-native/no-single-element-style-arrays': 2,
        indent: 2,
        'prettier/prettier': ['off', {tabWidth: 4}],
        'comma-dangle': ['error', {
            'arrays': 'always-multiline',
            'objects': 'always-multiline',
            'imports': 'always-multiline',
            'exports': 'always-multiline',
            'functions': 'always-multiline',
        }],
        'eol-last': ['error', 'always'],
        'object-curly-newline': ['error', {
            'ObjectExpression': { 'consistent': true },
            'ObjectPattern': { 'multiline': true, 'minProperties': 3 },
            'ImportDeclaration': { 'multiline': true, 'minProperties': 3 },
            'ExportDeclaration': { 'multiline': true, 'minProperties': 3 },
        }],
    },
};
