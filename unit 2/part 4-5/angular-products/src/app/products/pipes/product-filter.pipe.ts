import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../interfaces/product';

@Pipe({
  name: 'productFilter'
})
export class ProductFilterPipe implements PipeTransform {

  transform(products: Product[], filterBy: string): any {
    return products.filter(p =>
      p.description.toLocaleLowerCase().includes(filterBy.toLocaleLowerCase()));
  }

}
