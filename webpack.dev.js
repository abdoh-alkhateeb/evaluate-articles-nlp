const {merge} = require('webpack-merge');
const rootConfig = require('./webpack.config.js');

module.exports = merge(rootConfig, {
  mode: 'development',

  devtool: 'source-map',
  stats: 'verbose',
  devServer: {
    open: true,
    host: 'localhost',
    port: 8008,
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  },

  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  }
});
