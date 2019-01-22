const path = require("path");
const CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = {
    entry: "./src/sfvalidate.js",
    plugins: [new CleanWebpackPlugin(["dist"])],
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "sfvalidate.js"
    },
    target: "web",
    mode: "production"
};
