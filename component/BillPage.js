/**
 * Bill Page
 * date:2016-08-06
 * @Auth:mjliu
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  NavigatorIOS,
} from 'react-native';

import OrderList from './OrderList.js';

class Billpage extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <NavigatorIOS 
        navigator={this.props.navigator}
        style={styles.container}
        initialRoute={{
          component:OrderList,
          title:'运单列表',
          passProps:{},
        }}
      ></NavigatorIOS>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex:1,
  },
});

module.exports = Billpage;
