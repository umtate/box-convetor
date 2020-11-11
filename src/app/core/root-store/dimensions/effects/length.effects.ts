import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import * as lengthActions from '../actions';
import { map, switchMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { DimensionsService } from '../../../store-services';

@Injectable()
export class LengthEffects {
  constructor(private actions$: Actions, private _dim: DimensionsService) {}

  @Effect()
  currency$ = this.actions$.pipe(
    ofType(lengthActions.LengthActionTypes.GET_LENGTH),
    switchMap(() => {
      return this._dim.getLength().pipe(
        switchMap((res) => of(new lengthActions.GetLengthSuccess(res))),
        catchError((err) => of(err))
      );
    })
  );
}
