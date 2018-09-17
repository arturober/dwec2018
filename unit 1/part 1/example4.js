'use strict';

/**
 * NUMBERS
 */

console.log(typeof 43); // number
console.log(typeof 43.34); // number

let num = 3.2e-3; // 3.2*(10^-3)
console.log(num); // Prints 0.0032
console.log(num.toExponential()); // Prints 0.0032

console.log(1.4586435635.toFixed(2)); // 1.46

console.log(Number.MIN_VALUE);
console.log(Number.MAX_VALUE);

console.log(Number.MAX_VALUE*2); // Infinity

if(Number.isFinite(23e234*34e300)) {
    console.log("Finite!");
} else {
    console.log("Infinity!");
}

let res = 23 * "hello";
console.log(Number.isNaN(res)); // true

let numCad = "13";
console.log(23 + numCad); // "2313"


