import '@babel/polyfill';
import { Product } from './product.class';
import '../css/styles.css';

let tbody = null;

document.addEventListener('DOMContentLoaded', e => {
    tbody = document.querySelector('tbody');

    Product.getProducts()
        .then(prods => {
            prods.forEach(p => addProd(p));
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
