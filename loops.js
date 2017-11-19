'use strict';

function forLoop(arr){
  for(var i = 0; i<25;i++){
    //arr.push(`I am`+ i + `strange loop` + (i === 0 ? `` : `s`)+`.`);
    if(i===1){
      arr.push("I am 1 strange loop.");
    }
    else{
      arr.push(`I am ${i} strange loops.`);
    }
  }

  return arr;
};

function whileLoop(n){
  while(n>0){
    console.log(--n)
  }
  return "done"
};


function maybeTrue() {
  return Math.random() >= 0.5
};

function doWhileLoop(arr){
  do{
     arr = arr.slice(0,1);
  } while (arr.length>0 && maybeTrue());
  return arr;
};
