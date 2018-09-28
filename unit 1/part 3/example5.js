'use strict';

/**
 * Promises 2
 */

function createPromise(result, ms) {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(result), ms);
    });
}

let p1 = createPromise("Hello", 2500);
let p2 = createPromise("Bye", 3000);
let p3 = createPromise("What!", 2000);

Promise.all([p1, p2, p3])
    .then(r => console.log(r));

Promise.race([p1, p2, p3]).then(r => console.log(r));
