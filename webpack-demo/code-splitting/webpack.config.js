const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
  mode: 'none',
  context: path.resolve(__dirname),  // for resolving entry points and loaders, default: process.cwd()
  entry: './index.js',
  output: {
    filename: '[name].[hash:8].js',
    path: path.resolve(__dirname, 'dist')
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      minSize: 3,  // 默认 30000 这里是为了分离出 util.js 部分故意调小的
    },
    runtimeChunk: {
      name: 'manifest'
    }
  },
  plugins: [
    new CleanWebpackPlugin([
      'dist'
    ]),
    new HtmlWebpackPlugin({
      title: 'Code Splitting',
      template: 'index.html',
    }),
  ],
  externals: {
    'lodash': '_',
  },
}
