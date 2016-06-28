function forLoop(array) {
  for (var i = 0; i < 25; i++){
  var string = `I am ${i} strange loop`;
  i == 1 ? array.push(string + '.') : array.push(string + 's') ;
  }
  return array
}

function whileLoop(number) {
  while (number > 0){
    console.log(--number);
  }
  return "done"
}

function maybeTrue() {
  return Math.random() >= 0.5
  }

function doWhileLoop(array) {
  do {
    array = array.pop;
  } while (maybeTrue() && array.length > 0)
  return array
}