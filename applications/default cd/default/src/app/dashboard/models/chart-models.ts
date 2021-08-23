import { ChartDataSets } from "chart.js";
import { Label } from "ng2-charts";

export class ChartData {
  timeSeriesData: ChartDataSet[] = [{label: "A", data: []},{label: "B", data: []},{label: "C", data: []},{label: "D", data: []}];
  averageData: ChartDataSets[] = [{label: "A", data: []},{label: "B", data: []},{label: "C", data: []},{label: "D", data: []}];
  timeLabels: Label[] = [];
}

export class ChartDataSet {
  label: string;
  data: number[]
}


export interface ChartModel {
  data: number,
  label: string,
  timeStamp: Date
}
