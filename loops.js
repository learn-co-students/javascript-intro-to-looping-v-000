"use strict";

function forLoop(array) {
  for (var i = 0; i < 25; i++) {
    array.push(`I am ${i} strange loop${i === 0 ? '' : 's'}.`);
  }
  return array;
}

function whileLoop(number) {
  while (number > 0) {
    console.log(--number);
  }
  return 'done';
}

function doWhileLoop(array) {


do {
  array.splice(0, 1);
} while (array.length > 0);
return array;
}
