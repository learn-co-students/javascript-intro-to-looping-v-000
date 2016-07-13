"use strict";



  function forLoop(array) {
    for (i = 1; i < array.length; i++) {
      if (i === 1) {
        array.push("I am 1 stange loop.");

      }
      else {
        array.push("I am " + i + " strange loop.");
      }
    };
    return array; 
    }