# Webpack Demo

### getting-started

* CopyWebpackPlugin 简单拷贝文件

### output-management

* 多入口配置
* HtmlWebpackPlugin 简化了HTML文件的创建，对于在文件名中包含每次会随着编译而发生变化哈希的 webpack bundle 尤其有用。
* CleanWebpackPlugin 自动清理打包输出目录


### code-splitting & lazy-loading

* splitChunks
* `externals`


### html-css-images

* url-loader & file-loader
* mini-css-extract-plugin (successor of webpack3 + extract-text-webpack-plugin)

```css
.img {
  background-image: url('/logo45.png');  /* 不会进行处理 */
  background-image: url('logo123.png');  /* 会打包，在当前目录寻找 */
}
```

### conditional-import

通过打包时传入的环境变量排除部分不需要的模块，如生产环境不打包 MOCK 数据

* 通过 `resolve.alias` 实现，用起来可能不是很方面
* 借助 _webpack-conditional-loader_ 实现，打包性能应该会受影响


## Plugins

### DefinePlugin

cross-env 只影响到 webpack.config.js 里代码的执行，不会影响到 webapp 代码，即 cross-env 里定义的环境变量并不会变成浏览器里的一个环境变量。

DefinePlugin 里定义的环境变量，会影响到 webapp 里代码的执行，感觉是给浏览器里添加了环境变量(全局变量)，但其实 DefinePlugin 并没有添加全局变量，而只是在编译阶段进行了字符串替换，所以最终的效果是，待编译的代码能看到 DefinePlugin 里定义的变量，但运行时在 DevTool 里是看不到这个变量的。

```js
var a = process.env
var b = process.env
console.log({a, b, compare: a === b})  // false
```

注: webpack4 中设置 `mode` 为 'development' 或 'production' 时，会自动设置 `process.env.NODE_ENV` 变量。
