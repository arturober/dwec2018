'use strict';

/**
 * Object Destructuring
 */

let person1 = {
    name: "Peter",
    age: 34
}

let person2 = {
    name: "Monica",
    age: 25
}

let {name: name1, age: age1} = person1;
let {name: name2, age: age2} = person2;
console.log(name1); // "Peter"
console.log(age1); // 34
console.log(name2); // "Monica"
console.log(age2); // 25

function showConfig({
    color = 'white', 
    width = 100, 
    debug = false, 
    showErrors = false
} = {}) {
    console.log(`color: ${color}, width: ${width}px, debug: ${debug}, showErrors: ${showErrors}`);
}

showConfig(); // color: white, width: 100px, debug: false, showErrors: false
showConfig({}); // color: white, width: 100px, debug: false, showErrors: false
showConfig({debug: true}); // color: white, width: 100px, debug: true, showErrors: false
showConfig({color: 'green', width: 300, showErrors: true}); // color: green, width: 300px, debug: false, showErrors: true

