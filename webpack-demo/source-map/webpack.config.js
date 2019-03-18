const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = [
  'cheap-eval-source-map',
  'cheap-module-eval-source-map',
  'cheap-module-source-map',
  'cheap-source-map',
  'eval',
  'eval-source-map',
  'hidden-source-map',
  'inline-source-map',
  'nosources-source-map',
  'source-map'
].map(devtool => ({
  mode: 'development',
  entry: {
    bundle: path.resolve(__dirname, 'index.js')
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: `./[name]-${devtool}.js`
  },
  devtool,
  optimization: {
    runtimeChunk: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: `Understand SourceMap (${devtool})`
    })
  ]
}))
