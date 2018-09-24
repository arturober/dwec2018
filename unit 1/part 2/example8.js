'use strict';

/**
 * EVENTS
 */

const input = document.getElementById('text');
input.addEventListener('click', event => {
    document.getElementById('info1').textContent = 'input clicked!';
    console.log(event);
});

input.addEventListener('keypress', event => {
    document.getElementById('info2').textContent = event.key;
})

const div = document.getElementById('div1');
div.addEventListener('mousemove', event => {
    div.textContent = `${event.pageX - div.offsetLeft}, ${event.pageY - div.offsetTop}`;
});

const form = document.getElementById('form1');
form.addEventListener('submit', event => {
    event.preventDefault();
    document.getElementById('formInfo').textContent = `${form.input1.value}, ${form.input2.value}, ${form.input3.value}`;
});
