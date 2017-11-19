
function forLoop(arr) {
  for ( i = 0; i < 25; i++) {
    if (i != 1) {
      arr.push("I am " + i + " strange loops.");
    } else {
      arr.push("I am " + i + " strange loop.");
    }
  }
return arr;
}

function whileLoop(num) {
  while (num > 0) {
    console.log(num);
    num--;
  }
  return "done";
}

function maybeTrue() {
  return Math.random() >= 0.5
}

function doWhileLoop(arr) {
  do {
    arr.splice(0,1);
  } while (maybeTrue() && arr.length > 0);
  return arr;
}
