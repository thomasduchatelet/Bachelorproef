import { Component, OnInit } from '@angular/core';
import { BaseChartComponent } from '../base-chart/base-chart.component';

@Component({
  selector: 'app-scatter-chart',
  templateUrl: './scatter-chart.component.html',
  styleUrls: ['./scatter-chart.component.css']
})
export class ScatterChartComponent extends BaseChartComponent implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {
  }

}
