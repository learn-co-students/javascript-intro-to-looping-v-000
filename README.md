# JavaScript Loops

## Objectives
- Build a for loop
- Build a while loop
- Build a do-while loop
- Explain the purpose of a loop
- Explain the difference between each type of loop in JS

## About

Loops are used to execute the same block of code a specified number of times. JavaScript loops come in a few different flavors — namely, `for`, `while`, and `do-while`. We'll cover each of these kinds of loop below.

This is a code-along, so follow along with the instructions in each section. There are tests to make sure you're coding your solutions correctly.

## Prefatory Note

In order to get the tests to pass, you'll need to have Node.js of at least version 6.0.0 on your system. If you don't know what that means, head to [Installing Node](#installing-node) below.

## The `for` Loop

Of the loops in JavaScript, the `for` loop is the most common. The `for` loop is made up of four statements and has the following structure:

#### Syntax

```javascript
for ([initialization]; [condition]; [iteration]) {
  [loopBody]
}
```

- initialization
  - An expression (including assignment expressions) or variable declaration. Typically used to initialize a counter variable. This expression may optionally declare new variables with the var keyword
- Condition
  - An expression evaluated before each loop iteration. If this expression evaluates to true, statement is executed
- Iteration
  - A statement executed at the end of each iteration. Typically, this will involve incrementing or decrementing a counter and thus bringing the loop ever closer to its end
- loopBody
  - Code which runs on every iteration as long as condition evaluates to true

> Use `for` loop when you know how many times you want the loop to run (for example, when you have an array of known size)

#### Example

The code below will print the string "Hello World!" 99 times

```javascript
// i is set to equal to 1
// as long as i is less than 100 execute the code in the loopBody
// - which is print "Hello World"; increment i each time code in loopBody is executed

for (let i = 1; i < 100; i++) {
  console.log( "Hello World the " + i + " time" );
}

// The above prints:
// Hello World the 1 time
// Hello World the 2 time
// Hello World the 3 time
```

You'll encounter `for` loops again when you learn about iterating through object literals.

**TODO**: Build a function `forLoop`. It takes an array as an argument. Start counting from 0, and, using a `for` loop, add a string to the array. But not just any string. If you're `i` value is `1`, add the string `"I am 1 strange loop."`; but if your `i` value is anything else, add the string `"I am ${i} strange loops."` to the array 25 times. (Remember flow control with `if` and `else`? And how do we _interpolate_ `i`?) Then return the array.

**HINT**: Your `for` loop could look something like this:

``` javascript
for (let i = 0; i < 25; i++) {
  // ...
}
```

## The `while` Loop

The `while` loop similar to an if statement, except that its body will keep executing until the condition evaluates to false. Has the following structure:

#### Syntax

```javascript
while ([condition]) {
  [loopBody]
}
```

 A `while` loop is best used when we don't know how many times your loop needs to run - that is, your condition is dependent on a dynamic function/return value

#### Example

```javascript
function maybeTrue() {
  return Math.random() >= 0.5
}

// run until `maybeTrue()` returns `false`
// (so the body of the loop might _never_ run!)
while (maybeTrue()) {
  console.log("And I ran, I ran so far away!");
}
```

In this example, `maybeTrue()` returns `true` 50% of the time, and our loop runs until `maybeTrue()` returns `false`. We've used a `while` loop because we don't have any specific number to count up or down to in our loop — we just want it to run until the condition is no longer met.

But we can also use a `while` loop in place of a `for` loop — we just have to remember to change the condition on each pass so that the loop terminates (otherwise it will run forever).

``` javascript
let countdown = 100;

while (countdown > 0) {
  console.log(--countdown)
}
```

**TODO**: Create a function called `whileLoop` in `loops.js`. The function should take a number as an argument. Using a `while` loop, count down from the passed in number to 0. Then return the string `'done'`.

## The Do-While Loop

The `do-while` loop is almost exactly the same as the while loop, except for the fact that the loop's body is executed at least once before the condition is tested. Has the following structure:

#### Syntax

```javascript
do {
  [loopBody];
} while ([condition]);
```

You will rarely see `do-while` used since very few situations require a loop that blindly executes at least once. That being said, take a look at the example below:

#### Example

```javascript
function maybeTrue() {
  return Math.random() >= 0.5
}

do {
  console.log('doo-bee-doo-bee-doo')
} while (maybeTrue());
```

Remember how we couldn't be sure with the plain `while` loop above that the body would run using `maybeTrue()`? With `do`, we _can_ be sure that the body will run!

**TODO**: Define a function called `doWhileLoop` in `loops.js`. The function should take an array as an argument. Use the `maybeTrue()` function (you can copy it from this README) as the condition, and remove elements from the array until the array is empty or until `maybeTrue()` returns `false`. (Your condition might look something like `array.length > 0 && maybeTrue()`.) Finally, return the array.

## Conclusion

If seeing all of these new loops all at once is freaking you out, take a deep breath. Remember, 98% of the time you will want to use a `for` loop. A general heuristic for choosing which loop, is try a `for`. If using `for` doesn't serve your purposes, then go ahead and try a different loop. Also remember that you can always refer to documentation on these loops at any time. After some time coding in JavaScript, writing a `for` loop will come as naturally to you as writing an `each` loop to iterate over an array in Ruby.

## Resources

* [Codecademy - For Loop](http://www.codecademy.com/glossary/javascript/loops#for-loops)
* [MDN - For Loop](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for)
* [Codecademy - While Loop](http://www.codecademy.com/glossary/javascript/loops#while-loops)
* [MDN - While Loop](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while)
* [Codecademy - Do-While Loop](http://www.codecademy.com/glossary/javascript/loops#do-while-loops)
* [MDN - Do-While Loop](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/do...while)

## Installing Node

Node.js is JavaScript runtime that operates on the server. It's not important to know exactly what that means, but it's important to know why we're requiring it here. Even though we're learning about browser-based JavaScript, almost all of what we write can run _as written_ on the server. That means that Node.js gives us a way of, e.g., running tests without having to hack together some browser-based testing environment (which would be slow and error prone). Instead, we just pass our code to the Node.js runtime and our tests chug along (and print out handy errors to boot!).

If you're on OS X, you can install Node using Homebrew (`brew install node`).

If you're using Linux, use your package manager (`sudo apt-get node` or something like that.)

On Windows, you can install from source or use something like [Chocolatey](https://chocolatey.org/).

Then, once you have a base Node.js installed, you can use a version manager like [n](https://github.com/tj/n) or [nvm](https://github.com/creationix/nvm) (for [Windows](https://github.com/coreybutler/nvm-windows)) so that you can easily switch between multiple versions. (For this course, and most things you'll encounter afterwards, version 6 or higher will be all you'll need.)

<p data-visibility="hidden">View <a href="https://learn.co/lessons/intro-to-looping.js" title="JavaScript Loops">JavaScript Loops</a> on Learn.co and start learning to code for free.</p>
