'use strict';

/**
 * FETCH (AJAX)
 */

function getProducts() {
    return fetch('http://localhost:3000/products')
        .then(resp => {
            console.log(`Response code: ${resp.status}`);
            return resp.json();
        }).then(respJSON => respJSON.products);
}

function showProducts() {
    getProducts().then(products => console.log(products));
}

showProducts();
