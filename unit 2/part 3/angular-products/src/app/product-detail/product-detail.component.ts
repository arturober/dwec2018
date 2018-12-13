import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../services/products.service';
import { Product } from '../interfaces/product';

@Component({
  selector: 'product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product: Product;

  constructor(
    private route: ActivatedRoute,
    private titleService: Title,
    private productsService: ProductsService,
    private router: Router
  ) { }

  ngOnInit() {
    this.titleService.setTitle('Angular products | Details');
    this.product = this.route.snapshot.data.product;
  }

  goBack() {
    this.router.navigate(['/products']);
  }

  edit() {
    this.router.navigate(['/products/edit', this.product.id]);
  }

  changeRating(newRating) {
    this.productsService.changeRating(this.product.id, newRating)
      .subscribe(
        rating => this.product.rating = rating,
        error => console.error(error)
      );
  }
}
