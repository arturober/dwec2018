import { Component, OnInit } from '@angular/core';
import { Product } from '../interfaces/product';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  title = 'My product\'s list';
  headers = { image: 'Image', description: 'Product', price: 'Price', available: 'Available' };
  products: Product[] = [];
  productsShow: Product[] = [];
  showImage = true;
  showAddProduct = false;
  search = '';
  newProduct: Product;

  constructor() {}

  toggleImage() {
    this.showImage = !this.showImage;
  }

  ngOnInit() {
    this.products = [
      {
        id: 1,
        description: 'SSD hard drive',
        available: new Date('2016-10-03').toISOString(),
        price: 75,
        imageUrl: 'assets/ssd.jpg',
        rating: 5
      },
      {
        id: 2,
        description: 'LGA1151 Motherboard',
        available: new Date('2016-09-15').toISOString(),
        price: 96.95,
        imageUrl: 'assets/motherboard.jpg',
        rating: 4
      },
      {
        id: 3,
        description: 'HDD Hard Drive',
        available: new Date('2017-09-15').toISOString(),
        price: 45.55,
        imageUrl: 'assets/hdd.jpg',
        rating: 2
      },
      {
        id: 4,
        description: 'DDR3 8GB RAM',
        available: new Date('2018-09-15').toISOString(),
        price: 75.95,
        imageUrl: 'assets/ram.jpg',
        rating: 3
      }
    ];
    this.productsShow = this.products;
    this.resetForm();
  }

  filter() {
    this.productsShow = this.products
     .filter(p => p.description.toLocaleLowerCase().includes(this.search.toLocaleLowerCase()));
  }

  changeImage(fileInput: HTMLInputElement) {
    if (!fileInput.files || fileInput.files.length === 0) { return; }
    const reader: FileReader = new FileReader();
    reader.readAsDataURL(fileInput.files[0]);
    reader.addEventListener('loadend', e => {
      this.newProduct.imageUrl = <string>reader.result;
    });
  }

  addProduct() {
    this.products.push(this.newProduct);
    this.resetForm();
    this.showAddProduct = false;
  }

  resetForm() {
    const today = new Date();
    this.newProduct = {
      description: '',
      id: -1,
      available: `${today.getFullYear()}-${(today.getMonth() + 1).toString().padStart(2, '0')}` +
                 `-${today.getDate().toString().padStart(2, '0')}`,
      imageUrl: '',
      price: 0,
      rating: 0
    };
  }
}
