import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { filter, pluck, take } from 'rxjs/operators';
import { GetRates } from '../../core/root-store';

@Injectable({
  providedIn: 'root',
})
export class GetRateService {
  constructor(private _store: Store<any>) {}

  loadRates(base: string) {
    this._store.dispatch(new GetRates(base));
  }

  getRates() {
    return this._store.select('rates').pipe(
      pluck('payload'),
      filter((x) => !!x),
      take(1)
    );
  }
}
