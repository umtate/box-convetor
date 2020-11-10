import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import * as ratesActions from './rates.actions';
import { map, switchMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { RatesService } from '../../store-services';

@Injectable()
export class RatesEffects {
  constructor(private actions$: Actions, private _rates: RatesService) {}

  @Effect()
  rates$ = this.actions$.pipe(
    ofType(ratesActions.RatesActionTypes.GET_RATES),
    switchMap((action: ratesActions.GetRates) => {
      const base = action.payload;
      return this._rates.getRates(base).pipe(
        switchMap((res) => of(new ratesActions.GetRatesSuccess(res))),
        catchError((err) => of(new ratesActions.GetRatesFail(err)))
      );
    })
  );
}
