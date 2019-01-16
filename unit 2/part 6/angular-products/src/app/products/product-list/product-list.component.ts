import { Component, OnInit, OnDestroy } from '@angular/core';
import { Product } from '../interfaces/product';
import { ProductsService } from '../services/products.service';
import { Title } from '@angular/platform-browser';
import { trigger, transition, style, animate, query, stagger, state } from '@angular/animations';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  animations: [
    trigger('productItem', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(-100px)' }),
        animate('200ms ease-out', style({ opacity: 1, transform: 'none' }))
      ]),
      transition(':leave', [
        animate('200ms ease-in', style({ opacity: 0, transform: 'translateX(100px)' }))
      ]),
      state('selected', style({ borderLeft: '40px lightblue solid' })),
      transition('* => selected', animate('200ms ease-in')),
      transition('selected => *', animate('200ms ease-out')),
    ]),
    trigger('productList', [
      transition(':enter', [
        query('product-item', [
          style({ opacity: 0, transform: 'translateX(-100px)' }),
          stagger(100, animate('500ms ease-out', style({ opacity: 1, transform: 'none' })))
        ])
      ])
    ])
  ]
})
export class ProductListComponent implements OnInit {
  title = 'My product\'s list';
  headers = { image: 'Image', description: 'Product',
             price: 'Price', available: 'Available',
             rating: 'Rating' };
  products: Product[] = [];
  showImage = true;
  search = '';

  constructor(
    private titleService: Title,
    private productsService: ProductsService
  ) {}

  ngOnInit() {
    this.titleService.setTitle('Angular products | Products');

    this.productsService.getProducts().subscribe(
      products => this.products = products.map(p => {
        p.state = '';
        return p;
      }),
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

  toggleSelected(prod: Product) {
    prod.state = prod.state === 'selected' ? '' : 'selected';
  }
}
