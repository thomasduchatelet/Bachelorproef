import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BaseChartComponent } from './charts/base-chart/base-chart.component';
import { LineChartComponent } from './charts/line-chart/line-chart.component';
import { ScatterChartComponent } from './charts/scatter-chart/scatter-chart.component';
import { PieChartComponent } from './charts/pie-chart/pie-chart.component';
import { BarChartComponent } from './charts/bar-chart/bar-chart.component';



@NgModule({
  declarations: [
    DashboardComponent, 
    BaseChartComponent, 
    LineChartComponent, 
    ScatterChartComponent, 
    PieChartComponent, 
    BarChartComponent
  ],
  exports: [DashboardComponent],
  imports: [
    CommonModule,
  ]
})
export class DashboardModule { }
