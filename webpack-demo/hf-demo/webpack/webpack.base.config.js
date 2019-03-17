const path = require('path')

const resolve = (dir) => path.resolve(__dirname, '..', dir)

module.exports = {
  mode: 'development', // 'production' || 'development',
  entry: resolve('src/index.js'),
  output: {
    filename: 'main.js',
    path: resolve('dist')
  },
  optimization: {
    minimize: false,
    usedExports: true,
    splitChunks: {
      chunks: 'all'
    },
    runtimeChunk: {
      name: 'manifest'
    }
  }
}
