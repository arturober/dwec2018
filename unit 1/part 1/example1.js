'use strict';

/**
 * VARIABLES
 */

let v1 = "hello"; // Variable
const CONSTANT = 12; // Constant

console.log(v1); // prints "hello"
console.log(typeof v1); // prints "string"
v1 = 23;
console.log(typeof v1); // prints "number"

let v2;
console.log(v2); // prints undefined
console.log(typeof v2); // prints undefined
let v3 = null;
console.log(typeof v3); // prints "object"

// v4 = 12; -> Uncaught ReferenceError: v4 is not defined
// console.log(v4);


