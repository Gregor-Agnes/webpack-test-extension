const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    output: {
        publicPath: 'http://localhost:8080/',
    },
    devServer: {
        contentBase: 'public',
        hot: true,
        disableHostCheck: true,
        liveReload: false,
        headers: {
            'Access-Control-Allow-Origin': '*'
        }
    },
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [{
                    loader: "style-loader"
                }, {
                    loader: "css-loader",
                    options: {
                        sourceMap: true,
                    }
                }, {
                    loader: "sass-loader",
                    options: {
                        sourceMap: true,
                    }
                }],
            },
        ],
    },
});