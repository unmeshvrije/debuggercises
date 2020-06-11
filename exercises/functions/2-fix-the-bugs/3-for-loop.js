// fix the mistakes in this loop
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
