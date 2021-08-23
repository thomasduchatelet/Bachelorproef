import { ChartProperties } from "./chart-properties";
import { ChartType, ListenerType } from "./chart-type.enum";

export class ChartSetting {
    title: string;
    type: ChartType;
    typeString: string;
    listenerType: ListenerType;
    properties: ChartProperties;
}
