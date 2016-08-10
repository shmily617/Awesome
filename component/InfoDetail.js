/**
 * User info Page
 * date:2016-08-10
 * @Auth:mjliu
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import ItemCell from './ItemCell.js';

class InfoDetail extends Component {
  render() {
    return (
      <ScrollView style={styles.flex}>
        <View style={styles.header}>
          <Icon name="ios-contact" size={50} color="#4F8EF7" />
          <Text style={styles.text}>刘梦颉</Text>
          <Text style={styles.text}>18500132617</Text>
        </View>
        <View style={styles.body}>
          <ItemCell navigator={this.props.navigator} title="关于我们" 
          icon="ios-alert" color="#4F8EF7" />
          <ItemCell navigator={this.props.navigator} title="用户设置" 
          icon="ios-heart" color="#4F8EF7" />
          <ItemCell navigator={this.props.navigator} title="意见反馈" 
          icon="md-chatbubbles" color="#4F8EF7" />
          <ItemCell navigator={this.props.navigator} title="地理位置" 
          icon="ios-locate" color="#4F8EF7"/>
        </View>
        <TouchableOpacity style={styles.footer}>
          <Text style={styles.textFooter}>注销</Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  flex: {
    flex: 1,
    backgroundColor: '#efeff4'
  },
  header: {
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    marginTop: 5,
  },
  item: {
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    height: 30,
    padding: 6
  },
  body: {
    marginTop: 20,
  },
  footer: {
    marginTop: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4F8EF7',
    height: 30,
    marginLeft: 20,
    marginRight: 20,
  },
  textFooter: {
    color: '#fff',
    fontSize: 16,
  },
});

module.exports = InfoDetail;
