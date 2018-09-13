'use strict';

/**
 * LOOPS
 */

let n = 0;
while(n < 5) {
    console.log("While: " + n++);
}

for(let i = 0; i < 5; i++) {
    console.log("For: " + i);
}

for(let i = 0, j = 10; i <= j; i++, j--) {
    console.log(`i = ${i}, j = ${j}`);
}