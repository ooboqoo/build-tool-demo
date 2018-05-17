/* global XMLHttpRequest */
const ajax = function (method, url, options = {}, success, error) {
  const xhr = new XMLHttpRequest()
  xhr.responseType = options.responseType || 'json'
  xhr.open(method, url, true)
  xhr.send()
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        success(xhr.response)
      } else {
        error(xhr.response)
      }
    }
  }
}

const http = new Proxy(ajax, {
  get (target, prop, receiver) {
    return (url, options) => new Promise((resolve, reject) => {
      target(prop, url, options, resolve, reject)
    })
  }
})

http.get('/api/hello').then(res => {
  document.body.innerText += res.data.msg
}).catch(err => {
  console.log(err)
})

http.get('/api/author').then(res => {
  document.body.innerText += ' ' + res.data.author
}).catch(err => {
  console.log(err)
})
