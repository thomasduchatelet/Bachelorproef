import { Component, Input, OnInit } from '@angular/core';
import { ChartOptions, ChartPluginsOptions } from 'chart.js';
import { Label } from 'ng2-charts';
import { ChartSetting } from '../../models/chart-setting';

@Component({
  selector: 'app-base-chart',
  template: ``
})
export class BaseChartComponent {
  @Input() chartSettings: ChartSetting;

  constructor() { }

  get labels(): Label[]{
    return this.chartSettings.properties.labels;
  }

  get options(): ChartOptions{
    return this.chartSettings.properties.options;
  }

  get plugins(): ChartPluginsOptions[]{
    return this.chartSettings.properties.plugins;
  }

  get legend():  boolean{
    return this.chartSettings.properties.legend;
  }

}
