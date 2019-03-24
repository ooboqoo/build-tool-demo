if (!PRODUCTION) {
  console.log('Debug info')
} else {
  console.log('Production log')
}

console.log(PRODUCTION)

// conditional import - async
if (PRODUCTION) {
  // module-a.js 文件会单独打包到一个文件，不会打到总包内
  import('./module-a').then(({log}) => {
    log()
  })
} else {
  // 这部分代码不会出现在打包文件内
  import('./module-b').then(({log}) => {
    log()
  })
}

// conditional import - sync
if (PRODUCTION) {
  // module-c.js 文件打在总包内，不会打包成单独文件
  const { log } = require('./module-c')
  log()
} else {
  // 这部分代码不会出现在打包文件内
  const { log } = require('./module-d')
  log()
}

var a = process.env
var b = process.env

console.log({a, b, result: a === b})  // false
