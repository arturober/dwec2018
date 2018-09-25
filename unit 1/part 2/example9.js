'use strict';

/**
 * EVENT PROPAGATION
 */

const div1 = document.getElementById('div1');
const div2 = document.getElementById('div2');
const div3 = document.getElementById('div3');

function click(event) {
    console.log(`Click ${event.currentTarget.id}. Bubbles?: ${event.bubbles}.
event phase: ${event.eventPhase}`);
}

div1.addEventListener('click', click);
div2.addEventListener('click', click);
div3.addEventListener('click', click);

