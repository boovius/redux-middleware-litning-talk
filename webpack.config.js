var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: [
    'webpack-hot-middleware/client',
    './index',
  ],

  output: {
    path: path.join(__dirname, '/bundle'),
    publicPath: '/static/',
    filename: 'index.js',
  },

  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
  ],

  module: {
    loaders: [
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass']
      },
      {
        test: /(\.js$)|(\.jsx?$)/,
        exclude: /node_modules/,
        loaders: ['babel']
      },
      {
        test: /\.html$/,
        loaders: ['file?name=[name].[ext]']
      }
    ]
  }
};
