import {foo} from './a'

if (process.env.development) {
  var bar = require('./b').bar
}

console.log(foo, bar)
