/**
 * curve Page
 * date:2016-08-06
 * @Auth:mjliu
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  WebView
} from 'react-native';


class Curve extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <WebView 
        source={{uri: 'http://10.107.31.216:8888/'}}
        style={{marginTop: 20}}
        // scalesPageToFit={true}
      />
    );
  }
}

const styles = StyleSheet.create({
  
});

module.exports = Curve;
