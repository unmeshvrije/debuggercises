# Debuggercises 

## /exercises/functions/0-examples 

> 6/11/2020, 5:16:13 PM 

[../REVIEW.md](../REVIEW.md)

- [/1-commenting-functions.js](#1-commenting-functionsjs)  
- [/2-enforcing-types.js](#2-enforcing-typesjs)  
- [/3-test-cases.js](#3-test-casesjs) - _pass_ 
- [/4-behavior-vs-implementation.js](#4-behavior-vs-implementationjs) - _pass_ 

---

## /1-commenting-functions.js 

>  
>
> [review source](./1-commenting-functions.js)

```js
/* there is a conventional way to describe your functions with a comment

  to understand a function you need to know the key parts of a function
  1. BEHAVIOR: what does the function do? what is it used for?
  2. PARAMETERS: what type should they be? what are they called? how are they used?
  3. RETURN VALUE: what type will it be?

  VSCode has built-in support for writing these comments
  - https://code.visualstudio.com/Docs/languages/javascript#_jsdoc-support

  these are just comments! like this comment you're reading now
    the JS interpreter will ignore them completely
    they exist to help us humans
*/


/**
 * returns the type of any JS value
 * @param {any} value - the value to check
 * @returns {string} - the type of the parameter
 */
function findTheType(value) {
  return typeof value;
}

/**
 * adds two numbers together
 * @param {number} x
 * @param {number} y
 * @returns {number} the sum of x and y
 */
function add(x, y) {
  return x + y
}

/**
 * compares the type and value of two parameters
 * @param {any} a
 * @param {any} b
 * @returns {boolean} result of the comparison
 */
function strictEqual(a, b) {
  return a === b;
}

/**
 * returns a new string with all of the letters reversed
 * @param {string} str - the string to be reversed
 * @returns {string} a new string, the parameter backwards
 */
function reverseString(str) {
  return str.split('').reverse().join('');
}

```

[TOP](#debuggercises)

---

## /2-enforcing-types.js 

>  
>
> [review source](./2-enforcing-types.js)

```js
/* comments are only helpful if they actually describe your code!

  making sure the parameters and return values match the description is important
  at first this will feel like extra work and you will make mistakes
  but soon you will find it helps with understanding your code and with debugging
  catching mistakes before they happen is always the best way to go!

  being careful about types is so important that many languages check them automatically
  JavaScript doesn't, so you'll have to learn discipline and good practices
  eventually you will encounter tools like TypeScript that check types for you
  for now you're on your own :)

  In later modules you won't be asked to write type checks for all of your functions
  this is just for exercises in the Debugging module to help you build good habits
*/


/**
 * returns the type of any JS value
 * @param {any} value - the value to check
 * @returns {string} - the type of the parameter
 */
function findTheType(value) {
  // no need to check value because it can be any type

  const result = typeof value;

  if (typeof result !== 'string') { throw new TypeError(); }
  return result;
}

/**
 * adds two numbers together
 * @param {number} x
 * @param {number} y
 * @returns {number} the sum of x and y
 */
function add(x, y) {
  if (typeof x !== 'number') { throw new TypeError(); }
  if (typeof y !== 'number') { throw new TypeError(); }

  const result = x + y;

  if (typeof result !== 'number') { throw new TypeError(); }
  return result;
}

/**
 * compares the type and value of two parameters
 * @param {any} a
 * @param {any} b
 * @returns {boolean} result of the comparison
 */
function strictEqual(a, b) {
  // no need to check a or b, they can be any type

  const result = a === b;

  if (typeof result !== 'boolean') { throw new TypeError(); }
  return result;
}

/**
 * returns a new string with all of the letters reversed
 * @param {string} str - the string to be reversed
 * @returns {string} a new string, the parameter backwards
 */
function reverseString(str) {
  if (typeof str !== 'string') { throw new TypeError(); }

  const result = str.split('').reverse().join('');

  if (typeof result !== 'string') { throw new TypeError(); }
  return result;
}

```

[TOP](#debuggercises)

---

## /3-test-cases.js 

> pass 
>
> [review source](./3-test-cases.js)

```txt
+ PASS: Test 1
+ PASS: Test 2
+ PASS: Test 3
+ PASS: Test 4
+ PASS: Test 5
```

```js
/* test cases are how developers understand and debug their code

  you will learn more about different testing tools and strategies in the next module
  for now, the goal is to practice using simple test cases to explore and describe functions

  A test case has 3 main parts:
    (they won't always be written the same way, but they'll always be there)
  1. argument(s)
    - the values you will pass to the function
  1. an expected value
    - what the function SHOULD return if it is working correctly
  2. an actual value
    - what the function DID return
  3. a description
    - in these exercises it will be Test x, just enough to help you debug your code
    - later on, the description will be a full sentence that describes what the test checks

  By failing test cases you learn to understand what your code actually did
  By writing test cases you learn to predict and describe your function's behavior
  The magic happens when these two come together
*/

// the rest of this file is an example of passing test cases
// this isn't how you will write tests professionally, but it's good for learning

/**
 * returns the type of any JS value
 * @param {any} value - the value to check
 * @returns {string} - the type of the parameter
 */
function findTheType(value) {
  // no need to check value because it can be any type

  const result = typeof value;

  if (typeof result !== 'string') { throw new TypeError(); }
  return result;
}

const _1_arg = true;
const _1_expect = 'boolean';
const _1_actual = findTheType(_1_arg);
console.assert(_1_actual === _1_expect, 'Test 1');

const _2_arg = null;
const _2_expect = 'object';
const _2_actual = findTheType(_2_arg);
console.assert(_2_actual === _2_expect, 'Test 2');

const _3_arg = undefined;
const _3_expect = 'undefined';
const _3_actual = findTheType(_3_arg);
console.assert(_3_actual === _3_expect, 'Test 3');

const _4_arg = 'hello!';
const _4_expect = 'string';
const _4_actual = findTheType(_4_arg);
console.assert(_4_actual === _4_expect, 'Test 4');

const _5_arg = 14;
const _5_expect = 'number';
const _5_actual = findTheType(_5_arg);
console.assert(_5_actual === _5_expect, 'Test 5');

```

[TOP](#debuggercises)

---

## /4-behavior-vs-implementation.js 

> pass 
>
> [review source](./4-behavior-vs-implementation.js)

```txt
+ PASS: Test 1 Array
+ PASS: Test 1 Loop
+ PASS: Test 2 Array
+ PASS: Test 2 Loop
+ PASS: Test 3 Array
+ PASS: Test 3 Loop
```

```js
/* BEHAVIOR vs. IMPLEMENTATION:

  BEHAVIOR: this is what your function DOES
    - behavior does not care about what's inside your function body
    - all that matters to behavior is what goes in and what goes
    - the comments you learned to write in part 1 describe behavior only
    - testing is all about describing and verifying the behavior of your function

  IMPLEMENTATION: this is HOW your function does what it does
    - implementation is all about the lines of code in your function body
    - what language features did you use?
    - how does the data change step by step inside your function?
    - your comments comments should not mention the implementation
    - debugging is all about understanding and fixing the implementation of your code

  Two functions can have the same behavior (tests), and different implementation (source code)

  Check it out:
*/

/**
 * returns a new string with all of the letters reversed
 * @param {string} str - the string to be reversed
 * @returns {string} a new string, the parameter backwards
 */
function reverseStringArray(str) {
  if (typeof str !== 'string') { throw new TypeError(); }

  const result = str.split('').reverse().join('');

  if (typeof result !== 'string') { throw new TypeError(); }
  return result;
}

/**
 * returns a new string with all of the letters reversed
 * @param {string} str - the string to be reversed
 * @returns {string} a new string, the parameter backwards
 */
function reverseStringLoop(str) {
  if (typeof str !== 'string') { throw new TypeError(); }

  let result = '';
  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }

  if (typeof result !== 'string') { throw new TypeError(); }
  return result;
}


const _1_arg = 'abcde';
const _1_expect = 'edcba';
const _1_actualArray = reverseStringArray(_1_arg);
const _1_actualLoop = reverseStringLoop(_1_arg);
console.assert(_1_actualArray === _1_expect, 'Test 1 Array');
console.assert(_1_actualLoop === _1_expect, 'Test 1 Loop');

const _2_arg = 'racecar';
const _2_expect = 'racecar';
const _2_actualArray = reverseStringArray(_2_arg);
const _2_actualLoop = reverseStringLoop(_2_arg);
console.assert(_2_actualArray === _2_expect, 'Test 2 Array');
console.assert(_2_actualLoop === _2_expect, 'Test 2 Loop');

const _3_arg = '-<=>-';
const _3_expect = '->=<-';
const _3_actualArray = reverseStringArray(_3_arg);
const _3_actualLoop = reverseStringLoop(_3_arg);
console.assert(_3_actualArray === _3_expect, 'Test 3 Array');
console.assert(_3_actualLoop === _3_expect, 'Test 3 Loop');



```

[TOP](#debuggercises)

