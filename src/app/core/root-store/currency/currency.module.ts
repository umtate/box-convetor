import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { currencyReducer } from './currency.reducer';
import { CurrencyEffects } from './currency.effect';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('currency', currencyReducer),
    EffectsModule.forFeature([CurrencyEffects]),
  ],
})
export class CurrencyModule {}
