const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const mockRouter = require('./mock')

module.exports = {
  mode: 'development',
  context: __dirname,  // for resolving entry points and loaders, default: process.cwd()
  entry: {
    app: './app.js'
  },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'API Mock Demo',
    }),
  ],
  devServer: {
    after: function (app, server) {
      app.use(mockRouter)
    }
  }
}
