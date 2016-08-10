/**
 * User info about Page
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

import Icon from 'react-native-vector-icons/Ionicons';

class About extends Component {
  render() {
    return (
      <View style={styles.flex}>
        <Icon name="logo-github" size={70} color="#4F8EF7" />
        <Text style={styles.title}>ColdChain App</Text>
        <Text style={styles.text}>Github: shmily617</Text>
        <Text style={styles.text}>Emal: shmily617 @bupt.edu.cn</Text>
        <Text style={styles.text}>Wechat: shmily_617</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  flex: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    marginTop: 10,
    marginBottom: 20,
  },
  text: {
    marginTop: 10,
  },
});

module.exports = About;
