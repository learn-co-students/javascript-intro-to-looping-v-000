function forLoop(array) {
  for(let i = 0; i < 25; i++) {
    array.push(`I am ${i} strange loop${i === 0 ? "" : "s"}.`);
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
  return Math.random() >= 0.5
}

function doWhileLoop(array) {
  do {
    array.splice(0, 1);
  } while (array.length > 0 && maybeTrue());
  return array;
}
