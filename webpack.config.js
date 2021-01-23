const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'production',
  devtool: 'source-map',
  entry: __dirname + '/frontend/app.tsx',
  output: {
    path: __dirname + 'dist',
    filename: 'app.bundle.js',
  },
  resolve: { extensions: ['.tsx', '.js'] },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        loader: 'awesome-typescript-loader',
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'frontend/index.html',
    }),
    new CleanWebpackPlugin(),
  ],
};
