/**
 * ActionSheetIOS Demo
 * date:2016-08-09
 * @Auth:mjliu
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ActionSheetIOS,
} from 'react-native';

class Awesome extends Component {
  render() {
    return (
      <View style={styles.flex}>
        <Text style={styles.item} onPress={this.tip}>showActionSheetWithOption</Text>
        <Text style={styles.item} onPress={this.share}>showShareActionSheetWithOption</Text>
      </View>
    );
  }
  tip() {
    ActionSheetIOS.showActionSheetWithOptions(
      {
        options: ['拨打电话', '发送邮件', '发送短信', '取消'],
        cancelButtonIndex: 3,
        destructiveButtonIndex: 0,
        title: '如何操作',
        message: '要想清楚'
      },
      function (index) {
        alert(index);
      }
    );
  }
  share() {
    ActionSheetIOS.showShareActionSheetWithOptions({
      message: 'facebook code web',
      url: 'https://code.facebook.com'
    },
      function (err) {
        alert(err);
      },
      function (suc) {
        alert(suc);
      }
    );
  }
}

const styles = StyleSheet.create({
  flex: {
    flex: 1,
    marginTop: 30,
  },
  item: {
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
    marginTop: 10,
    borderWidth:1,
    borderColor:'#ddd',
    height:30,
    padding:6
  }
});

AppRegistry.registerComponent('Awesome', () => Awesome);
