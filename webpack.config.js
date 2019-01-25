const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: './src/validaris',
    plugins: [new CleanWebpackPlugin(['dist'])],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'validari.js',
    },
    target: 'web',
    mode: 'production',
};
