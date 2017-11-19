'use strict';

function forLoop(array) {
  for (let i = 0; i < 25; i++) {
    if (i+1 === 1) {
      array.push(`I am ${i+1} strange loop.`);
    } else {
      array.push(`I am ${i+1} strange loops.`);      
    }
  }
  return array;
}

function whileLoop(num) {
  while(num > 0) {
    console.log(--num);
  }
  return "done";
}

function maybeTrue() {
  return Math.random() >= 0.5;
}

function doWhileLoop(array) {
  do {
    array.splice(0, 1);
  } while (array > 0 && maybeTrue());
  return array;  
}