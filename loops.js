function forLoop(array) {
  for (var i = 0; i < 25; i++) {
    if (i == 1) {
      var string = "I am 1 strange loop.";
      array.push(string);
    }
    else {
      var string = "I am " + i + " strange loops.";
      array.push(string);
    }
  }
  return array;
};

function whileLoop(number) {
  let countdown = number;

  while (countdown > 0) {
    console.log(--countdown);
  }
  return "done";
};

function doWhileLoop(array) {
  function maybeTrue() {
    return Math.random() >= 0.5
  }
  do {
    array.pop();
  }
  while (array.length > 0 && maybeTrue());
  return array;
};
