const rollup = require('rollup')
const resolve = require('rollup-plugin-node-resolve')
const commonjs = require('rollup-plugin-commonjs')
const json = require('rollup-plugin-json')

const pkg = require('./package.json')

async function build () {
  // create a bundle
  const bundle = await rollup.rollup({
    input: 'src/main.js',
    plugins: [
      resolve(),
      commonjs({
        namedExports: {
          'src/foo.cjs.js': [ 'name' ],
        },
      }),
      json(),
    ],
    external: [
      'lodash',
    ]
  })

  bundle.write({
    file: pkg.main,
    format: 'cjs',
  })

  bundle.write({
    file: pkg.module,
    format: 'es',
  })
}

build()
