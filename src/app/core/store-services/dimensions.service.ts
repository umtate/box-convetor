import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { measures } from './measures';

@Injectable({
  providedIn: 'root',
})
export class DimensionsService {
  constructor() {}

  getLength(): Observable<any> {
    return of(measures.length);
  }

  getVolume(): Observable<any> {
    return of(measures.volume);
  }

  getLengthUnits(): Observable<any> {
    const arr = [];
    measures?.length?.forEach((val) => {
      arr.push(val.id);
    });
    return of(arr);
  }

  getVolumeUnits(): Observable<any> {
    const arr = [];
    measures?.volume?.forEach((val) => {
      arr.push(val.id);
    });
    return of(arr);
  }
}
