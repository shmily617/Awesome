/**
 * Geolocation Demo
 * date:2016-08-10
 * @Auth:mjliu
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import Geolocation from 'Geolocation';

class Awesome extends Component {
  render() {
    return (
      <View>
      <Text onPress={this.show} style={styles.btn} >获取位置</Text>
      </View>
    );
  }
  show() {
    Geolocation.getCurrentPosition((data) => {
      alert(JSON.stringify(data));
    },() => {alert("获取位置失败！");})
  }
}

const styles = StyleSheet.create({
  btn: {
    marginLeft: 10,
    marginRight: 10,
    marginTop: 50,
    backgroundColor: '#3BC1FF',
    color:'#fff',
    lineHeight:24,
    textAlign: 'center',
    height:35
  },
});

AppRegistry.registerComponent('Awesome', () => Awesome);
