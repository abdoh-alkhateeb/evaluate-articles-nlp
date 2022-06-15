const {merge} = require('webpack-merge');
const rootConfig = require('./webpack.config.js');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CSSMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin');
const {GenerateSW} = require('workbox-webpack-plugin');

module.exports = merge(rootConfig, {
  mode: 'production',

  optimization: {
    minimizer: [`...`, new CSSMinimizerWebpackPlugin({})]
  },

  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      },
      {
        test: /\.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      }
    ]
  },

  plugins: [new MiniCssExtractPlugin({filename: '[name].[fullhash].css'}), new GenerateSW()]
});
