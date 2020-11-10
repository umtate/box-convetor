import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class RatesService {
  constructor(private _http: HttpClient) {}

  getRates(base) {
    const url = `https://api.ratesapi.io/api/latest?base=${base}`;
    return this._http.get(url);
  }
}
