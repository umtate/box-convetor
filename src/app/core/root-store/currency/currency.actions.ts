import { Action } from '@ngrx/store';

export enum CurrencyActionTypes {
  GET_CURRENCY = '[Currency ] Get Currency',
  GET_CURRENCY_SUCCESS = '[Currency ] Get Currency Success',
  GET_CURRENCY_FAIL = '[Currency ] Get Currency Fail',
}

export class GetCurrency implements Action {
  readonly type = CurrencyActionTypes.GET_CURRENCY;
  constructor() {}
}

export class GetCurrencySuccess implements Action {
  readonly type = CurrencyActionTypes.GET_CURRENCY_SUCCESS;
  constructor(public payload: any) {}
}

export class GetCurrencynFail implements Action {
  readonly type = CurrencyActionTypes.GET_CURRENCY_FAIL;
  constructor(public payload: any) {}
}

export type currencyActions =
  | GetCurrency
  | GetCurrencySuccess
  | GetCurrencynFail;
