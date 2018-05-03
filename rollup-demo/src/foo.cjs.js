/* eslint no-unused-vars: 0 */

const foo = {
  name: used()
}

function used () {
  return 'foo'
}

function unused () { }

module.exports = foo
