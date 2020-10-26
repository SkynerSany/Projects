const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './shelter/pages/main/app.js',
  devtool: 'eval',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './shelter/pages/main/'),
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader'],
        }),
      },
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new ExtractTextPlugin('style.css'),
  ],
};
