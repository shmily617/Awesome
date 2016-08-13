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
  TabBarIOS,
  ScrollView,
  Image
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

const Yuanqi = require('./Yuanqi');
var Dimensions = require('Dimensions')
var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height - 70;

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
          title="精选"
          iconName="ios-home-outline"
          selectedIconName="ios-home"
          onPress={this.select.bind(this, 'bill')} 
          selected={this.state.tab === 'bill'}>
          <Yuanqi></Yuanqi>
        </Icon.TabBarItem>
        <Icon.TabBarItem
          title="发现"
          iconName="ios-eye-outline"
          selectedIconName="ios-eye"
          onPress={this.select.bind(this, 'bluetooth')} 
          selected={this.state.tab === 'bluetooth'}>
          <ScrollView style={styles.flex}>
            <Image style={{width:width, height:height}} source={require("./Img/soon.jpg")}/>            
          </ScrollView>
        </Icon.TabBarItem>
        <Icon.TabBarItem
          title="购物车"
          iconName="ios-cart-outline"
          selectedIconName="ios-cart"
          onPress={this.select.bind(this, 'cart')} 
          selected={this.state.tab === 'cart'}>
          <ScrollView style={styles.flex}>
            <Image style={{width:width, height:height}} source={require("./Img/soon.jpg")}/>            
          </ScrollView>
        </Icon.TabBarItem>
        <Icon.TabBarItem
          title="我的"
          iconName="ios-contact-outline"
          selectedIconName="ios-contact"
          onPress={this.select.bind(this, 'info')} 
          selected={this.state.tab === 'info'}>
          <ScrollView style={styles.flex}>
            <Image style={{width:width, height:height}} source={require("./Img/soon.jpg")}/>            
          </ScrollView>
        </Icon.TabBarItem>
      </TabBarIOS>
    );
  }
}

const styles = StyleSheet.create({

});

AppRegistry.registerComponent('Awesome', () => Awesome);
