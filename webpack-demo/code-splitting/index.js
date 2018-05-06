if (Date.now() % 2 === 0) {
  import(/* webpackChunkName: "moduleA" */ './moduleA').then(moduleA => console.log(moduleA))
} else {
  import(/* webpackChunkName: "moduleB" */ './moduleB').then(moduleB => console.log(moduleB))
}
