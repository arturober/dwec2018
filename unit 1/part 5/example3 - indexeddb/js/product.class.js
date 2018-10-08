import productTemplate from '../templates/product.handlebars';
import { DB } from './db.class';

const STORENAME = 'products';

export class Product {
    constructor(prodJSON) {
        if (prodJSON.id)
            this.id = prodJSON.id;
        this.name = prodJSON.name;
        this.description = prodJSON.description;
        this.photo = prodJSON.photo;
    }

    static async getProducts() {
        let products = await DB.getAll(STORENAME);
        return products.map(prod => new Product(prod));
    }

    async add() {
        let product = await DB.insert(STORENAME, this);
        return new Product(product);
    }

    async update() {
        let product = await DB.update(STORENAME, this);
        return new Product(product);
    }

    delete() {
        return DB.delete(STORENAME, this.id);
    }

    toHTML() { // In this example, it returns a <tr> with the product info
        let tr = document.createElement("tr");
        
        let prodHTML = productTemplate(this);
        
        tr.innerHTML = prodHTML;
        
        return tr;
    }
}