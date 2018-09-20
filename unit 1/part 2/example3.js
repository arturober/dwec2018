'use strict';

/**
 * DIALOGS
 */

function showAlert() {
    alert("Hello alert!");
}

function showConfirm() {
    let resp = confirm("Do you want money?");
    console.log(resp);
}

function showPrompt() {
    let resp = prompt("What's your name?");
    console.log(resp);
}

function showSweetAlert() {
    swal('Any fool can use a computer')
}
