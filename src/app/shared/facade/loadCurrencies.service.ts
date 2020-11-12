import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { pluck, take } from 'rxjs/operators';
import { GetCurrency } from '../../core/root-store';

@Injectable({
  providedIn: 'root',
})
export class LoadCurreniesService {
  constructor(private _store: Store<any>) {}

  loadCurrencies() {
    this._store
      .select('currency')
      .pipe(pluck('payload'), take(1))
      .subscribe((payload) => {
        if (!payload) this._store.dispatch(new GetCurrency());
      });
  }

  loader() {
    return this._store.select('currency').pipe(pluck('loaded'));
  }
}
