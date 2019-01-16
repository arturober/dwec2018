import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../interfaces/product';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() product: Product;
  @Input() showImage: boolean;

  constructor(private productsService: ProductsService) { }

  ngOnInit() {}

  changeRating(newRating) {
    this.productsService.changeRating(this.product.id, newRating)
      .subscribe(
        rating => this.product.rating = rating,
        error => console.error(error)
      );
  }
}
