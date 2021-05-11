import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions  } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { BaseChartComponent } from '../base-chart/base-chart.component';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent extends BaseChartComponent implements OnInit {
  dataSet: ChartDataSets[] = [];
  readonly type = 'line';

  constructor() {
    super();
  }

  ngOnInit() {
  }

}
