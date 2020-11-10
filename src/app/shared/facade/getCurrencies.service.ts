import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { filter, pluck, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class GetCurreniesService {
  constructor(private _store: Store<any>) {}

  getCurrencies() {
    return this._store.select('currency').pipe(
      pluck('payload'),
      filter((x) => !!x),
      take(1)
    );
  }
}
