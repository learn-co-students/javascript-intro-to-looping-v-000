
function forLoop(ary) {
  for (let i = 0; i < 25; i++) {
    if (i < 2) {
      ary.push("I am 1 strange loop.")}
    else {
      ary.push("I am ${i} strange loops.")
    }
  }
  return ary
}




function whileLoop(n) {
  let countdown = n
  while (countdown > 0) {
    console.log(--countdown)
  }
  return "done"
}




function doWhileLoop(ary) {
  function maybeTrue() {
    return Math.random() >= 0.5
  }
  do {
    ary = ary.slice(1)
  } while (ary.length > 0 && maybeTrue())

  return ary
}
