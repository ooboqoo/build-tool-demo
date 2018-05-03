import { name } from './foo.cjs.js'        // cjs
import { add } from './bar.esm.js'         // esm
import { license } from '../package.json'  // json
import { join } from 'lodash'              // npm package

console.log(add(1, 2), license, name, join(['a', 'b', 'c'], '-'))
