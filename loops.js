function forLoop(array) {
  
  
  for(let i = 0; i < 25; i++) {
    if (i === 1) {
    array.push(`I am 1 strange loop.`);
    }
  else {
    array.push(`I am ${i} strange loop${i === 0 ? '' : 's'}.`);
    }
  }
  
  return array;
};

function whileLoop(number) {

while(number > 0) {
  console.log(number);
  number--;
}
  return(`done`);
}

function doWhileLoop(array) {

function maybeTrue() {
  return Math.random() >= 0.5
}

do {
  array.splice(0, 1);
} while (maybeTrue() && array.length > 0);

  return array;
}
  