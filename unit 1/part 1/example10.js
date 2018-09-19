'use strict';

/**
 * MAP & SET
 */

let map = new Map();
map.set("Peter", ["Movies", "Tennis"]);
map.set("Jessica", ["Football", "Travelling"]);
map.set("John", ["Eating", "Drinking", "Fighting"]);

console.log(map.has("Peter")); // true
console.log(map.has("Anne")); // false

console.log(map.get("John").toString());
map.set("John", ["Dancing", "Eating", "Rolling"]);
console.log(map.get("John").toString());

console.log(map.size);

for (let entry of map) {
    console.log(`${entry[0]} hobbies are: ${entry[1]}`);
}

for (let [name, hobbies] of map) {
    console.log(`${name} hobbies are: ${hobbies}`);
}

console.log("*** FOREACH ***");
map.forEach((hobbies, name) => {
    console.log(`${name} hobbies are: ${hobbies}`);
});

let map2 = new Map([
    ["John", "943253645"],
    ["Sam", "952384234"]
]);
map2.forEach((phone, name) => {
    console.log(`${name} - ${phone}`);
});

let set = new Set();
set.add("car");
set.add("bike");
set.add("boat");
console.log(set.size); // 3
set.add("car");
console.log(set.size); // 3
console.log(set.has("bike")); // true
set.delete("bike");
console.log(set.has("bike")); // false

set.forEach(vehicle => console.log(vehicle));

let aSet = Array.from(set);
console.log(set instanceof Array); // false
console.log(set instanceof Set); // true
console.log(aSet instanceof Array); // true
console.log(aSet instanceof Set); // false
console.log(aSet); // ["car", "boat"]

let set2 = new Set(["a", "b", "c", "b", "b", "a"]);
set2.forEach(item => console.log(item));
