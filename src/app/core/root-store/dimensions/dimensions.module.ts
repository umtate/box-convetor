import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { dimensionReducers } from './reducers';
import { LengthEffects, VolumeEffects } from './effects';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('dimensions', dimensionReducers),
    EffectsModule.forFeature([LengthEffects, VolumeEffects]),
  ],
})
export class DimensionsModule {}
