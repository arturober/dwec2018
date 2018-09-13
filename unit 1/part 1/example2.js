'use strict';

/**
 * FUNCTIONS
 */

function sayHello(name, age) {
    console.log(`Hello , ${name} your age is ${age}`);
    // console.log("Hello " + name + ", your age is " + age);
}

sayHello("John",34); // "Hello John, your age is 34"
sayHello(); // "Hello undefined, your age is undefined"

function sum(num1, num2) {
    return num1 + num2;
}

console.log(sum(3, 5)); // 8
console.log(sum(3)); // NaN

let mult = function(n1, n2) {
    return n1*n2;
}

console.log(mult(5,6)); // 30
console.log(typeof mult); // "function"

function operate(n1, n2, operation) {
    console.log("Result: " + operation(n1, n2));
}

operate(3, 4, function(n1, n2) { return n1 + n2; }); "Result 7"
operate(3, 4, function(n1, n2) { return n1 - n2; }); "Result -1"
operate(3, 4, mult); "Result 12"
operate(3, 4, function(n1, n2) { return Math.max(n1, n2); }); "Result 4"

let multArrow = (n1, n2) => n1 * n2;
console.log(multArrow(5, 5)); // 25

function sayHello2(name = "Anonymous") {
    console.log(`Hello ${name}`);
}

sayHello2(); "Hello Anonymous"
sayHello2("Peter"); "Hello Peter"

function getTotalPrice(price, tax = price * 0.07) {
    return price + tax;
}
console.log(getTotalPrice(100)); // Prints 107
