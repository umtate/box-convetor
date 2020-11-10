import { Action } from '@ngrx/store';

export enum RatesActionTypes {
  GET_RATES = '[Currency] Get rates',
  GET_RATES_SUCCESS = '[Currency] Get rates success',
  GET_RATES_FAIL = '[Currency] Get rates fail',
}

export class GetRates implements Action {
  readonly type = RatesActionTypes.GET_RATES;
  constructor(public payload: any) {}
}

export class GetRatesSuccess implements Action {
  readonly type = RatesActionTypes.GET_RATES_SUCCESS;
  constructor(public payload: any) {}
}

export class GetRatesFail implements Action {
  readonly type = RatesActionTypes.GET_RATES_FAIL;
  constructor(public payload: any) {}
}

export type ratesActions = GetRates | GetRatesSuccess | GetRatesFail;
