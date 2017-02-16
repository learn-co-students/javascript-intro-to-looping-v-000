"use strict";
function forLoop(ary) {
    var i = 0;
    for (i = 0; i < 25; i += 1) {
        if (i === 1) {
            ary.push("I am 1 strange loop.");
        } else {
            ary.push("I am ${i} strange loops.");
        }
    }
    return ary;
}

function whileLoop(num) {
  let countdown = num;
  if (countdown !== 0) {
    while (countdown > 0) {
    console.log(--countdown);
    } return "done";
  } else {
    return "done";
  }
}

 
function doWhileLoop(ary) {
    var asdf = function maybeTrue(blurf) {
        blurf.length === 0;
    };
    do {
        ary.splice(-1, 1);
    } while (ary.length > 0 && asdf);
    return ary;
}