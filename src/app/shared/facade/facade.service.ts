import { Injectable } from '@angular/core';
import { LoadCurreniesService } from './loadCurrencies.service';
import { GetCurreniesService } from './getCurrencies.service';
import { GetRateService } from './getRates.service';
import { CalRateService } from './calRates.service';
import { GetDimensionsService } from './getDimensions.service';
import { DimensionCalcService } from './dimensionCalc.service';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FacadeService {
  constructor(
    public _loadCur: LoadCurreniesService,
    private _getCur: GetCurreniesService,
    private _rates: GetRateService,
    private _calculate: CalRateService,
    private _dim: GetDimensionsService,
    private _dimRate: DimensionCalcService
  ) {}

  async currency(): Promise<Observable<any>> {
    await this._loadCur.loadCurrencies();
    return this._getCur.getCurrencies();
  }

  async rates(base: string): Promise<Observable<any>> {
    await this._rates.loadRates(base);
    return this._rates.getRates();
  }

  calculate(pair: string) {
    return this._calculate.calculateRate(pair);
  }

  async loadDimensions() {
    await this._dim.loadDimensions();
    return {
      length: this._dim.getLengthUnits(),
      volume: this._dim.getVolumeUnits(),
    };
  }

  dimRateCalculator(p1: string, p2: string) {
    return this._dimRate.calculate(p1, p2);
  }
}
