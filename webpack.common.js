const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ImageminPlugin = require("imagemin-webpack");
module.exports = {
  mode: 'development',
  entry: {
    app: './Resources/Private/JavaScript/index.js',
    app2: './Resources/Private/JavaScript/index2.js',
  },
  output: {
    filename: '[name]/[name].js',
    path: path.resolve(__dirname + '/Resources/Public'),
  },
  module: {
    rules: [
      {
        // Exposes jQuery for use outside Webpack build
        test: require.resolve('jquery'),
        use: [{
          loader: 'expose-loader',
          options: 'jQuery'
        }, {
          loader: 'expose-loader',
          options: '$'
        }]
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Output Management',
    }),
    // Make sure that the plugin is after any plugins that add images, example `CopyWebpackPlugin`
    new ImageminPlugin({
      bail: false, // Ignore errors on corrupted images
      cache: true,
      imageminOptions: {
        // Before using imagemin plugins make sure you have added them in `package.json` (`devDependencies`) and installed them

        // Lossless optimization with custom option
        // Feel free to experiment with options for better result for you
        plugins: [
          ["gifsicle", {interlaced: true}],
          ["jpegtran", {progressive: true}],
          ["optipng", {optimizationLevel: 5}],
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
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'Vendors',
          chunks: 'all',
        },
      },
    },
  },
};