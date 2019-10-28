import { Component } from "react";
import { StyleProp, ViewStyle } from "react-native";

declare module "react-native-24h-timepicker" {
  export type TimePickerProps = {
    maxHour?: number;
    maxMinute?: number;
    hourInterval?: number;
    minuteInterval?: number;
    hourUnit?: string;
    minuteUnit?: string;
    selectedHour?: string;
    selectedMinute?: string;
    itemStyle: object;
    textCancel?: string;
    textConfirm?: string;
    onCancel?: () => void;
    onConfirm?: () => void;
  };

  class TimePicker extends Component<TimePickerProps> {
    open(): void;
    close(): void;
  }

  export default TimePicker;
}
