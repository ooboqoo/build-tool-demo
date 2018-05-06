const { Transform } = require('stream')
const Vinyl = require('vinyl')

module.exports = function () {
  return new Transform({
    objectMode: true,
    transform (file, encoding, callback) {
      console.log(file.cwd, file.base, file.path)
      let contents = file.contents.toString(encoding)
      contents = contents.replace(/\bconst\b/g, 'var')
      file.contents = Buffer.from(contents)
      this.push(file)
      const sourceMap = new Vinyl({
        base: file.base,
        path: `${file.path}.map`,
        contents: Buffer.from('this is the source map')
      })
      callback(null, sourceMap)
    },
  })
}
