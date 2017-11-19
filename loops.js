
function forLoop(ary) {
  "use strict";
  for (var i = 0; i < 25; i++) {
    if (i === 0) {
      ary.push("I am 1 strange loop.");
    } else {
      ary.push(`I am ${i} strange loops.`);
    }

  }
  return ary;
}

function whileLoop(num) {
  while (num > 0) {
    console.log(--num);
  }
  return 'done';
}
function maybeTrue() {
  return Math.random() >= 0.5;
}

function doWhileLoop(array) {
  do {
    array.pop();
  } while (array.length > 0 && maybeTrue);
  return array;
}
