const { Transform } = require('stream')
// var Vinyl = require('vinyl');

module.exports = function () {
  return new Transform({
    objectMode: true,
    transform (file, encoding, callback) {
      file.contents = Buffer.from('123456')
      console.log(file.cwd, file.base, file.path)
      // const file1 = Object.assign({}, file, {contents: Buffer.from('abc')});
      // const file2 = Object.assign({}, file, {contents: Buffer.from('def')});
      this.push(file)
      file.path = '123.js'
      file.contents = Buffer.from('abc')
      this.push(file)
      callback(null, file)
    },
  })
}
