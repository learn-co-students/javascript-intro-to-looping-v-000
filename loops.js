
var array = [];
function forLoop(array){
  for (i = 0; i < 25; i++) {
    if (i == 1){
      array.push("I am a strange loop");

}
    else {
      array.push(`"I am ${i} strange loops"`);

    }

}
return array;
}
function whileLoop(n){
  var n;
  let countdown = n;

  while(countdown>=0){
    if(countdown>0){
    console.log(--countdown)
  }//ends if
  else {return "done"}//ends else
    }//ends while loop
}//ends function

function doWhileLoop(array){
  var array = [];
  function maybeTrue() {
    return Math.random() >= 0.5
  }//ends maybeTrue function

do {array.pop()}//end do
while (array.length > 0 && maybeTrue());
return array;
  }//ends function
  doWhileLoop(array);
