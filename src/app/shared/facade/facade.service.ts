import { Injectable } from '@angular/core';
import { LoadCurreniesService } from './loadCurrencies.service';
import { GetCurreniesService } from './getCurrencies.service';
import { GetRateService } from './getRates.service';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FacadeService {
  constructor(
    public _loadCur: LoadCurreniesService,
    private _getCur: GetCurreniesService,
    private _rates: GetRateService
  ) {}

  async currency(): Promise<Observable<any>> {
    await this._loadCur.loadCurrencies();
    return this._getCur.getCurrencies();
  }

  async rates(base: string): Promise<Observable<any>> {
    await this._rates.loadRates(base);
    return this._rates.getRates();
  }
}
