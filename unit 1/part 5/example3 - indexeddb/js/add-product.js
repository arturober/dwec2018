import '@babel/polyfill';
import {Product} from './product.class';
import '../css/styles.css';

document.addEventListener('DOMContentLoaded', e => {
    const fileInput = document.getElementById("photo");
    const imagePreview = document.getElementById('imgPreview');
    const form = document.getElementById('addProduct');

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
            location.assign('index.html');
        });
    });
});

