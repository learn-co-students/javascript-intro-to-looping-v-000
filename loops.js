function forLoop(array) {
  for(let n = 0; 25 > n; n++)
    if (n === 1) {
        array.push("I am 1 strange loop.")
      } else {
        array.push(`I am ${n} strange loops.`)
      }
  return array
}

function whileLoop(n) {
  while(n > 0) {
    console.log(--n)
  }
  return   'done'
}

function doWhileLoop(array) {
  do {
    array.pop()
  } while (array.length > 0 && maybeTrue())
  return array
}

function maybeTrue() {
  return Math.random() >= 0.5
}
