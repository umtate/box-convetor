import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import * as curActions from './currency.actions';
import { map, switchMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { CurrencyService } from '../../store-services/currency.service';

@Injectable()
export class CurrencyEffects {
  constructor(private actions$: Actions, private _currency: CurrencyService) {}

  @Effect()
  currency$ = this.actions$.pipe(
    ofType(curActions.CurrencyActionTypes.GET_CURRENCY),
    switchMap(() => {
      return this._currency.getCurrencyInfo().pipe(
        switchMap((res) => of(new curActions.GetCurrencySuccess(res))),
        catchError((err) => of(new curActions.GetCurrencynFail(err)))
      );
    })
  );
}
