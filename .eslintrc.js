module.exports = {
    env: {
        commonjs: true,
        node: true,
    },
    extends: ['eslint:recommended', 'plugin:prettier/recommended'],
    parserOptions: {
        ecmaVersion: 'latest',
    },
    rules: {
        'prettier/prettier': [
            'error',
            {
                singleQuote: true,
                semi: false,
            },
        ],
    },
}
