# webpack4-demo

## Webpack 4

### mode

```bash
$ webpack --mode development  # 'production' 'development' 'none'
```

### zero configration

```bash
$ mkidr webpack4-demo; cd webpack4-demo
$ npm init -y
$ npm i -D webpack webpack-cli
$ mkdir src
$ echo "export default 'hello world'" > src/index.js
$ npx webpack
```

optimization.splitChunks
optimization.minimizer (uglifyjs)

