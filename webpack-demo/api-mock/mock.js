const { Router } = require('express')

const mockRouter = Router()

mockRouter
  .get('/api/hello', (req, res, next) => {
    res.send({data: {msg: 'Hello Mock API!'}})
  })
  .get('/api/author', (req, res, next) => {
    res.send({data: {author: 'Gavin 20180518'}})
  })

module.exports = mockRouter
