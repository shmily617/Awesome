/**
 * LoadingView Page
 * date:2016-08-12
 * @Auth:mjliu
 */
'use strict';
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ProgressBarAndroid,
  ActivityIndicator,
  Platform,
} from 'react-native';

class LoadingView extends Component {
  render () {
    if (Platform.OS === 'android') {
      return (
        <View style={ styles.loading }>
          <ProgressBarAndroid styleAttr='LargeInverse' color='#3e9ce9'/>
          <Text style={ styles.loadingText }>加载中...</Text>
        </View>
      );
    } else {
      return (
        <View style={ styles.loading }>
          <ActivityIndicator size='large'/>
          <Text style={ styles.loadingText }>加载中...</Text>
        </View>
      );
    }
  }
}

let styles = StyleSheet.create({
  loading: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  loadingText: {
    marginTop: 10,
    textAlign: 'center'
  }
});

export default LoadingView;