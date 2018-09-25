'use strict';

/**
 * EVENTS
 */

function click1(event) {
    document.getElementById('info1').textContent = 'input clicked!';
    console.log(event.target);
    console.log(`click 1. type: ${event.type}, button ${event.button}
, pageX: ${event.pageX}, pageY: ${event.pageY}, detail: ${event.detail}
, control pressed?: ${event.ctrlKey}`);
}

function click2(event) {
    console.log("click 2");
    input.removeEventListener('click', click2);
}

const input = document.getElementById('text');
input.addEventListener('click', click1);
input.addEventListener('click', click2);

input.addEventListener('keypress', event => {
    document.getElementById('info2').textContent = event.key;
});

const div = document.getElementById('div1');
div.addEventListener('mousemove', event => {
    div.textContent = `${event.pageX - div.offsetLeft}, ${event.pageY - div.offsetTop}`;
});

const form = document.getElementById('form1');
form.addEventListener('submit', event => {
    event.preventDefault();
    document.getElementById('formInfo').textContent = `${form.input1.value}, ${form.input2.value}, ${form.input3.value}`;
});
