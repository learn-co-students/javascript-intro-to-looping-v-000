function forLoop(array) {
  for(let i = 0; i<25; i++){
    array.push(`I am ${i} strange loop${i === 0 ? '' : 's'}.`)
  }
  return array
}

function whileLoop(n) {
  while (n >=0, n--){
    console.log(n)
  }
  return "done"
}

function maybeTrue() {
  return Math.random() >= 0.5
}

function doWhileLoop(array) {
  do { array.splice(0,1)
  }while(array.length >= 0 && maybeTrue === true)
  return array
}



