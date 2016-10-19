var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry : './index.js',
  output : {
    filename : 'build.js',
  },
  module: {
    loaders: [
      {
        test: /\.bookmarklet.js$/,
        loaders: ['bookmarklet-loader'],
      }
    ],
  },
  plugins : [
    new HtmlWebpackPlugin({
      template : './index.template.html',
    }),
  ],
}
