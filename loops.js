function forLoop(argument) {
  for (let i = 0; i < 25; i++) {
    if (i === 1)
      argument.push(`I am ${i} strange loop.`)
    else 
      argument.push(`I am ${i} strange loops.`)
}
return argument
}

function whileLoop(argument) {
  while (argument > 0) {
  console.log(--argument)
}
  return "done"
}

function maybeTrue() {
  return Math.random() >= 0.5
}

function doWhileLoop(array) {

  do {

  array.splice(0, 1)

} while (array.length > 0 && maybeTrue());

  return array

}