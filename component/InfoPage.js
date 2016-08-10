/**
 * info Page
 * date:2016-08-01
 * @Auth:lmj
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  NavigatorIOS,
} from 'react-native';

import InfoDetail from './InfoDetail.js';

class InfoPage extends Component {
  render() {
    return (
      <NavigatorIOS
        navigator={this.props.navigator}
        style={{ flex: 1 }}
        initialRoute={{
          component: InfoDetail,
          title: '个人中心',
          passProps: {},
        }}
        ></NavigatorIOS>
    );
  }
}

const styles = StyleSheet.create({
});

module.exports = InfoPage;
