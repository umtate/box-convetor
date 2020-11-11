import { createFeatureSelector, createSelector } from '@ngrx/store';
import { DimensionState } from '../reducers';

const dimState = createFeatureSelector<DimensionState>('dimensions');

export const getLengths = createSelector(dimState, (state) => state.length);

export const getVolume = createSelector(dimState, (state) => state.volume);
