/**
 * info Page
 * date:2016-08-01
 * @Auth:lmj
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  PixelRatio
} from 'react-native';

class InfoPage extends Component {
  render() {
    return (
      <View style={styles.container}>
       <Text style={styles.font}>
         <Text style={styles.font1}>網易</Text>
         <Text style={styles.font2}>新闻</Text>
         <Text>有态度°</Text>
       </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop:25,
    height:50,
    borderBottomWidth:3/PixelRatio.get(),
    borderColor:'#ef2d36',
    alignItems:'center',
  },
  font:{
    fontSize:25,
    fontWeight:'bold',
    textAlign:'center',
  },
  font1:{
    color:'#cd1d1c',
  },
  font2:{
    color:'#fff',
    backgroundColor:'#cd1d1c',
  }
});

module.exports = InfoPage;
