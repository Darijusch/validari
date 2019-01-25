const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: './src/validari.js',
    plugins: [new CleanWebpackPlugin(['build'])],
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'validari.js',
    },
    target: 'web',
    mode: 'development',
};
