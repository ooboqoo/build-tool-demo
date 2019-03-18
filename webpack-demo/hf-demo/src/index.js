import {foo} from './a'

if (process.env.development) {
  var bar = require('./b').bar
}

foo()

console.log(bar)
