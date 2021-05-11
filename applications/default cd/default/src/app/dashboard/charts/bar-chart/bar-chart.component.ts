import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import { BaseChartComponent } from '../base-chart/base-chart.component';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent extends BaseChartComponent implements OnInit {
  dataSet: ChartDataSets[] = [];
  readonly type = 'bar';

  constructor() {
    super();
  }

  ngOnInit() {
  }

}
