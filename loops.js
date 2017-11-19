function forLoop(array) {
  for(let i=0; i<25; i++) {
    if(i == 1) {
      var currString = "I am 1 strange loop.";
      array.push(currString);
    } else {
      var currString = "I am " + i + " strange loops.";
      array.push(currString);
    }
  }

  return array;
}

function whileLoop(n) {
  while(n > 0) {
    console.log(n);
    n -= 1;
  }
  return "done";
}

function maybeTrue() {
  return Math.random() >= 0.5;
}


function doWhileLoop(array) {
  do {
    array.splice(0, 1);
  } while(maybeTrue() || array.size > 0);
  return array;
}
