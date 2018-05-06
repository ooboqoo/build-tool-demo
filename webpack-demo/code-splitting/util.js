export function createComponent (content) {
  var element = document.createElement('div')
  element.innerHTML = content
  return element
}
