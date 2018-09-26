'use strict';

/**
 * REGULAR EXPRESSIONS
 */

let r1 = new RegExp('^\d{9}$');
let r2 = /^\d{9}$/; // 9 digits (numbers 0-9)

console.log(r2.test('3456iu5wer')); // false
console.log(r2.test('3456')); // false
console.log(r2.test('958435234')); // true
console.log(r2.test('95843523456745676')); // false

let cad1 = "12-23-34-54-65";
let reg1 = /\d{2}/g;
let match;
console.log('String: ' + cad1);
while((match = reg1.exec(cad1)) != null) {
    console.log(`Match ${match[0]} at position ${match.index}`);
}

console.log(cad1.match(reg1)); // ["12", "23", "34", "54", "65"]
console.log(cad1.replace(reg1, '00'));
console.log(cad1.replace(reg1, m => {
    return m * 2;
}));
