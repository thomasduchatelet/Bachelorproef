import { ChartProperties } from "./chart-properties";
import { ChartType } from "./chart-type.enum";

export class ChartSetting {
    title: string;
    type: ChartType;
    properties: ChartProperties
}
