function forLoop(arrayIn) {

  for (let i = 0; i < 25; i++ ){
    if (i === 0)
      arrayIn.push("I am 1 strange loop.")
      else {
        arrayIn.push("I am ${i} strange loops")
      }
  }
  return arrayIn;
}

function whileLoop(num) {
  while (num > 0) {
    console.log(--num);
  }
  return "done";
}

function doWhileLoop(array) {
  function maybeTrue() {
    return Math.random() >= 0.5;
  }

  do {
    array = array.slice(1)
  } while (array.length > 0 && maybeTrue())
  return array;
}
