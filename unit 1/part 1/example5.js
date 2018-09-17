'use strict';

/**
 * STRINGS
 */

let cad = 'Hello World! How are you?';

console.log(cad.bold());
console.log(cad.toLocaleLowerCase());
console.log(cad.indexOf('o')); // 4
console.log(cad.lastIndexOf('o')); // 22
console.log(cad.match(/\wo\w/g)); // (3) ["Wor", "How", "you"]
console.log(cad.slice(5, 10)); // Worl
console.log(cad.substring(5, 10)); // Worl
console.log(cad.substr(5, 10)); // World! Ho
console.log("hello".repeat(4)); // hellohellohellohello

let uString = "Unicode astral plane: \u{1f3c4}";
console.log(uString); // Prints "Unicode astral plane: " (surfer icon)

console.log("\u{1F601} \u{1F602} \u{1F603} \u{1F604} \u{1F605}"); // 😁 😂 😃 😄 😅
console.log("😁 😂 😃 😄 😅");

let surfer2 = "\u{1F571}\u{1f3c4}\u{1F572}"; // THREE characters: �
console.log(surfer2); // 🕱🏄🕲
console.log(surfer2.length); // Prints 6
console.log(Array.from(surfer2).length); // Prints 3 (converted to array correctly

let name = 'Arturo';
console.log(`Hello ${name}`);


