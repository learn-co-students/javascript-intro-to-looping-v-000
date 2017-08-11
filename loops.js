function forLoop(array) {
  for (let i = 0; i < 25; i++) {
    if (i === 1) {
      array.push("I am 1 strange loop.")
    } else {
      array.push(`I am ${i} strange loop.`)
    }
  }
  return array;
}

function whileLoop(n) {
  while (n > 0){
    console.log(--n)
  }
  return 'done';
}

/*escribe('whileLoop(n)', () => {
  it('counts down from n to 0', () => {
    const spy = chai.spy.on(console, 'log')
    const n = Math.floor(Math.random() * 100)

    expect(whileLoop(n)).to.equal('done')
    expect(spy).to.have.been.called.exactly(n)

    console.log.reset()
  })
})*/

function doWhileLoop(array) {
  function maybeTrue() {
    return Math.random() >= 0.5
  }
  do {
    array.splice(0,1)
    console.log('array is empty')
  } while(array.length > 0 && maybeTrue());
  return array;
}
