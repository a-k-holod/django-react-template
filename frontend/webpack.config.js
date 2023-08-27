const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, '../myproject/static/frontend'),
        filename: 'js/main.js',
    },
    plugins: [
        new CopyWebpackPlugin({
            patterns: [{ from: 'build', to: '../' }],
        }),
    ],
};
