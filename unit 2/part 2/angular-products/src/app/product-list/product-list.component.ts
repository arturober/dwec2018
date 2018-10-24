import { Component, OnInit, OnDestroy } from '@angular/core';
import { Product } from '../interfaces/product';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  title = 'My product\'s list';
  headers = { image: 'Image', description: 'Product',
             price: 'Price', available: 'Available',
             rating: 'Rating' };
  products: Product[] = [];
  showImage = true;
  showAddProduct = false;
  search = '';

  constructor() {}

  toggleImage() {
    this.showImage = !this.showImage;
  }

  addProduct(product: Product) {
    this.products.push(product);
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
  }
}
