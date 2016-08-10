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
  TouchableOpacity,
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import About from './About.js';
import Location from './Location.js';
class ItemCell extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <TouchableOpacity style={styles.flex}
          onPress={this._gotoView.bind(this, this.props.title) }>
          <View style={styles.left}>
            <Icon name={this.props.icon} size={30} color={this.props.color}/>
            <Text style={styles.text}>{this.props.title}</Text>
          </View>
          <View style={styles.right}>
            <Icon name="ios-arrow-forward" size={30} color="#ccc" />
          </View>
        </TouchableOpacity>
      </View >
    );
  }
  _gotoView(title) {
    if (title == '地理位置') {
      this.props.navigator.push({
        component: Location,
        title: title,
      });
    } else {
      this.props.navigator.push({
        component: About,
        title: title,
      });
    }
  }

}

const styles = StyleSheet.create({
  flex: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    marginBottom: 2,
    height: 40,
  },
  text: {
    color: 'grey',
    marginLeft: 20,
    padding: 8,
    fontSize: 16
  },
  left: {
    flex: 1,
    flexDirection: 'row',
    padding: 6,
    marginLeft: 10,
  },
  right: {
    flex: 1,
    alignItems: 'flex-end',
    marginRight: 10,
    padding: 6,
  }
});

module.exports = ItemCell;
