const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = ({ mode } = { mode: 'production' }) => ({
  mode,
  devtool: 'source-map',
  entry: { main: './frontend/app.tsx' },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    publicPath: '/',
  },
  devServer: {
    port: 8080,
    publicPath: "/dist/",
  },
  resolve: { extensions: ['.ts', '.tsx', '.js'] },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        user: { loader: 'awesome-typescript-loader' },
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      hash: true,
      template: 'frontend/index.html',
    }),
    new CleanWebpackPlugin(),
  ],
});
