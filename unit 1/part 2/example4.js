'use strict';

/**
 * DOM
 */

let lists = document.getElementsByTagName("ul");
console.log(lists);
let ul = lists[0];
console.log(ul);

// console.log(ul.children);

// for(let i = 0; i < ul.children.length; i++) {
//     console.log(ul.children[i]);
// }

let liArray = Array.from(ul.children);
liArray.forEach(li => console.log(li.textContent));

console.log(liArray.map(li => li.textContent).join(' - '));

let li1 = document.getElementById('firstListElement');
console.log(li1.firstElementChild);

let p = document.getElementById('par');
Array.from(p.childNodes).forEach(el => {
    console.log(`${el.nodeType}`, el);
});

let currentLi = li1;
while(currentLi != null) {
    console.log(currentLi.textContent);
    currentLi = currentLi.nextElementSibling;
}


