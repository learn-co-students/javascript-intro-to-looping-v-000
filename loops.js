"use strict";

var candyBars = ["snickers", "hundred grand", "kitkat", "skittles"]
var evenStrings = ["2","4","6","8","10","12","14","16","18"]
var evenNums = [2,4,6,8,10,12,14,16,18,20]
var oddNums = [1,3,5,7,9,11,13,15,17,19,21]
var oddStrings = ["1","3","5","7","9","11","13","15","17","19","21"]
var fruits = ["apple", "pear", "grape"]
var asdf = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
var gifts = ['teddy bear', 'drone', 'doll']

const app = "I don't do much."
var meals = {breakfast: "eggs", lunch: "ham", dinner: "salad"}
var mix = ["asdf", 1, "cat", 2, "zxcv", 23, 4.22, true]

function forLoop(ary) {
  for (var i = 0; i < 25; i += 1) {
    if (i === 1) {
      ary.push("I am 1 strange loop.");
    } else {
      ary.push(`I am ${i} strange loops.`);
    }
  }
  return ary;
}

function whileLoop(num) {
  let countdown = num;
  if (countdown !== 0) {
    while (countdown > 0) {
      console.log(--countdown);
    }
    return "done";
  }
}

function wrapAllItems(items){
  for (var i=0; i < items.length; i++) {
    console.log("We wrapped a " + items[i] + "!")
  }
}

function maybeTrue() {
  return Math.random() >= 0.5
  }

function doWhileLoop(array) {
  function maybeTrue() {
    return Math.random() >= 0.5
  }

  do {
    array = array.slice(1)
  } while (array.length > 0 && maybeTrue())

  return array
}
