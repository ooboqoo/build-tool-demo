import _ from 'lodash'
import { createComponent } from './util'

const content = _.join(['Hello', 'from', 'Module', 'B'], ' ')

document.body.appendChild(createComponent(content))

console.log('moduleB loaded')

export default 'moduleB default'
