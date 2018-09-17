'use strict';

/**
 * OPERATORS
 */

console.log(4 + 6); // Prints 10
console.log("Hello " + "world!"); // Prints "Hello world!"
console.log("23" + 12); // Prints "2312"
console.log("42" + true); // Prints "42true"
console.log("42" + undefined); // Prints "42undefined"
console.log("42" + null); // Prints "42null"
console.log(42 + "hello"); // Prints "42hello"
console.log(42 + true); // Prints 43 (true => 1)
console.log(42 + false); // Prints 42 (false => 0)
console.log(42 + undefined); // Prints NaN (undefined cannot be converted into a number)
console.log(42 + null); // Prints 42 (null => 0)
console.log(13 + 10 + "12"); // Prints "2312" (13 + 10 = 23, 23 + "12" = "2312")


console.log(4 * 6); // Prints 24
console.log("Hello " * "world!"); // Prints NaN
console.log("24" / 12); // Prints 2 (24 / 12)
console.log("42" * true); // Prints 42 (42 * 1)
console.log("42" * false); // Prints 0 (42 * 0)
console.log("42" * undefined); // Prints NaN
console.log("42" - null); // Prints 42 (42 - 0)
console.log(12 * "hello"); // Prints NaN ("hello" can't be converted into a number)
console.log(13 * 10 - "12"); // Prints 118 ((13 * 10) - 12)

console.log(null == false); // false
console.log(null == true); // false
console.log(undefined == false); // false
console.log(undefined == true); // false
console.log(undefined == null); // true
console.log([] == false); // true
console.log({} == false); // false

console.log(6 >= 6); // true
console.log(3 < "5"); // true ("5" => 5)
console.log("adios" < "bye"); // true
console.log("Bye" > "Adios"); // true
console.log("Bye" > "adios"); // false. Uppercase letters go frst always
console.log("ad" < "adios"); // true
