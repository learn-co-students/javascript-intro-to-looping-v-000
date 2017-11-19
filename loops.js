function forLoop(solution_array) {
  for (var i = 1; i <= 25; i++) {
    if (i === 1) {
      solution_array.push("I am 1 strange loop");
    } else {
      solution_array.push(`I am ${i} strange loops`);
    }
  }
  return solution_array
}

function whileLoop(number) {
  while (number > 0) {
    console.log(number);
    number -= 1;
  }
  return "done"
}

function maybeTrue() {
  return Math.random() >= 0.5;
}

function doWhileLoop(array) {
  do {
    array.shift();
  } while (maybeTrue() && array.length > 0);
  return array;
}
