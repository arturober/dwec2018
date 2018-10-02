'use strict';

/**
 * Products
 */

let tbody = null;

document.addEventListener('DOMContentLoaded', e => {
    tbody = document.querySelector('tbody');
    const fileInput = document.getElementById("photo");
    const imagePreview = document.getElementById('imgPreview');
    const form = document.getElementById('addProduct');

    Product.getProducts()
        .then(prods => {
            prods.forEach(p => addProd(p));
        });

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

        const prod = new Product({
            name: form.name.value,
            description: form.description.value,
            photo: imagePreview.src
        });

        prod.add().then(p => {
            addProd(p);
            form.reset();
            imagePreview.src = '';
        });
    });
});

function addProd(p) {
    let pHTML = p.toHTML();
    pHTML.querySelector("button")
         .addEventListener('click', e => {
             p.delete().then(resp => pHTML.remove());
         });
    tbody.appendChild(pHTML);
}
