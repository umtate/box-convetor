import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CurrencyState } from './currency.reducer';

const currency = createFeatureSelector<CurrencyState>('currency');

export const getCurrencyRates = createSelector(
  currency,
  (state) => state.payload
);
