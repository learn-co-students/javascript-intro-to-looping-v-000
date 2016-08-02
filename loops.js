function forLoop(arr){
	for(var i=0; i<25; i++){
		arr.push("I am ${i} strange loops.");
	}
	return arr;
}

function whileLoop(countdown){
	while (countdown > 0) {
  		console.log(--countdown)
	}
	return "done";
}

function doWhileLoop(arr){
  do {
  	arr.splice(0,1);
  } while (arr.length > 0 && maybeTrue());
  return arr;
}

function maybeTrue() {
  return Math.random() >= 0.5
}