const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const resolve = (dir) => path.resolve(__dirname, '..', dir)

module.exports = {
  mode: 'none', // 'production' || 'development',
  entry: resolve('src/index.js'),
  output: {
    filename: 'main.js',
    path: resolve('dist')
  },
  devtool: 'inline-cheap-module-source-map',
  optimization: {
    minimize: false,
    usedExports: true,
    splitChunks: {
      chunks: 'all'
    },
    runtimeChunk: {
      name: 'manifest'
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'HF DEMO'
    })
  ]
}
