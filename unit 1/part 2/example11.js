'use strict';

/**
 * REGULAR EXPRESSIONS
 */

let r1 = new RegExp('^\d{9}$');
let r2 = /^\d{9}$/;

console.log(r2.test('3456iu5wer')); // false
console.log(r2.test('3456')); // false
console.log(r2.test('958435234')); // true
console.log(r2.test('95843523456745676')); // false
