const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: './src/sfvalidates',
    plugins: [
        new CleanWebpackPlugin(['build'])
    ],
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'sfvalidate.js'
    },
    target: "web",
    mode: 'development'
};