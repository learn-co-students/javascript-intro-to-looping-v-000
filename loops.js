function forLoop(array) {
  for (let i = 0; i < 25; i++) {
    if (i === 1) {
      array.push(`I am ${i} strange loop.`);
    } else {
    array.push(`I am ${i} strange loops.`);
    }
  }
  return array
}

function whileLoop(number) {
  var countdown = number;
  while (countdown > 0) {
    console.log(--countdown);
  }
  return "done";
}

function doWhileLoop(array) {
  do {
    array.splice(0,1);
  } while (array.length > 0 && Math.random() >= 0.5);
  return array
}
