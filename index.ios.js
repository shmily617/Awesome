/**
 * Sample ListView App
 * date:2016-08-01
 * @Auth:mjliu
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

class Awesome extends Component {
  render() {
    let pic = {uri:'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'};
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Hello wordl!
        </Text>
        <Image source={pic}  style={styles.pic}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  pic:{
    width:200,
    height:200
  }
});

AppRegistry.registerComponent('Awesome', () => Awesome);
