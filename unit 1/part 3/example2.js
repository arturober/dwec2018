'use strict';

/**
 * CLASSES
 */

// function Person(a, b) {
//     this.a = a;
//     this.b = b;
// }

// Person.prototype.toString = function() {
//     return `a: ${this.a}, b: ${this.b}`;
// }

class Person {
    constructor(name, age = 18) {
        this.name = name;
        this.age  = age;
    }

    toString() {
        return `${this.name} (${this.age})`;
    }
}

let p1 = new Person("John",24);
let p2 = new Person("Mary");
console.log(p1.toString()); // John (24)
console.log(p2.toString()); // Mary (18)

class Worker extends Person {
    constructor(name, age, salary) {
        super(name, age);
        this.salary = salary;
    }

    getSalaryMothly() {
        return (this.salary / 12).toFixed(2);
    }

    toString() {
        return `${super.toString()} - Salary: ${this.salary}€`;
    }

    valueOf() {
        return this.salary;
    }

    static getTypes() {
        return ["JUNIOR", "SENIOR", "ANALYST", "CEO"];
    }
}

let w1 = new Worker("Vanessa", 26, 18000);
let w2 = new Worker("John", 20, 12000);
let w3 = new Worker("Steven", 43, 25000);
let w4 = new Worker("Mary", 58, 120000);
console.log(w1.toString()); // Vanessa (26) - Salary: 18000€
console.log(Worker.getTypes()); // ["JUNIOR", "SENIOR", "ANALYST", "CEO"]

console.log(w1 > w2); // true (18000 > 12000)
console.log(w1 < w2); // false 
console.log(w1 > w3); // false

let workers = [w1, w2, w3, w4];
workers.sort((w1, w2) => w1.salary - w2.salary);
console.log(workers);


