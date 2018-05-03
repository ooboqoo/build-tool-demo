import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import json from 'rollup-plugin-json'

import pkg from './package.json'

export default {
  input: 'src/main.js',
  output: [
    {
      name: 'mylib', // 指定在非模块使用方式下，本项目导出的全局变量名
      file: pkg.browser,
      format: 'umd',
      globals: { // 指定导入模块对应的全局变量名
        lodash: '_',
      },
    },
    {
      file: pkg.main,
      format: 'cjs',
    },
    {
      file: pkg.module,
      format: 'es',
    }
  ],
  plugins: [
    resolve(),
    commonjs({
      // https://github.com/rollup/rollup/wiki/Troubleshooting#name-is-not-exported-by-module
      namedExports: {
        'src/foo.cjs.js': [ 'name' ],
      },
    }),
    json(),
  ],
  // 对于声明为外部模块的，rollup 只进行简单的写法转换，不需要用到 resolve 和 commonjs 插件
  external: [
    'lodash',
  ]
}
