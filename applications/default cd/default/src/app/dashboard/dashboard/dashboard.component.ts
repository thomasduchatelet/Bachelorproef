import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, DoCheck, OnChanges, OnInit, ɵdetectChanges } from '@angular/core';
import { ReplaySubject, Subject, timer } from 'rxjs';
import { ChartSetting } from '../models/chart-setting';
import { ChartType } from '../models/chart-type.enum';
import { ChartSettingsService } from '../services/chart-settings.service';

@Component({
  selector: 'app-dashboard',
  // changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit , DoCheck{
  readonly amountOfCharts = 1;
  chartSettings: ChartSetting[] = [];
  private counter$ = timer(0,1000);
  public listen: ReplaySubject<boolean> = new ReplaySubject();
  public cycles = 0;
  private prevCycles = 0;
  private prevCycleTime = Date.now();
  public cyclesPerSecond = 0;
  public latency = 0;

  constructor(private _chartSettingsService: ChartSettingsService, private _http: HttpClient, private _changeDetectorRef: ChangeDetectorRef){
    this.counter$.subscribe(() => {
      let duration = (Date.now() - this.prevCycleTime) / 1000;
      this.cyclesPerSecond = Math.round((this.cycles - this .prevCycles) / duration );
      this.prevCycles = this.cycles;
      this.prevCycleTime = Date.now();
      this.latency = Math.round((duration - 1) * 1000);
    });
  }
  ngDoCheck(): void {
    this.cycles++;
  }
  ngOnInit() {
    for(let i = 0; i < this.amountOfCharts; i++)
      this.chartSettings = this.chartSettings.concat(this._chartSettingsService.chartSettings);
    this.startHttpRequest();
    this.listen.next(true);
  }

  private startHttpRequest = () => {
    this._http.get('https://localhost:5001/api/chart')
      .subscribe(res => {
        console.log(res);
      })
  }

  public addRow(){
    console.log("addrow clicked");
    this.chartSettings = this.chartSettings.concat(this._chartSettingsService.chartSettings);
  }

  public removeListeners(){
    this.listen.next(false);
  }
  public addListeners(){
    this.listen.next(true);
  }

}
