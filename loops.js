function forLoop(arr){
  for (i=0; i<25; i++){
    if (i === 1){
      arr.push("I am 1 strange loop.");
    } else {
      arr.push("I am " + i + " strange loops.");
    }
  }
  return arr;
};

function whileLoop(numb){
  while (numb > 0){
    numb--
    console.log (numb);
  }
  return 'done';
};

function maybeTrue() {
  return Math.random() >= 0.5
};

function doWhileLoop(arr){
  do {
    arr.splice(0,1)
  } while (arr.length > 0 && maybeTrue());
  return arr
};
