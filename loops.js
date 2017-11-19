function forLoop(arr){
  for( var i= 0; i< 25; i++){
    if(i === 1){
      arr.push("I am 1 strange loop.")
    }
    else {
      arr.push("I am ${i} strange loops.")
    }
  }
  return arr
}

function whileLoop(number){
  while(number > 0){
    console.log(--number)
  }
  return "done"
}

function doWhileLoop(arr){
  function maybeTrue() {
  return Math.random() >= 0.5
}

do {
  array= arr.slice(1)
} while (arr.length > 0 && maybeTrue());

return array

}
