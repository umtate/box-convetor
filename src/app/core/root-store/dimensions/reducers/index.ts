import { createFeatureSelector, ActionReducerMap } from '@ngrx/store';

import * as fromLength from './length.reducer';
import * as fromVolume from './volume.reducer';

export interface DimensionState {
  length: fromLength.LengthState;
  volume: fromVolume.VolumeState;
}

export const dimensionReducers: ActionReducerMap<DimensionState> = {
  length: fromLength.lengthReducer,
  volume: fromVolume.volumeReducer,
};

export const dimesionModuleState = createFeatureSelector<DimensionState>(
  'dimesions'
);
