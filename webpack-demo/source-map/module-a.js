export const log = () => { console.log(1); console.log(2); console.log(3) }

export const func = () => {
  if (window.foo) {
    console.log(window.foo)
  } else {
    console.log(123456)
  }
}

export const foo = 'foo'
