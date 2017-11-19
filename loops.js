"use strict"; 

var forLoop = function(array) {
  for (let i = 0; i < 25; i++) {
    if (i == 1) {
      array.push("I am 1 strange loop.") 
    } else {
      var phrase = "I am " + i + "strange loops."; 
      array.push(phrase);  
    } 
  }
  return array; 
}

var whileLoop = function(number) {
  while (number > 0) {
    console.log(--number);  
  }
  return "done"; 
}

var doWhileLoop = function(array) {
  do {
    array.pop();   
  } while (array.length > 0 && maybeTrue()); 
  return array; 
}

function maybeTrue() {
  return Math.random() >= 0.5; 
}
