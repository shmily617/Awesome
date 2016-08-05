/**
 * Cold Chain App
 * date:2016-08-01
 * @Auth:mjliu
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TabBarIOS
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

const BillPage = require('./component/BillPage');
const BluetoothPage = require('./component/BluetoothPage');
const InfoPage = require('./component/InfoPage');

class Awesome extends Component {
  constructor () {
    super();
    this.state = {
      tab: 'bill'
    }
  }
  select(tabName) {
    this.setState({
      tab: tabName
    });
  };

  render() {
    return (
      <TabBarIOS>
        <Icon.TabBarItem
          title="运单列表"
          iconName="file-text-o"
          selectedIconName="file-text"
          onPress={this.select.bind(this, 'bill')} 
          selected={this.state.tab === 'bill'}>
          <BillPage></BillPage>
        </Icon.TabBarItem>
        <Icon.TabBarItem
          title="蓝牙功能"
          iconName="bluetooth-b"
          selectedIconName="bluetooth"
          onPress={this.select.bind(this, 'bluetooth')} 
          selected={this.state.tab === 'bluetooth'}>
          <BluetoothPage></BluetoothPage>
        </Icon.TabBarItem>
        <Icon.TabBarItem
          title="个人信息"
          iconName="user"
          selectedIconName="user"
          onPress={this.select.bind(this, 'info')} 
          selected={this.state.tab === 'info'}>
          <InfoPage></InfoPage>
        </Icon.TabBarItem>
      </TabBarIOS>
    );
  }
}

const styles = StyleSheet.create({

});

AppRegistry.registerComponent('Awesome', () => Awesome);
