function forLoop(array) {
  for (let i = 0; i < 25; i++) {
    array.push("I am ${i} strange loops.");
  };
  return array
};

function whileLoop(number) {
  while (number > 0) {
    console.log(--number);
  }
  return "done"
};

function doWhileLoop(array) {
  do {
    array.splice(0,1)
  } while (array.length > 0 && maybeTrue());
  return array
};
