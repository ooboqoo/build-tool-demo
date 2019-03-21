if (Date.now() % 2 === 0) {
  import(/* webpackChunkName: "moduleA" */ './moduleA').then(moduleA => console.log(moduleA))
} else {
  import(/* webpackChunkName: "moduleB" */ './moduleB').then(moduleB => console.log(moduleB))
}

function lazyloadingImage (imageName) {
  // 图片懒加载，但不会单独打包成一个 chunk
  import(/* webpackMode: "eager" */ `assets/images/${imageName}.jpg`)
}

// https://medium.com/webpack/link-rel-prefetch-preload-in-webpack-51a52358f84c
// import(/* webpackPrefetch: true */ "DashboardPage")
