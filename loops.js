function forLoop (array) {
  for (let i = 0 ; i < 25; i++) {
        if (i === 1) {
        console.log ("I am a strange loop.");
        } else {
        console.log ("I am" +i+ "strange loops.");
        }
        array.push( "I am" +i+ "strange loops.")
  }
  return array
}

function whileLoop (n){
  let countdown = n;
while (countdown > 0 ) {
console.log (countdown--)
}
return 'done';
}

function doWhileLoop (array) {
  function maybeTrue () {
  return Math.random () >= 0.5
}
do {array.pop ()
} while (array.length > 0 && maybeTrue ());
return array
 }
