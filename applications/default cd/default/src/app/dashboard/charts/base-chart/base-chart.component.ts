import { Component, Input, OnInit } from '@angular/core';
import { ChartSetting } from '../../models/chart-setting';

@Component({
  selector: 'app-base-chart',
  templateUrl: './base-chart.component.html',
  styleUrls: ['./base-chart.component.css']
})
export class BaseChartComponent implements OnInit {
  @Input() chartSettings: ChartSetting;

  constructor() { }

  ngOnInit() {
  }

}
