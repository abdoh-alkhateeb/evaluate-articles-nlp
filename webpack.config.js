const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/client/index.js',

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[fullhash].js',
    clean: true,
    library: {
      type: 'var',
      name: 'Client'
    }
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/i,
        loader: 'babel-loader'
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
        type: 'asset'
      }
    ]
  },

  plugins: [
    new HtmlWebPackPlugin({
      template: './src/client/views/index.html',
      filename: './index.html'
    })
  ]
};
