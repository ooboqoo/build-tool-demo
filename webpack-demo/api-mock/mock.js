const Router = require('koa-router')

const mockRouter = new Router()

mockRouter
  .get('/api/hello', ctx => {
    ctx.body = {data: {msg: 'Hello Mock API!'}}
  })
  .get('/api/author', ctx => {
    ctx.body = {data: {author: 'Gavin 20180518'}}
  })

module.exports = mockRouter
