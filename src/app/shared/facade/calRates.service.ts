import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { filter, pluck, take } from 'rxjs/operators';
import { GetRates } from '../../core/root-store';

@Injectable({
  providedIn: 'root',
})
export class CalRateService {
  constructor(private _store: Store<any>) {}

  loadRates(base: string) {
    this._store.dispatch(new GetRates(base));
  }

  async calculateRate(pair: string): Promise<number> {
    let rate: number;
    await this._store
      .select('rates')
      .pipe(
        pluck('payload'),
        filter((x) => !!x),
        take(1)
      )
      .subscribe((value) => {
        for (let key in value.rates) {
          if (key === pair) {
            rate = parseFloat(value.rates[key]);
          }
        }
      });
    return rate;
  }
}
