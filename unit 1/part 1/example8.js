'use strict';

/**
 * ARRAYS
 */

let a = [12, 23, 43, 6, 18, 24, 9];
let odd = a.filter(num => num % 2);
console.log(odd); // [23, 43, 9]

let a2 = a.map(num => num * 2);
console.log(a2); // [24, 46, 86, 12, 36, 48, 18]
