'use strict';

/**
 * DATES
 */

 let now = new Date();
 console.log(now);

console.log(Date.now());
let date1 = new Date(Date.now()-(1000*60*60*24));
console.log(date1);

let date2 = new Date(-Date.now()); // 48 years before 1970 approx.
console.log(date2);

let yesterday = new Date(2018, 8, 24, 14, 0, 0);
console.log(yesterday);

let yesterday2 = new Date('2018-09-24T14:00:00');
console.log(yesterday2);

// 25/09/2018 14:00
console.log(now.getDate()); // 25
console.log(now.getMonth()); // 8
console.log(now.getFullYear()); // 2018
console.log(now.getHours()); // 14
console.log(now.getDay()); // 2

let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
console.log(days[now.getDay()]);


