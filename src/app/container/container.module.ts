import { NgModule } from '@angular/core';

import { ContainerRoutingModule } from './container-rooting.module';
import { CommonModule } from '@angular/common';
import { ContainerComponent } from './container.component';
import { CurrencyComponent } from './currency/currency.component';
import { DimensionComponent } from './dimension/dimension.component';
import { StatsComponent } from './stats/stats.component';

@NgModule({
  declarations: [
    ContainerComponent,
    CurrencyComponent,
    DimensionComponent,
    StatsComponent,
  ],
  imports: [CommonModule, ContainerRoutingModule],
})
export class ContainerModule {}
