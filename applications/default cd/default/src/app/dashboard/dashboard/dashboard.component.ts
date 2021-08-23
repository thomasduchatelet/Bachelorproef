import { HttpClient } from '@angular/common/http';
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
  readonly amountOfCharts = 10;
  chartSettings: ChartSetting[] = [];

  constructor(private _chartSettingsService: ChartSettingsService, private _http: HttpClient) { }


  ngOnInit() {
    for(let i = 0; i < this.amountOfCharts; i++)
      this.chartSettings = this.chartSettings.concat(this._chartSettingsService.chartSettings);
    this.startHttpRequest();
  }

  private startHttpRequest = () => {
    this._http.get('https://localhost:5001/api/chart')
      .subscribe(res => {
        console.log(res);
      })
  }


  // This is a trick to expose the enum to the view so no magic numbers are needed
  get chartTypes(): typeof ChartType {
    return ChartType;
  }

}
