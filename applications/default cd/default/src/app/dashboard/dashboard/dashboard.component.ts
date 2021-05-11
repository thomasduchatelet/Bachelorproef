import { Component, OnInit } from '@angular/core';
import { ChartSetting } from '../models/chart-setting';
import { ChartType } from '../models/chart-type.enum';
import { ChartSettingsService } from '../services/chart-settings.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  chartSettings: ChartSetting[] = [];

  constructor(private _chartSettingsService: ChartSettingsService) { }

  ngOnInit() {
    console.log('dashboard')
    this.chartSettings = this._chartSettingsService.chartSettings;
  }

  // This is a trick to expose the enum to the view so no magic numbers are needed
  get chartTypes(): typeof ChartType {
    return ChartType;
  }

}
