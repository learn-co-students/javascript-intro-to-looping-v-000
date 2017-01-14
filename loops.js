
function forLoop(array){
  for (let i = 0; i < 25; i++) {
    if (i === 1) {
      array.push("I am 1 strange loop.")
    } else {
      array.push(`I am ${i} strange loops.`)
    }
  }
  
  return array
}


function whileLoop(number){
  while (number >= 0 ) {
    console.log(number)
    number -= 1 
  };

  return 'done'
}

// lesson answer
// function whileLoop(n) {
//   while (n > 0) {
//     console.log(--n)
//   }

//   return 'done'
// }

function doWhileLoop(array) {
  function maybeTrue() {
    return Math.random() >= 0.5
  }

  do {
    array = array.slice(1)
  } while (array.length > 0 && maybeTrue())

  return array
}

// console.log(doWhileLoop([1,2,3,4,5,6,7,3,1,7,8]))