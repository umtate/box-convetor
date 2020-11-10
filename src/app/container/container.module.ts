import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';

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
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTabsModule,
    ContainerRoutingModule,
  ],
})
export class ContainerModule {}
