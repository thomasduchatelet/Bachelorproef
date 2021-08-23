import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BaseChartComponent } from './charts/base-chart/base-chart.component';
import { LineChartComponent } from './charts/line-chart/line-chart.component';
import { BarChartComponent } from './charts/bar-chart/bar-chart.component';
import { ChartsModule } from 'ng2-charts';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    DashboardComponent,
    BaseChartComponent,
    LineChartComponent,
    BarChartComponent
  ],
  exports: [DashboardComponent],
  imports: [
    CommonModule,
    ChartsModule,
    HttpClientModule
  ]
})
export class DashboardModule { }
