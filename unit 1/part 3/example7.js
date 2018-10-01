'use strict';

/**
 * Send form (Base64)
 */

let imagePreview = null;
let form = null;

document.addEventListener('DOMContentLoaded', e => {
    const fileInput = document.getElementById("photo");
    imagePreview = document.getElementById('imgPreview');
    form = document.getElementById('addProduct');

    fileInput.addEventListener('change', e => {
        const file = fileInput.files[0];
        const reader = new FileReader();
        
        if (file) { // File has been selected (convert to Base64)
            reader.readAsDataURL(file);
        }
        reader.addEventListener("load", () => { //Converted into Base64 event (async)
            imagePreview.src = reader.result;
        }, false);
    });

    form.addEventListener('submit', e => {
        e.preventDefault();

        const prod = {
            name: form.name.value,
            description: form.description.value,
            photo: imagePreview.src
        };

        fetch('http://localhost:3000/products', {
            body: JSON.stringify(prod),
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(resp => {
            console.log(resp);
            if(resp.status >= 300) return Promise.reject(resp.statusText);
            return resp.json();
        })
        .then(resp => console.log(resp));
    });
});
