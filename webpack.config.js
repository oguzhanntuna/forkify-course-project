const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: ['babel-polyfill', './src/js/index.js'],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/bundle.js'
    },
    devServer: {
        contentBase: './dist'
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html'
        })
    ],
    module: {
        rules: [
            {
                test: /\.js$/, // Check if they end with .js, so all of the .js files will use the babel-loader
                exclude: /node_modules/, // For not to search the .js files in node_modules. We just want to search .js files in our project.
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    }
};