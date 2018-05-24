var path = require("path");
var webpack = require("webpack");
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var isDev = false;

module.exports = {
    entry: "./app/main.js",
    output: {
        filename: "bundle.js",
        path: path.join(__dirname, "public")
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                // use: ["style-loader", "css-loader", "sass-loader"]
                use: ExtractTextPlugin.extract({
                    use: ["style-loader", "css-loader", "sass-loader"]
                })
            },
            {
                test: /\.css$/,
                // use: ["style-loader", "css-loader"]
                use: ExtractTextPlugin.extract({
                    use: "css-loader",
                    fallback: "style-loader"
                })
            },
            {
                test: /\.(eot|ttf|woff|woff2|svg)$/,
                use: ["file-loader"]
            }
        ]
    },
    plugins: isDev ? [] : [
        new webpack.optimize.UglifyJsPlugin(),
        new ExtractTextPlugin("mystyles.css")
    ]
};
