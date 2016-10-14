
function forLoop(array) {
  var i, len = 25 + array.length ;
  for (i = 0; i < len; i++) {
    array[i] = (i <= 1) ? `I am ${i} strange loop.` : `I am ${i} strange loops.`;
 }
 return array;
}

function whileLoop(n) {
  while(n > 0){
    console.log(n--);

  }
  return "done";

}



function doWhileLoop(array) {
  var len = array.length;
  do {
    array.pop();
    len--;
  } while(len > 0);

  return array;
}
