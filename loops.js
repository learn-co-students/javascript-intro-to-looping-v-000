function forLoop(array) {
  for (var i=1; i <= 25; i++) {
    array.push(`I am ${i} strange loop${i === 1 ? '' : 's'}.`);
  }
  return array
}

function whileLoop(n) {
  i = n;
  while (i > 0) {
    console.log(i);
    i -= 1;
  }
  return 'done';
}

function doWhileLoop(array) {
  function maybeTrue() {
    return Math.random() >= 0.5
  }
  do {
    array.pop();
  } while (array.length > 0 && maybeTrue());

  return array;

}
