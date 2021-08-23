import { Component, Input, OnInit } from '@angular/core';
import { Chart, ChartOptions, ChartPluginsOptions, plugins } from 'chart.js';
import { Label } from 'ng2-charts';
import { ChartSetting } from '../../models/chart-setting';
import { ChartData, ChartDataSet, ChartModel } from '../../models/chart-models';
import { ChartType, ListenerType } from '../../models/chart-type.enum';
import { formatDate } from '@angular/common';
import * as signalR from '@aspnet/signalr';

@Component({
  selector: 'app-base-chart',
  template:
  `<div class="chart-wrapper">
      <canvas baseChart
          [datasets]="getData()"
          [labels]="getLabels()"
          [options]="options"
          [plugins]="plugins"
          [legend]="legend"
          [chartType]="type">
      </canvas>
    </div>`
})
export class BaseChartComponent implements OnInit {
  @Input() chartSettings: ChartSetting;
  private _hubConnection: signalR.HubConnection;
  public data: ChartData = new ChartData();

  ngOnInit(): void {

    this.buildHubConnection();
    this.startHubConnection();
    this.addChartDataListener();
  }

  public getData(){
    switch (this.chartSettings.type) {
      case ChartType.Bar:
        return this.data.averageData;
      case ChartType.Line:
        return this.data.timeSeriesData;
      default:
        return new ChartDataSet();
    }
  }

  public getLabels(){
    switch (this.chartSettings.type) {
      case ChartType.Bar:
        return this.labels;
      case ChartType.Line:
        return this.data.timeLabels;
      default:
        return [];
    }
  }

  private addChartDataListener(){
    switch (this.chartSettings.listenerType) {
      case ListenerType.Temperature:
        this.addListener('tempData');
        break;
      case ListenerType.Pressure:
        this.addListener('pressData');
        break;
      case ListenerType.Wind:
        this.addListener('windData');
        break;
      case ListenerType.Humidity:
        this.addListener('humData');
        break;
      default:
        console.log("listener type not found");
        break;
    }
  }

  private addListener(subject: string) {
    this._hubConnection.on(subject, (response: ChartModel[]) =>
    {
      response.forEach(data =>
        {
          let index = this.data.timeSeriesData.indexOf(this.data.timeSeriesData.find(barData => barData.label === data.label))
          let time = formatDate(data.timeStamp, 'HH:mm:ss:SSS', 'en-us');
          if(this.data.timeLabels.indexOf(time) == -1) this.data.timeLabels.push(time);
          if(index > -1){
            this.data.timeSeriesData[index].data.push(data.data)
            this.data.averageData[index].data = [Math.round(this.data.timeSeriesData[index].data.reduce((a,b) => a + b ,0) / this.data.timeSeriesData[index].data.length)]
          } else {
            this.data.timeSeriesData.push({
              data: [data.data],
              label: data.label
            });
          }
          if(this.data.timeSeriesData[index].data.length > 30){
            this.data.timeSeriesData[index].data = this.data.timeSeriesData[index].data.slice(1);
          }
          if(this.data.timeLabels.length > 30){
            this.data.timeLabels.shift()
          }
        });
    });
  }

  private buildHubConnection(){
    this._hubConnection = new signalR.HubConnectionBuilder()
    .withUrl('https://localhost:5001/chart')
    .build();
  }

  private startHubConnection(){
    this._hubConnection.start()
    .then(() => console.log('Connection started'))
    .catch(err => console.log('Error while starting connection: ' + err));
  }


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

  get type():  string{
    return this.chartSettings.typeString;
  }

}

