//forLoop
//array parameter
//if i = 1, add "I am 1 strange loop." to the array
//if i > 1, add "I am ${i} strange loops."
//25 times
//return the array

function forLoop(array) {

  for (let i = 1; i < 26; i++){
    if(i===1) {
      array.push("I am 1 strange loop.");
    }
    else {
      array.push("I am ${i} strange loops.")
    }
  }
  return array;
}


//whileLoop
//number parameter
//countdown to 0
//return 'done'
function whileLoop(number) {
  while(number > 0) {
    console.log(number);
    --number;
  }
  return 'done';
}

//doWhileLoop
//array parameter
//use maybeTrue function
//remove elements from array until empty or returns false

function maybeTrue() {
  return Math.random() >= 0.5;
}

function doWhileLoop(array) {
  do {
    array.pop();
  }
  while (array.length > 0 && maybeTrue());
  return array;
}