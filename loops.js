function forLoop(array) {
	for (let i = 0; i < 25; i++) {
		if (i == 1) {
			array.push(" I am 1 strange loop.")
		} else {
  		array.push(" I am " + (i + 1) + " strange loops.")
	  }
	}
	return array
}

function whileLoop(num) {
	while(num >= 1) {
		console.log(num)
		--num
	}
	return 'done'
}

function doWhileLoop(array) {
	do {
  	array = array.pop
	} while (maybeTrue());

	return array
}

function maybeTrue() {
  return Math.random() >= 0.5
}
