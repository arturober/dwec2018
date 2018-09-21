'use strict';

/**
 * DOM (attributes)
 */
let div = document.querySelector('div');

// function toggleClass() {
//     div.className = div.className === 'c1 px100' ? 'c2 px100' : 'c1 px100';
// }

function toggleClass() {
    let c1 = div.classList.contains('c1');
    div.classList.remove('c1', 'c2');
    div.classList.add(c1 ? 'c2' : 'c1');
}
