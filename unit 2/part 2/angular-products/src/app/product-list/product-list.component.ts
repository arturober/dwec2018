import { Component, OnInit, OnDestroy } from '@angular/core';
import { Product } from '../interfaces/product';
import { ProductsService } from '../services/products.service';

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

  constructor(private productsService: ProductsService) {}

  ngOnInit() {
    this.productsService.getProducts().subscribe(
      products => this.products = products,
      error => console.error(error),
      () => console.log('Products loaded')
    );
  }

  toggleImage() {
    this.showImage = !this.showImage;
  }

  addProduct(product: Product) {
    this.products.push(product);
  }
}
