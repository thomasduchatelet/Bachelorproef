import { Injectable } from '@angular/core';
import { ChartSetting } from '../models/chart-setting';
import { ChartType } from '../models/chart-type.enum';

@Injectable({
  providedIn: 'root'
})
export class ChartSettingsService {

  constructor() { }

  get chartSettings(): ChartSetting[]{
    return [
      {title: 'line1', type: ChartType.Line},
      {title: 'line2', type: ChartType.Line},
      {title: 'line3', type: ChartType.Line},
      {title: 'line4', type: ChartType.Line},
      {title: 'line5', type: ChartType.Line},
      {title: 'Bar1', type: ChartType.Bar},
      {title: 'Bar2', type: ChartType.Bar},
      {title: 'Bar3', type: ChartType.Bar},
      {title: 'Bar4', type: ChartType.Bar},
      {title: 'Bar5', type: ChartType.Bar},
      {title: 'Scatter1', type: ChartType.Scatter},
      {title: 'Scatter2', type: ChartType.Scatter},
      {title: 'Scatter3', type: ChartType.Scatter},
      {title: 'Scatter4', type: ChartType.Scatter},
      {title: 'Scatter5', type: ChartType.Scatter},
      {title: 'Pie1', type: ChartType.Pie},
      {title: 'Pie2', type: ChartType.Pie},
      {title: 'Pie3', type: ChartType.Pie},
      {title: 'Pie4', type: ChartType.Pie},
      {title: 'Pie5', type: ChartType.Pie}
    ];
  }
}
