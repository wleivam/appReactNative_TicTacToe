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
    },
};
