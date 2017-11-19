function forLoop(array) {
  for(let i = 0; i < 25; i++){

    var ans = `I am ${i} strange loop`

    if (i === 1) {
    array.push(ans + '.');
    }

    else {
    array.push(ans + 's.');
    }
  }
  return array
}

function whileLoop(n) {
  while(n != 0){
    console.log(--n)
  }
  return 'done'
}

function doWhileLoop(array) {
  do {
    array.shift();
  }
   while (array.length > 0 && maybeTrue());
  return array
}

function maybeTrue() {
  return Math.random() >= 0.5
}
