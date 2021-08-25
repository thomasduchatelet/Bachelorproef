import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BaseChartComponent } from './charts/base-chart/base-chart.component';
import { ChartsModule } from 'ng2-charts';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    DashboardComponent,
    BaseChartComponent,
  ],
  exports: [DashboardComponent],
  imports: [
    CommonModule,
    ChartsModule,
    HttpClientModule
  ]
})
export class DashboardModule { }
