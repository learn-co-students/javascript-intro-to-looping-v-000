var strangeArray = [];

function forLoop(strangeArray){
    for (var i=0; i<25; i++){
      if(i===1){
        strangeArray.push("I am 1 stange loop.")
      }
      else{ strangeArray.push("I am ${i} stange loops.")};
    }
  return strangeArray;
}

function whileLoop(arg){
let countdown = arg;
  while(countdown >0){
    console.log(--countdown);
    if(countdown===0){
      return "done";
    }
  }
}

function doWhileLoop(array){
  do{
    array.pop();
  }while (array.length>0 && maybeTrue());
  return array;
}

function maybeTrue() {
  return Math.random() >= 0.5 // Returns a random number between 0 (inclusive) and 1 (exclusive)
}
