import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Product } from '../interfaces/product';
import { Observable, of } from 'rxjs';
import { ProductsService } from '../services/products.service';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductDetailResolve implements Resolve<Product> {

  constructor(private productsService: ProductsService,
    private router: Router) { }

  resolve(route: ActivatedRouteSnapshot): Observable<Product> {
    return this.productsService.getProduct(route.params['id']).pipe(
      catchError(error => {
        this.router.navigate(['/products']);
        return of(null);
      })
    );
  }
}
