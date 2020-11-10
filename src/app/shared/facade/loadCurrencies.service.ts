import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { GetCurrency } from '../../core/root-store';

@Injectable({
  providedIn: 'root',
})
export class LoadCurreniesService {
  constructor(private _store: Store<any>) {}

  loadCurrencies() {
    this._store.dispatch(new GetCurrency());
  }
}
