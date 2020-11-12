import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ContainerRoutingModule } from './container-rooting.module';
import { CommonModule } from '@angular/common';
import { ContainerComponent } from './container.component';
import { CurrencyComponent } from './currency/currency.component';
import { DimensionComponent } from './dimension/dimension.component';
import { StatsComponent } from './stats/stats.component';
import { NocommaPipe } from '../shared/pipes/nocomma.pipe';

@NgModule({
  declarations: [
    ContainerComponent,
    CurrencyComponent,
    DimensionComponent,
    StatsComponent,
    NocommaPipe,
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTabsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ContainerRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
  ],
  providers: [NocommaPipe],
})
export class ContainerModule {}
