class Product {
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
        // Image
        let imgTD = document.createElement("td");
        let img = document.createElement("img");
        img.src = `${SERVER}/${this.photo}`;
        imgTD.appendChild(img);
        // Name
        let nameTD = document.createElement("td");
        nameTD.textContent = this.name;
        // Description
        let descTD = document.createElement("td");
        descTD.textContent = this.description;

        let deleteTD = document.createElement("td");
        let deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteTD.appendChild(deleteBtn);

        tr.appendChild(imgTD);
        tr.appendChild(nameTD);
        tr.appendChild(descTD);
        tr.appendChild(deleteTD);
        return tr;
    }
}