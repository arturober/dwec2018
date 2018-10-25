import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  getProducts(): Product[] {
    return [
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
