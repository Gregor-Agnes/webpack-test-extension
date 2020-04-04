const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ImageminPlugin = require("imagemin-webpack");
module.exports = {
    mode: 'development',
    entry: {
        app: './src/index.js',
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Output Management',
        }),
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'public'),
        publicPath: 'http://localhost:8080/',
    },
    module: {
        rules: [
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext][query]',
                        },
                    }
                ]
            }
        ]
    },
    plugins: [
        // Make sure that the plugin is after any plugins that add images, example `CopyWebpackPlugin`
        new ImageminPlugin({
            bail: false, // Ignore errors on corrupted images
            cache: true,
            imageminOptions: {
                // Before using imagemin plugins make sure you have added them in `package.json` (`devDependencies`) and installed them

                // Lossless optimization with custom option
                // Feel free to experiment with options for better result for you
                plugins: [
                    ["gifsicle", { interlaced: true }],
                    ["jpegtran", { progressive: true }],
                    ["optipng", { optimizationLevel: 5 }],
                    [
                        "svgo",
                        {
                            plugins: [
                                {
                                    removeViewBox: false
                                }
                            ]
                        }
                    ]
                ]
            }
        })
    ],
    plugins: [
        // Make sure that the plugin is after any plugins that add images, example `CopyWebpackPlugin`
        new ImageminPlugin({
            bail: false, // Ignore errors on corrupted images
            cache: true,
            imageminOptions: {
                // Before using imagemin plugins make sure you have added them in `package.json` (`devDependencies`) and installed them

                // Lossless optimization with custom option
                // Feel free to experiment with options for better result for you
                plugins: [
                    ["gifsicle", { interlaced: true }],
                    ["jpegtran", { progressive: true }],
                    ["optipng", { optimizationLevel: 5 }],
                    [
                        "svgo",
                        {
                            plugins: [
                                {
                                    removeViewBox: false
                                }
                            ]
                        }
                    ]
                ]
            }
        })
    ]
};