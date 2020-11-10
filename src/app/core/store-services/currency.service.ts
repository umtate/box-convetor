import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CurrencyService {
  constructor(private _http: HttpClient) {}

  getCurrencyInfo() {
    const url = `https://api.ratesapi.io/api/latest`;
    return this._http.get(url);
  }
}
