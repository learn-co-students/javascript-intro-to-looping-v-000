function forLoop(array) {
  for (let i = 0; i < 25; i++) {
    if (i === 1) {
      array.push("I am 1 strange loop.")
    }
      else {
        array.push(`I am ${i} strange loops.`)
      }
  }
  return array
}

//
// function whileLoop(n) {
//   n = 0
//   x = 0
//   while (n > 0) {
//     n++;
//     x += n
//   }
//
// }

function whileLoop(n) {
  while (n > 0) {
    console.log(--n)
  }
  return "done"
}



function maybeTrue() {
  return Math.random() >= 0.5
}

function doWhileLoop(array) {

  do {
    array.splice(array.length - 1, 1);
  } while (array.length > 0 && maybeTrue());
return array
}


//
// if i === 1
//   array.push("I am 1 strange loop.")
// else
//   array.push(`I am ${i} strange loops.`)
