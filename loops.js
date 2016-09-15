// "use strict";
function forLoop(array) {
  for (let num = 1; num <= 25; num++) {
    if (num == 1) {
      array.push("I am 1 strange loop.");
    } else {
      array.push(`I am ${num} strange loops.`);
    }
  }
  return array;
}

function whileLoop(num) {
  while (num > 0) {
    console.log(--num);
  }
  return "done";
}

function maybeTrue() {
  return Math.random() >= 0.5
}

function doWhileLoop(array) {
  do {
    array.splice(0,1)
  } while (array.length > 0 && maybeTrue());
  return array;
}