'use strict';

/**
 * JSON
 */

let obj = new Object();
obj.a = 12;
obj.b = 23;
obj.sum = function () {
    return this.a + this.b;
};
console.log(obj); // {a: 12, b: 23}
console.log(typeof obj); // object
console.log(obj instanceof Object); // true
console.log(obj.sum()); // 35

let obj2 = {
    a: 12,
    b: 23,
    sum() {
        return this.a + this.b;
    }
};
console.log(obj2); // {a: 12, b: 23}
console.log(typeof obj2); // object
console.log(obj2 instanceof Object); // true

console.log(obj2.a); // 12
console.log(obj2.sum()); // 35

let person = {
    name: "Peter",
    age: 41,
    jobs: [ // jobs is an array of objects JSON)
        {
            description: "Circus clown",
            duration: "2003-2005"
        },
        {
            description: "Chicken sexer",
            duration: "2005-2015"
        }
    ]
}

console.log(person.jobs[0].description); // Circus clown
console.log(person.jobs.map(j => j.description).toString()); // Circus clown,Chicken sexer
