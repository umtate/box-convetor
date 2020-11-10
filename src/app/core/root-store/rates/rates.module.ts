import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ratesReducer } from './rates.reducer';
import { RatesEffects } from './rates.effect';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('rates', ratesReducer),
    EffectsModule.forFeature([RatesEffects]),
  ],
})
export class RatesModule {}
