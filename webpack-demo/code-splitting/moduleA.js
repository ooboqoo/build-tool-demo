import _ from 'lodash'
import { createComponent } from './util'

const content = _.join(['Hello', 'from', 'Module', 'A'], ' ')

document.body.appendChild(createComponent(content))

console.log('moduleA loaded')

export default 'moduleA default'
