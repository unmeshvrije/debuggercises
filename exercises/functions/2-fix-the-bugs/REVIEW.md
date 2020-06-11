# Live Study 

## /exercises/functions/2-fix-the-bugs 

> 6/11/2020, 4:44:07 PM 

[../REVIEW.md](../REVIEW.md)

- [/1-conditional.js](#1-conditionaljs) - _fail_ 
- [/2-while-loop.js](#2-while-loopjs) - _fail_ 
- [/3-for-loop.js](#3-for-loopjs) - _fail_ 

---

## /1-conditional.js 

> fail 
>
> [review source](./1-conditional.js)

```txt
- FAIL: Test 1
- FAIL: Test 2
- FAIL: Test 3
- FAIL: Test 4
- FAIL: Test 5
- FAIL: Test 6
```

```js
// fix the mistakes in this conditional
//  all of the bugs are in the conditional statement
//  there are no mistakes in the type checks, comment, or tests

/**
 * returns the longer of two strings.
 * if both are of equal length it combines the strings
 * @param {string} str1
 * @param {string} str2
 * @returns {string}
 */
function longestOrBoth(str1, str2) {
  if (typeof str1 !== 'string') { throw new TypeError(); }
  if (typeof str2 !== 'string') { throw new TypeError(); }

  let result = '';
  if (str1.Length >= str2.Length) {
    result === str1;
  } if (str1.Length <= str2.Length) {
    result === str2;
  } else {
    result === `${str1}${str2}`;
  }

  if (typeof result !== 'string') { throw new TypeError(); }
  return result;
}


// all of the tests are correct, there are not bugs below here!

const _1_expect = 'car boat';
const _1_actual = longestOrBoth('carboat', 'car boat');
console.assert(_1_actual === _1_expect, 'Test 1');

const _2_expect = 'waterfall';
const _2_actual = longestOrBoth('water', 'waterfall');
console.assert(_2_actual === _2_expect, 'Test 2');

const _3_expect = 'water fall';
const _3_actual = longestOrBoth('water fall', 'waterfall');
console.assert(_3_actual === _3_expect, 'Test 3');

const _4_expect = 'birch';
const _4_actual = longestOrBoth('birch', 'oak');
console.assert(_4_actual === _4_expect, 'Test 4');

const _5_expect = 'aspenbirch';
const _5_actual = longestOrBoth('aspen', 'birch');
console.assert(_5_actual === _5_expect, 'Test 5');

const _6_expect = 'hi!bye';
const _6_actual = longestOrBoth('hi!', 'bye');
console.assert(_6_actual === _6_expect, 'Test 6');

```

[TOP](#live-study)

---

## /2-while-loop.js 

> fail 
>
> [review source](./2-while-loop.js)

```txt
- FAIL: Test 1
- FAIL: Test 2
- FAIL: Test 3
- FAIL: Test 4
- FAIL: Test 5
- FAIL: Test 6
```

```js
// fix the mistakes in this conditional
//  all of the bugs are in the while loop
//  there are no mistakes in the type checks, comment, or tests

/**
 * returns a new string with all of the letters reversed
 * @param {string} str - the string to be reversed
 * @returns {string} a new string, the parameter backwards
 */
function reverseString(str) {
  if (typeof str !== 'string') { throw new TypeError(); }

  let result = '';
  let i = str;
  while (i >= 0) {
    result += result + str[i];
    i--;
  }

  if (typeof result !== 'string') { throw new TypeError(); }
  return result;
}


// all of the tests are correct, there are not bugs below here!

const _1_expect = 'taob rac';
const _1_actual = reverseString('car boat');
console.assert(_1_actual === _1_expect, 'Test 1');

const _2_expect = '';
const _2_actual = reverseString('');
console.assert(_2_actual === _2_expect, 'Test 2');

const _3_expect = '    ';
const _3_actual = reverseString('    ');
console.assert(_3_actual === _3_expect, 'Test 3');

const _4_expect = 'racecar';
const _4_actual = reverseString('racecar');
console.assert(_4_actual === _4_expect, 'Test 4');

const _5_expect = '}*--!--*{';
const _5_actual = reverseString('{*--!--*}');
console.assert(_5_actual === _5_expect, 'Test 5');

const _6_expect = 'qwertyuiop';
const _6_actual = reverseString('poiuytrewq');
console.assert(_6_actual === _6_expect, 'Test 6');

```

[TOP](#live-study)

---

## /3-for-loop.js 

> fail 
>
> [review source](./3-for-loop.js)

```txt
- FAIL: Test 1
+ PASS: Test 2
- FAIL: Test 3
- FAIL: Test 4
- FAIL: Test 5
- FAIL: Test 6
```

```js
// fix the mistakes in this conditional
//  all of the bugs are in the for loop
//  there are no mistakes in the type checks, comment, or tests

/**
 * returns a new string with all of the letters reversed
 * @param {string} str - the string to be reversed
 * @returns {string} a new string, the parameter backwards
 */
function reverseString(str) {
  if (typeof str !== 'string') { throw new TypeError(); }

  let result = '';
  for (let i = str.length; i > 0; i--) {
    result + str[i];
  }

  if (typeof result !== 'string') { throw new TypeError(); }
  return result;
}


// all of the tests are correct, there are not bugs below here!

const _1_expect = 'taob rac';
const _1_actual = reverseString('car boat');
console.assert(_1_actual === _1_expect, 'Test 1');

const _2_expect = '';
const _2_actual = reverseString('');
console.assert(_2_actual === _2_expect, 'Test 2');

const _3_expect = '    ';
const _3_actual = reverseString('    ');
console.assert(_3_actual === _3_expect, 'Test 3');

const _4_expect = 'racecar';
const _4_actual = reverseString('racecar');
console.assert(_4_actual === _4_expect, 'Test 4');

const _5_expect = '}*--!--*{';
const _5_actual = reverseString('{*--!--*}');
console.assert(_5_actual === _5_expect, 'Test 5');

const _6_expect = 'qwertyuiop';
const _6_actual = reverseString('poiuytrewq');
console.assert(_6_actual === _6_expect, 'Test 6');

```

[TOP](#live-study)

