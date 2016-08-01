/**
 * Sample FlexBox
 * date:2016-07-20
 * @Auth:mjliu
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  PixelRatio
} from 'react-native';

class Awesome extends Component {
  render() {
    return (
      <View style={{flex:1}}>
       <View style={styles.container}>
        <View style={[styles.item,styles.center]} >
          <Text style={styles.font}>酒店</Text>
        </View>
        <View style={[styles.item,styles.lineLeft]}>
          <View style={[styles.item2,styles.lineCenter]}>
            <Text style={styles.font}>海外酒店</Text>
          </View>
          <View style={styles.item2}>
            <Text style={styles.font}>特惠酒店</Text>
          </View>
        </View>
        <View style={[styles.item,styles.lineLeft]}>
          <View style={[styles.item2,styles.lineCenter]}>
            <Text style={styles.font}>团购</Text>
          </View>
          <View style={styles.item2}>
            <Text style={styles.font}>客栈，公寓</Text>
          </View>
         </View>
       </View> 
      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop:200,
    marginLeft:5,
    marginRight:5,
    height:81,
    flexDirection:'row',
    borderRadius:5,
    padding:2,
    backgroundColor:'#ff0067',
  },
  item: {
    flex:1,
    height:84,
  },
  center:{
    justifyContent:'center',
    alignItems:'center',
  },
  item2: {
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  },
  font:{
    color:'#fff',
    fontSize:16,
    fontWeight:'bold',
  },
  lineLeft:{
    borderLeftWidth:1/PixelRatio.get(),
    borderColor:'#fff',
  },
  lineCenter:{
    borderBottomWidth:1/PixelRatio.get(),
    borderColor:'#fff',
  }
});

AppRegistry.registerComponent('Awesome', () => Awesome);
