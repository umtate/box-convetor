import { createFeatureSelector, createSelector } from '@ngrx/store';
import { RatesState } from './rates.reducer';

const rates = createFeatureSelector<RatesState>('rates');

export const getCurrencyRates = createSelector(rates, (state) => state.payload);
