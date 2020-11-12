import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import * as volActions from '../actions';
import { switchMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { DimensionsService } from '../../../store-services';

@Injectable()
export class VolumeEffects {
  constructor(private actions$: Actions, private _dim: DimensionsService) {}

  @Effect()
  volume$ = this.actions$.pipe(
    ofType(volActions.VolumeActionTypes.GET_VOLUME),
    switchMap(() => {
      return this._dim.getVolume().pipe(
        switchMap((res) => of(new volActions.GetVolumeSuccess(res))),
        catchError((err) => of(err))
      );
    })
  );
}
