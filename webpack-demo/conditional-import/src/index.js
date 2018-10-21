let a, b, c

a = import('./a.js')  // a.js 会成为一个独立的 chunk
b = require('./b.js')

if (false) {
  c = import('./c.js')  // 这段代码不会出现在打包文件中
}

console.log(a, b, c)
