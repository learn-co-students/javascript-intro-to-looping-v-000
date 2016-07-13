



  function forLoop(array) {
    for (var i = 1; i < 26; i++) {
      if (i === 1) {
        array.push("I am 1 stange loop.");

      }
      else {
        array.push("I am " + i + " strange loop.");
      }
    };
    return array; 
    }

function whileLoop(number) {
  countdown = number;
  while (countdown > 0) {
    console.log(--countdown);
  };
  return "done";
}

function maybeTrue() {
  return Math.random() >= 0.5;
}

function doWhileLoop(array) {
  do {array.shift();
  }
  while (array.length > 0 && maybeTrue())
  return array;
}