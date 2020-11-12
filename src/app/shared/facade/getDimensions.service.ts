import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { filter, pluck, skipWhile, take } from 'rxjs/operators';
import { GetLength, GetVolume } from '../../core/root-store';

@Injectable({
  providedIn: 'root',
})
export class GetDimensionsService {
  constructor(private _store: Store<any>) {}

  async loadDimensions() {
    this._store.dispatch(new GetVolume());
    this._store.dispatch(new GetLength());
  }

  async getLengthUnits(): Promise<any> {
    const arr = [];
    await this._store
      .select('dimensions')
      .pipe(
        pluck('length', 'length'),
        filter((x) => !!x)
      )
      .subscribe((val) => {
        val.forEach((item) => arr.push(item.id));
      });

    return arr;
  }

  async getVolumeUnits(): Promise<any> {
    const arr = [];
    await this._store
      .select('dimensions')
      .pipe(
        pluck('volume', 'volume'),
        filter((x) => !!x)
      )
      .subscribe((val) => val.forEach((item) => arr.push(item.id)));

    return arr;
  }
}
