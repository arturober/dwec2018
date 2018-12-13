import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  readonly BASE_URL = environment.base_url + 'products';

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<{products: Product[]}>(this.BASE_URL)
      .pipe(map(resp => resp.products.map(p => {
        p.imageUrl = environment.base_url + p.imageUrl;
        return p;
      })));
  }

  changeRating(id: number, rating: number): Observable<number> {
    return this.http.put<{rating: number}>(`${this.BASE_URL}/${id}/rating`, {rating})
      .pipe(map(resp => resp.rating));
  }

  addProduct(prod: Product): Observable<Product> {
    return this.http.post<{product: Product}>(this.BASE_URL, prod)
      .pipe(map(resp => {
        const p = resp.product;
        p.imageUrl = environment.base_url + p.imageUrl;
        return p;
      }));
  }
}
