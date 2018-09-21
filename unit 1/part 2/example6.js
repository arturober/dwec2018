'use strict';

/**
 * DOM (creating elements)
 */

let input = document.getElementById('input');
let ul    = document.getElementById('list');

function createLI(text) {
    let li = document.createElement('li');
    li.textContent = text;

    let del = document.createElement('span');
    del.textContent = 'x';
    del.style.color = 'red';

    del.addEventListener('click', event => {
        ul.removeChild(li);
    });

    li.appendChild(del);

    return li;
}

function add() {
    let li = createLI(input.value);
    input.value = '';
    ul.appendChild(li);
}

function addFirst() {
    let li = createLI(input.value);
    input.value = '';
    ul.insertBefore(li, ul.firstElementChild);
}