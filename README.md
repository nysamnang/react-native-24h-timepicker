# react-native-24h-timepicker

[![npm version](https://badge.fury.io/js/react-native-24h-timepicker.svg)](//npmjs.com/package/react-native-24h-timepicker) [![npm downloads](https://img.shields.io/npm/dm/react-native-24h-timepicker.svg)
](//npmjs.com/package/react-native-24h-timepicker)

### Screenshot

![screenshot](https://raw.githubusercontent.com/NYSamnang/stock-images/master/react-native-24h-timepicker/RN24TPK-IOS.gif)

## Installation

```
npm i react-native-24h-timepicker --save
```

### or

```
yarn add react-native-24h-timepicker
```

## Example

```jsx
import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import TimePicker from "react-native-24h-timepicker";

class Example extends Component {
  constructor() {
    super();
    this.state = {
      time: ""
    };
  }

  onCancel() {
    this.TimePicker.close();
  }

  onConfirm(hour, minute) {
    this.setState({ time: `${hour}:${minute}` });
    this.TimePicker.close();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>REACT NATIVE</Text>
        <Text style={styles.text}>24 HOURS FORMAT TIMEPICKER</Text>
        <TouchableOpacity
          onPress={() => this.TimePicker.open()}
          style={styles.button}
        >
          <Text style={styles.buttonText}>TIMEPICKER</Text>
        </TouchableOpacity>
        <Text style={styles.text}>{this.state.time}</Text>
        <TimePicker
          ref={ref => {
            this.TimePicker = ref;
          }}
          onCancel={() => this.onCancel()}
          onConfirm={(hour, minute) => this.onConfirm(hour, minute)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff",
    paddingTop: 100
  },
  text: {
    fontSize: 20,
    marginTop: 10
  },
  button: {
    backgroundColor: "#4EB151",
    paddingVertical: 11,
    paddingHorizontal: 17,
    borderRadius: 3,
    marginVertical: 50
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600"
  }
});

export default Example;
```

## Props

| Prop           | Type     | Description                                    | Default |
| -------------- | -------- | ---------------------------------------------- | ------- |
| maxHour        | number   | Maximum of hour                                | 23      |
| maxMinute      | number   | Maximum of minute                              | 59      |
| hourInterval   | number   | The interval at which hours can be selected.   | 1       |
| minuteInterval | number   | The interval at which minutes can be selected. | 1       |
| hourUnit       | string   | Add extra text to hour                         | ""      |
| minuteUnit     | string   | Add extra text to minute                       | ""      |
| selectedHour   | string   | Default hour                                   | "0"     |
| selectedMinute | string   | Default minute                                 | "00"    |
| itemStyle      | object   | Item text style                                | {}      |
| textCancel     | string   | Cancel button text                             | Cancel  |
| textConfirm    | string   | Confirm button text                            | Confirm |
| onCancel       | function | Event on Cancel button                         |         |
| onConfirm      | function | Event on Confirm button                        |         |

## Methods

| Method Name | Description      |
| ----------- | ---------------- |
| open        | Open TimePicker  |
| close       | Close TimePicker |

### Note

Always set `ref` to `TimePicker` and call each method by using `this.TimePicker.methodName()` like example above.

## License

This project is licensed under the MIT License - see the [LICENSE.md](https://github.com/NYSamnang/react-native-24h-timepicker/blob/master/LICENSE) file for details

## Author

Made with ❤️ by [NY Samnang](https://github.com/NYSamnang).
