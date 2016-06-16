function forLoop(array){
  for(var i = 0; i < 25; i++){
    if(i === 1){
      // console.log(i);
      debugger;
      array.push(`I am ${i} strange loop.`)
    } else {
      array.push(`I am ${i} strange loops.`)
    }
  }
}
