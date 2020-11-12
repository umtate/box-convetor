import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { filter, pluck, skipWhile, take } from 'rxjs/operators';
import { GetLength, GetVolume } from '../../core/root-store';

@Injectable({
  providedIn: 'root',
})
export class DimensionCalcService {
  constructor(private _store: Store<any>) {}

  async calculate(p1: string, p2: string): Promise<number> {
    let rate = 0;

    await this._store
      .select('dimensions')
      .pipe(pluck('length', 'length'), take(1))
      .subscribe((val) => {
        val?.forEach((item) => {
          if (item.id === p1) {
            rate = item[p2];
          }
        });
      });
    return rate;
  }
}
