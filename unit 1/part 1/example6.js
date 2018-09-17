'use strict';

/**
 * Conversion between data types
 */

let n1 = 12;
let n2 = 8;
console.log(n1 + n2); // 20
console.log(String(n1) + n2); // "128"
console.log("" + n1 + n2); // "128"

function toString(cad) {
    let cad2 = "" + cad;
}

let c1 = '23';
let c2 = '11';

console.log(Number(c1) + Number(c2)); // 34
console.log(+c1 + +c2); // 34

console.log(Boolean("hello")); // true
console.log(Boolean("")); // false
console.log(!!"hello"); // true
