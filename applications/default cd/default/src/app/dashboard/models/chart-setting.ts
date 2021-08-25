import { ChartProperties } from "./chart-properties";
import { ChartType, ListenerType } from "./chart-type.enum";

export class ChartSetting {
    title: string = "";
    type: ChartType = ChartType.Line;
    typeString: string = 'line';
    listenerType: ListenerType = 0;
    properties: ChartProperties = {} as ChartProperties;
}
