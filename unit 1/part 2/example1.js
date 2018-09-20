'use strict';

console.log(location.href);

// location.assign("https://google.es");

console.log(window.outerWidth + " - " + window.outerHeight);

// let newWin = window.open("https://www.google.com");
// alert("Google is going to close!");
// newWin.close();

console.log(screen.width + " - " + screen.height); // Screen width and height (screen resolution)
console.log(screen.availWidth + " - " + screen.availHeight); 

console.log(navigator.userAgent); // Prints browser information
navigator.geolocation.getCurrentPosition(function(position) {
 console.log("Latitude: " + position.coords.latitude + ", Longitude: " + position.coords.longitude);
});

/**
 * TIMEOUT
 */
// function hello(name) {
//     console.log(`Hello ${name}! 4 seconds after`);
// }
// // setTimeout("hello('Peter')", 4000);
// setTimeout(hello, 4000, "Peter");
// setTimeout(() => console.log("6 seconds!"), 6000);

/**
 * INTERVAL
 */
let i = 0;
let interval = setInterval(() => {
    console.log(i++);
    if(i > 10) clearInterval(interval);
}, 1000);
