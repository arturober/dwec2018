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

function substract3Seconds(n1, n2) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let result = n1 - n2;
            if(result >= 0) {
                resolve(result);
            } else { // Error (Can't be negative)
                reject("Result can't be negative!");
            }
        }, 3000);
    });
}

substract3Seconds(23, 13).then(r => console.log(r));
substract3Seconds(5, 13)
  .then(r => console.log(r))
  .catch(error => console.error(error))
  .finally(() => console.log("Promise finished!"));

