function forLoop(result){
  for(var i = 0; i < 25; i++){
    result.push(`I am ${i} strange loop${i === 0 ? '' : 's'}.`);
  }
  return result;
}


function whileLoop(n){
  while(n > 0){
    console.log(n);
    n--;
  }
  return 'done';
}

function maybeTrue() {
  return Math.random() >= 0.5
}

function doWhileLoop(array){
  do{
    array.length -=1;
  }while(maybeTrue()&&array.length>0);
  return array;
}
