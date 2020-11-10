import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContainerComponent } from './container.component';
import { CurrencyComponent } from './currency/currency.component';
import { DimensionComponent } from './dimension/dimension.component';
import { StatsComponent } from './stats/stats.component';

const routes: Routes = [
  {
    path: '',
    component: ContainerComponent,
    children: [
      {
        path: 'currency',
        component: CurrencyComponent,
      },
      {
        path: 'dimension',
        component: DimensionComponent,
      },
      {
        path: 'stats',
        component: StatsComponent,
      },
      { path: '**', redirectTo: '', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContainerRoutingModule {}
