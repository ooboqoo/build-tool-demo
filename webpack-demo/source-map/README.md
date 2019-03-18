# Devtool

source-map         有最后一行 `//# sourceMappingURL=bundle-source-map.js.map`
hidden-source-map  没有最后这一行

source-map         sourceMap 已独立文件存在
inline-source-map  sourceMap 信息直接以 DataURL 的形式嵌在最后一行中

source-map               original source
cheap-source-map         transformed code (lines only)
cheap-module-source-map  original source (lines only)


eval               sourceMap 只能看清楚有哪几个模块，里面的代码是 generated code
eval-source-map    sourceMap 以 DataURL 嵌在模块代码后面(在 eval 内)

#### 代码类型比较

original source `import {test} from "module"; class A extends test {}` --(loader transpile)-->  
transformed code `import {test} from "module"; var A = function(_test) { ... }(test);` --(webpack transform)-->  
generated code `var module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(42); module__WEBPACK_IMPORTED_MODULE_1__.a();` --(bundle)-->  
bundled code

#### 适用于开发环境的选项

```txt
eval                          generated code                 把 bundle 按文件给分开了
eval-source-map               original source                能看到源码且能打行内断点，build 慢，但 rebuild 飞快
cheap-eval-source-map         transformed code (lines only)  
cheap-module-eval-source-map  original source (lines only)   加了 loader/transpiler 产生的 source map
```

#### 适用于生成环境的选项

```txt
none                  不产出 source map
source-map            正常 source map
hidden-source-map     正常 source map, 仅供 error stack 使用, DEVTOOL 不可见
nosources-source-map  source map 仅提供目录结构和代码位置信息但不包含实际源码
```


| 类型         | 适用环境    | 独立map文件
|--------------|------------|--------------------------------------
| source-map   | production | 有
| 