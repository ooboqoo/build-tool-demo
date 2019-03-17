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








