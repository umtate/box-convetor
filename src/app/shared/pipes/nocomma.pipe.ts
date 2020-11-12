import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nocomma',
})
export class NocommaPipe implements PipeTransform {
  transform(val: number): string {
    if (val !== undefined && val !== null) {
      return val.toString().replace(/,/g, '');
    } else {
      return '';
    }
  }
}
