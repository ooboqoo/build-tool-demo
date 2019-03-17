const express = require('express')
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')

const config = require('./webpack.base.config')

const app = express()
const compiler = webpack(config)
app.use(webpackDevMiddleware(compiler))
app.listen(7000, err => {
  if (err) {
    console.error(err)
  } else {
    console.log('http://localhost:7000')
  }
})
