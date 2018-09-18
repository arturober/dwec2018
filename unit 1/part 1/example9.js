'use strict';

/**
 * ARRAYS II
 */

class Person {
    constructor(name, age) {
        this.name = name;
        this.age  = age;
    }

    toString() {
        return `${this.name} (${this.age})`;
    }
}

let p1 = new Person("Peter", 35);
let p2 = new Person("Monica", 25);
let p3 = new Person("John", 17);
let p4 = new Person("Anabelle", 43);
let persons = [p1, p2, p3, p4];

console.log(persons.toString());
persons.sort(); // By toString() - Alphabetically
console.log(persons.toString()); // Anabelle (43),John (17),Monica (25),Peter (35)
persons.sort((p1, p2) => p1.age - p2.age); // By age
console.log(persons.toString()); // John (17),Monica (25),Peter (35),Anabelle (43)
persons.sort((p1, p2) => p1.name.length - p2.name.length); // By name length
console.log(persons.toString()); // John (17),Peter (35),Monica (25),Anabelle (43)
persons.sort((p1, p2) => p1.name.charAt(p1.name.length - 1).localeCompare(p2.name.charAt(p2.name.length - 1)))
console.log(persons.toString()); // Monica (25),Anabelle (43),John (17),Peter (35)

console.log(persons.indexOf(p3)); // 2
console.log(persons.indexOf(null)); // -1

console.log(persons.every(p => p.age >= 18)); // false
console.log(persons.some(p => p.age >= 18)); // true

console.log(persons.map(p => p.name)); // ["Monica", "Anabelle", "John", "Peter"]
console.log(persons.map(p => p.age)); // [25, 43, 17, 35]

console.log(persons.filter(p => p.age >= 18));
console.log(persons.filter(p => p.age >= 18).map(p => p.name).sort());

console.log(persons.reduce((total, p) => total + p.age, 0)); // 120
console.log(persons.reduce((pMax, p) => pMax.age > p.age ? pMax : p)); // Person {name: "Anabelle", age: 43}

console.log(persons.find(p => p.name === "Monica"));
console.log(persons.findIndex(p => p.name === "Monica"));

function rest(...nums) {
    console.log(nums.filter(n => n % 2 === 0));
}

rest(23, 45, 56, 27, 37, 12); // [56, 12]

function printUserInfo(name, ...languages) {
    console.log(name + " knows " + languages.length +
    " languages: " + languages.join(" - "));
}
// Prints "Peter knows 3 languages: Java - C# - Python"
printUserInfo("Peter", "Java", "C#", "Python");
// Prints "Mary knows 5 languages: JavaScript - Angular - PHP - HTML - CSS"
printUserInfo("Mary", "JavaScript", "Angular", "PHP", "HTML", "CSS");

let nums = [12, 32, 153, 65, 88];
console.log(Math.max(...nums));

let nums2 = [...nums]; // Copy Array

let [n1, n2, n3] = nums;
console.log(n3); // 153

let [nums1,,,nums4] = nums;
console.log(nums4); // 65

let names = ["John"];
let [name1 = "Name1", name2 = "Name2"] = names;
console.log(name1, name2);

function printUserData([id, name, email], otherInfo = "None") {
    console.log("ID: " + id);
    console.log("Name: " + name);
    console.log("Email: " + email );
    console.log("Other info: " + otherInfo );
}
let userData = [3, "Peter", "peter@gmail.com"];
printUserData(userData, "He's not too smart");
