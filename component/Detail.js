/**
 * Detail Page
 * date:2016-08-08
 * @Auth:mjliu
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  ListView,
  TouchableOpacity,
} from 'react-native';

import Curve from './Curve.js';

class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.header}>
            <View style={styles.uper}>
              <View style={styles.leftContainer}>
                <Text style={styles.title}>运单号：</Text>
                <Text style={styles.text}>运单状态</Text>
                <Text style={styles.text}>始发地：</Text>
                <Text style={styles.text}>目的地：</Text>

              </View>
              <View style={styles.rightContainer}>
                <View style={styles.circle}>
                  <Text style={{color:'blue'}}>配送中</Text>
                </View>
              </View>
            </View>
            <View style={styles.downer}>
              <View style={styles.leftContainer}>
                <Text style={styles.text}>温度：</Text>
                <Text style={styles.text}>告警：</Text>
                <Text style={styles.text}>时间：</Text>
              </View>
              <TouchableOpacity style={styles.rightContainer}>
                <Text style={{color:'grey',fontSize:30}} 
                onPress={this._gotoView.bind(this)}>></Text>
              </TouchableOpacity>
            </View>
          </View>

        </View>
      </ScrollView>
    );
  }
   _gotoView() {
    this.props.navigator.push({
      component: Curve,
      title: '温度详情',
    });
  }
}


const styles = StyleSheet.create({
  container: {
   flex:1,
   backgroundColor:'#F5F5F5',
  },
  header: {
    backgroundColor:'#f8bb86',
    height: 200, 
    justifyContent: 'flex-start',
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
    marginTop: 10,
  },
  uper: {
    flexDirection: 'row',
    borderBottomWidth:1,
    borderColor: 'grey',
    height:120,
  },
  downer: {
    flexDirection: 'row',
    height:80,
  },
  rightContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  leftContainer: {
    flex: 3,
    justifyContent: 'center',
    marginLeft: 10,
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
    marginTop:10,
    color: '#fff',
  },
  text: {
    fontSize: 14,
    color: '#fff',
    marginBottom: 8,
  },
  circle: {
    width: 60,
    height: 60,
    backgroundColor: '#f8dd86',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  }

});

module.exports = Detail;
