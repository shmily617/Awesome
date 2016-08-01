/**
 * Sample Touchable App
 * date:2016-07-26
 * @Auth:lmj
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TouchableOpacity,
  TouchableWithoutFeedback
} from 'react-native';


class Awesome extends Component {
  show(text) {
    alert(text);
  }
  render() {
    return (
      <View style={styles.container1}>
        <View>
          <TouchableHighlight onPress={this.show.bind(this,'开始使用React Native - react native 中文网')}
          underlayColor='#e1f6ff'>
            <Text style={styles.item}>开始使用React Native - react native 中文网</Text>
          </TouchableHighlight>
          <TouchableOpacity style={styles.btn} onPress={this.show.bind(this,'如何评价React Native？ - Android 开发- 知乎')}>
            <Text style={styles.search}>如何评价React Native？</Text>
          </TouchableOpacity>
          <TouchableWithoutFeedback onPress={this.show.bind(this,' Android 开发- 知乎')}>
           <Text style={styles.item}>Android 开发- 知乎</Text>    
          </TouchableWithoutFeedback>
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container1: {
   flex:1,
   marginTop:25
  },
  btn:{
    width:225,
    height:45,
    backgroundColor:'#18b4ff',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:15,
    marginLeft:25,
  },
  search:{
    color:'#fff',
    fontSize:15,
    fontWeight:'bold'
  },
  item:{
    paddingTop:5,
    paddingBottom:5,
    padding:10,
    fontSize:15,
    color:'#434343',
    borderColor:'#ddd',
    borderBottomWidth:1,
  }

});

AppRegistry.registerComponent('Awesome', () => Awesome);
