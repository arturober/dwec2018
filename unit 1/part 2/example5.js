'use strict';

/**
 * DOM (Query selector)
 */

// let div2 = document.getElementById('div2');
// let a1 = div2.getElementsByTagName("a")[0]; // <a> inside #div2
// console.log(a1);
let a1 = document.querySelector('#div2 a');
console.log(a1);
let aDiv2 = document.querySelectorAll('#div2 a');
console.log(aDiv2);

console.log(document.querySelector('#div2 a:nth-child(2)'));
console.log(document.querySelector('#div2 a:last-child'));

console.log(document.querySelector("a[title^='bye']"));
console.log(document.querySelector("a[title^='bye'] + a"));

let aEndWorld = document.querySelectorAll("a[title$='world']");
aEndWorld.forEach(a => console.log(a.title));
