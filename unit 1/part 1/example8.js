'use strict';

/**
 * ARRAYS
 */

let a1 = new Array(); // empty array
console.log(a1[2]); // undefined
a1[3] = "Hello";
console.log(a1.length); // 4

let a2 = new Array(10); // Array with 10 reserved positions
console.log(a2.length); // 10
console.log(a2[0]); // undefined

let a3 = new Array(4, 12, 19, 23, 88, 99);
console.log(a3.length); // 6
a3.length = 3;
console.log(a3); // [4, 12, 19]

let a4 = [10];
console.log(a4.length); // 1

console.log("*** Normal for ***");
let a5 = [12, 23, 43, 6, 18, 24, 9];
for(let i = 0; i < a5.length; i++) {
    console.log(`Pos ${i}: ${a5[i]}`);
}

console.log("*** For..in ***");
for(let i in a5) { // for equivalent
    console.log(`Pos ${i}: ${a5[i]}`);
}

console.log("*** ForEach ***");
a5.forEach(item => console.log(item));

console.log("*** For..of ***");
for(let item of a5) { // forEach equivalent
    console.log(item);
}

console.log("*** String iteration for..of");
let s1 = "Hello World";
for(let char of s1) {
    console.log(char);
}
console.log("*** String iteration for..each");
Array.from(s1).forEach(char => console.log(char));

let odd = a5.filter(num => num % 2 === 1);
console.log(odd); // [23, 43, 9]

let amult2 = a5.map(num => num * 2);
console.log(amult2); // [24, 46, 86, 12, 36, 48, 18]

let array = ["a", "b"];
array.unshift("Z"); 
console.log(array); // ["Z", "a", "b"]
array.push("c"); 
console.log(array); // ["Z", "a", "b", "c"]
console.log(array.pop()); // "c"
console.log(array); // ["Z", "a", "b"]
console.log(array.shift()); // "Z"
console.log(array); // ["a", "b"]

array.splice(1, 0, "a1", "a2");
console.log(array); // ["a", "a1", "a2", "b"]
array.splice(2, 1);
console.log(array); // ["a", "a1", "b"]
array.splice(1, 2, "c", "d", "e");
console.log(array); // ["a", "c", "d", "e"]

console.log(array.toLocaleString()); // a,c,d,e
console.log(array.join(" -*- ")); // a -*- c -*- d -*- e

console.log(array.slice(1, 3)); // ["c", "d"]

let a6 = [24, 129, 8, 42, 0, 5];
a6.sort((n1, n2) => n1 - n2);
console.log(a6); // [0, 5, 8, 24, 42, 129]
