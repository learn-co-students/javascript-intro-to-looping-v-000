function forLoop(someArr) {
  for (let i = 0; i < 25; i++) {
    // if (i === 1) {
    //   someArr.push("I am 1 strange loop.");
    // } else {
    //   someArr.push(`I am ${i} strange loops.`);
    // }

    // Scratching that after seeing the test error. This is more elegant:
    someArr.push(`I am ${i} strange loop${i === 1 ? "" : "s"}.`)
  }
  return someArr;
}

function whileLoop(num) {
  while (num > 0) {
    console.log(--num);
  }
  return "done";
}

function maybeTrue() {
  return Math.random() >= 0.5;
}

function doWhileLoop(someArr) {
  do {
    someArr.pop();
  } while (someArr.length > 0 && maybeTrue());
  return someArr;
}
