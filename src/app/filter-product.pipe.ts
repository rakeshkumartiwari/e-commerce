import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterProduct'
})
export class FilterProductPipe implements PipeTransform {

  transform(products: any[], category: string) {
    if (category && category !== '') {
      return products.filter(p => p.key === category)
    } else {
      return products;
    }
  }

}
