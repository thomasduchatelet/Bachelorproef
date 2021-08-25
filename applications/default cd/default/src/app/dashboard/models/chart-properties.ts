import { ChartOptions, ChartPluginsOptions } from "chart.js";
import { Label } from "ng2-charts";

export class ChartProperties {
    labels: Label[] = [];
    options: ChartOptions = {} ;
    plugins: ChartPluginsOptions[] = [];
    legend: boolean = true;
}
