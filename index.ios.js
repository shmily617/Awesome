/**
 * listView & router Page
 * date:2016-08-06
 * @Auth:mjliu
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  NavigatorIOS,
} from 'react-native';

import OrderList from './component/OrderList.js';



class Awesome extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  

  render() {
    return (
      <NavigatorIOS 
        navigator={this.props.navigator}
        style={{flex:1}}
        initialRoute={{
          component:OrderList,
          title:'运单列表',
          passProps:{},
        }}
      ></NavigatorIOS>
    );
  }
}

class List extends Component{
  render() {
    return(
      <ScrollView style={{flex:1}}>
        <Text style={styles.Items} onPress={this.goTo.bind(this)}>※ 豪华邮轮济州岛3日游</Text>
        <Text style={styles.Items} onPress={this.goTo.bind(this)}>※ 豪华邮轮台湾3日游</Text>
        <Text style={styles.Items} onPress={this.goTo.bind(this)}>※ 豪华邮轮地中海8日游</Text>
      </ScrollView>
    );
  }

  goTo(){
    this.props.navigator.push({
      component: Detail,
      title: '邮轮详情',
      rightButtonTitle: '购物车',
      onRightButtonPress: function(){
        alert('进入我的购物车');
      }
    });
  }
}

class Detail extends Component{
  render() {
    return(
      <ScrollView style={styles.container}>
        <Text>详情页</Text>
        <Text>尽管信息很少，但这就是详情页</Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex:1,
  },
  Items:{
    lineHeight:30,
    fontSize:16,
    marginLeft:10,
    marginRight:10
  }
});

AppRegistry.registerComponent('Awesome', () => Awesome);
