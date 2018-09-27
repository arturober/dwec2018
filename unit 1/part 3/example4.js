'use strict';

/**
 * Promise
 */

let p = new Promise((resolve, reject) => {
    setTimeout(() => resolve(24), 3000);
});

p.then(r => console.log(r));
console.log('Hello!');
let i = 0;


