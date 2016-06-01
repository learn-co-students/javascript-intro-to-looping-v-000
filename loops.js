// function whileLoop(n) {
//   var i = 0;
//   while (i <= n) {
//     return "I am ${i} strange loop";
//     i++;
//   }
// }

function forLoop(array) {
  for (i=0; i<25; i++) {
    i === 1 ? array.push("I am ${i} strange loop.") : array.push("I am ${i} strange loops.");
  }
  return array;
}
function whileLoop(num) {
  while (num > 0) {
    console.log(--num)
  }
  return "done";
}

function maybeTrue() {
    return Math.random() >= 0.5
}

function doWhileLoop(array) {
  do {
    array.shift();
  } while (array.length > 0 && maybeTrue());
  return array;
}