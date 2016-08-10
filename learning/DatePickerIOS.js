/**
 * DatePickerIOS Demo
 * date:2016-08-08
 * @Auth:mjliu
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  DatePickerIOS,
} from 'react-native';

class Awesome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date1: new Date(),
      date2: new Date(),
      date3: new Date(),
    }
  }

  onDateChange1(date) {
    this.setState({
      date1: date,
    });
  }
  onDateChange2(date) {
    this.setState({
      date2: date,
    });
  }
  onDateChange3(date) {
    this.setState({
      date3: date,
    });
  }
  render() {
    return (
      <View style={styles.flex}>
        <DatePickerIOS style={styles.flex} date={this.state.date1} mode="datetime"
        onDateChange={d=>this.onDateChange1(d)} />
        <DatePickerIOS style={styles.flex} date={this.state.date2} mode="time"
        onDateChange={d=>this.onDateChange2(d)} />
        <DatePickerIOS style={styles.flex} date={this.state.date3} mode="date"
        onDateChange={d=>this.onDateChange3(d)} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  flex:{
    flex: 1,
  }
});

AppRegistry.registerComponent('Awesome', () => Awesome);
