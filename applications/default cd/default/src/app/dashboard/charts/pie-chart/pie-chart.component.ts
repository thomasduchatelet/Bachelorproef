import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType } from 'chart.js';
import { Label, SingleDataSet } from 'ng2-charts';
import { BaseChartComponent } from '../base-chart/base-chart.component';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent extends BaseChartComponent implements OnInit {
  dataSet: SingleDataSet = [] ;
  readonly type = 'pie';

  constructor() {
    super();
  }

  ngOnInit() {
  }

}
