import {Http, SERVER} from './http.class';
import productTemplate from '../templates/product.handlebars';

export class Product {
    constructor(prodJSON) {
        this.id = prodJSON.id || -1; // -1 is default value (not present)
        this.name = prodJSON.name;
        this.description = prodJSON.description;
        this.photo = prodJSON.photo;
    }

    static async getProducts() {
        let response = await Http.get(`${SERVER}/products`);
        return response.products.map(prod => new Product(prod));
    }

    async add() {
        let response = await Http.post(`${SERVER}/products`, this);
        return new Product(response.product);
    }

    async update() {
        let response = await Http.put(`${SERVER}/products/${this.id}`, this);
        return new Product(response.product);
    }

    delete() {
        return Http.delete(`${SERVER}/products/${this.id}`);
    }

    toHTML() { // In this example, it returns a <tr> with the product info
        let tr = document.createElement("tr");
        
        let prodHTML = productTemplate({
            name: this.name,
            description: this.description,
            photo: `${SERVER}/${this.photo}`
        });
        
        tr.innerHTML = prodHTML;
        
        return tr;
    }
}