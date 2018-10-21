const path = require('path')

module.exports = {
  mode: 'none',
  context: path.resolve(__dirname),  // for resolving entry points and loaders, default: process.cwd()
  // entry: './src/index.js',
  output: {
    // filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  optimization: {
    runtimeChunk: {
      name: 'manifest'
    }
  },
}
