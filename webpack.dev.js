const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  output: {
    publicPath: 'http://localhost:8080/',
  },
  devServer: {
    contentBase: 'Resources/Public',
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
        use: [
          {
            loader: 'cache-loader',
          },
          {
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
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: 'cache-loader',
          },
          {
            loader: 'file-loader',
            options: {
              name: 'Gfx/[name].[ext][query]',
              publicPath: 'http://localhost:8080/',
            },
          }
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          {
            loader: 'cache-loader',
          },
          {
            loader: 'file-loader',
            options: {
              name: 'Fonts/[name].[ext][query]',
              publicPath: 'http://localhost:8080/',
            },
          }
        ],
      },
    ],
  },
});