import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, TouchableOpacity, Text, Picker } from "react-native";
import RBSheet from "react-native-raw-bottom-sheet";
import styles from "./styles";

class TimePicker extends Component {
  constructor(props) {
    super(props);
    const { selectedHour, selectedMinute, selectedSecond } = props;
    this.state = { selectedHour, selectedMinute, selectedSecond };
  }

  componentWillReceiveProps(nextProps) {
    const { selectedHour, selectedMinute, selectedSecond } = nextProps;
    if (
      selectedHour !== this.state.selectedHour ||
      selectedMinute !== this.state.selectedMinute || 
      selectedSecond !== this.state.selectedSecond
    ) {
      this.setState({ selectedHour, selectedMinute, selectedSecond });
    }
  }

  getHourItems = () => {
    const items = [];
    const { maxHour, hourInterval, hourUnit } = this.props;
    const interval = maxHour / hourInterval;
    for (let i = 0; i <= interval; i++) {
      const value = i * hourInterval;
      const new_value = value < 10 ? `0${value}` : `${value}`;
      const item = (
        <Picker.Item
          key={value}
          value={new_value}
          label={new_value + hourUnit}
        />
      );
      items.push(item);
    }
    return items;
  };

  getMinuteItems = () => {
    const items = [];
    const { maxMinute, minuteInterval, minuteUnit } = this.props;
    const interval = maxMinute / minuteInterval;
    for (let i = 0; i <= interval; i++) {
      const value = i * minuteInterval;
      const new_value = value < 10 ? `0${value}` : `${value}`;
      const item = (
        <Picker.Item
          key={value}
          value={new_value}
          label={new_value + minuteUnit}
        />
      );
      items.push(item);
    }
    return items;
  };

  getSecondItems = () => {
    const items = [];
    const { maxSecond, secondInterval, secondUnit } = this.props;
    const interval = maxSecond / secondInterval;
    for (let i = 0; i <= interval; i++) {
      const value = i * secondInterval;
      const new_value = value < 10 ? `0${value}` : `${value}`;
      const item = (
        <Picker.Item
          key={value}
          value={new_value}
          label={new_value + secondUnit}
        />
      );
      items.push(item);
    }
    return items;
  };

  onValueChange = (selectedHour, selectedMinute, selectedSecond) => {
    this.setState({ selectedHour, selectedMinute, selectedSecond });
  };

  onCancel = () => {
    if (typeof this.props.onCancel === "function") {
      const { selectedHour, selectedMinute, selectedSecond } = this.state;
      this.props.onCancel(selectedHour, selectedMinute, selectedSecond);
    }
  };

  onConfirm = () => {
    if (typeof this.props.onConfirm === "function") {
      const { selectedHour, selectedMinute, selectedSecond } = this.state;
      this.props.onConfirm(selectedHour, selectedMinute, selectedSecond);
    }
  };

  close = () => {
    this.RBSheet.close();
  };

  open = () => {
    this.RBSheet.open();
  };

  renderHeader = () => {
    const { textCancel, textConfirm } = this.props;
    return (
      <View style={styles.header}>
        <TouchableOpacity onPress={this.onCancel} style={styles.buttonAction}>
          <Text style={[styles.buttonText, styles.buttonTextCancel]}>
            {textCancel}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.onConfirm} style={styles.buttonAction}>
          <Text style={styles.buttonText}>{textConfirm}</Text>
        </TouchableOpacity>
      </View>
    );
  };

  renderBody = () => {
    const { selectedHour, selectedMinute, selectedSecond } = this.state;
    return (
      <View style={styles.body}>
        <Picker
          selectedValue={selectedHour}
          style={styles.picker}
          itemStyle={this.props.itemStyle}
          onValueChange={itemValue =>
            this.onValueChange(itemValue, selectedMinute, selectedSecond)
          }
        >
          {this.getHourItems()}
        </Picker>

        <Text style={styles.separator}>:</Text>

        <Picker
          selectedValue={selectedMinute}
          style={styles.picker}
          itemStyle={this.props.itemStyle}
          onValueChange={itemValue =>
            this.onValueChange(selectedHour, itemValue, selectedSecond)
          }
        >
          {this.getMinuteItems()}
        </Picker>

        <Text style={styles.separator}>:</Text>

        <Picker
          selectedValue={selectedSecond}
          style={styles.picker}
          itemStyle={this.props.itemStyle}
          onValueChange={itemValue =>
            this.onValueChange(selectedHour, selectedMinute, itemValue)
          }
        >
          {this.getSecondItems()}
        </Picker>
      </View>
    );
  };

  render() {
    return (
      <RBSheet
        ref={ref => {
          this.RBSheet = ref;
        }}
      >
        {this.renderHeader()}
        {this.renderBody()}
      </RBSheet>
    );
  }
}

TimePicker.propTypes = {
  maxHour: PropTypes.number,
  maxMinute: PropTypes.number,
  maxSecond: PropTypes.number,
  hourInterval: PropTypes.number,
  minuteInterval: PropTypes.number,
  secondInterval: PropTypes.number,
  hourUnit: PropTypes.string,
  minuteUnit: PropTypes.string,
  secondUnit: PropTypes.string,
  selectedHour: PropTypes.string,
  selectedMinute: PropTypes.string,
  selectedSecond: PropTypes.string,
  itemStyle: PropTypes.object,
  textCancel: PropTypes.string,
  textConfirm: PropTypes.string,
  onCancel: PropTypes.func,
  onConfirm: PropTypes.func
};

TimePicker.defaultProps = {
  maxHour: 23,
  maxMinute: 59,
  maxSecond: 59,
  hourInterval: 1,
  minuteInterval: 1,
  secondInterval: 1,
  hourUnit: "",
  minuteUnit: "",
  secondUnit: "",
  selectedHour: "00",
  selectedMinute: "00",
  selectedSecond: "00",
  itemStyle: {},
  textCancel: "Cancel",
  textConfirm: "Done"
};

export default TimePicker;
