function forLoop(array) {
	for (let i = 0; i < 25; i++) {
		if (i == 1) {
			array[i] = " I am 1 strange loop."
		} else {
  		array[i] = " I am " + (i + 1) + " strange loops."
	  }
	}
	return array
}

function whileLoop(num) {
	while(num >= 0) {
		console.log(num)
		--num
	}
	console.log('done')
}

function doWhileLoop() {

}
