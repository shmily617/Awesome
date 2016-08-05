/**
 * Sample tab-navigator App
 * date:2016-08-03
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

 import TabNavigator from 'react-native-tab-navigator';

class Awesome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab:'home',
    };
  }

  render() {
    var homeView = (
      <View style={styles.container1}>
        <Text style={{fontSize:20}}>
          Home page!
        </Text>
      </View>
    );
    var profileView = (
      <View style={styles.container2}>
        <Text style={{fontSize:20}}>
          profileView page!
        </Text>
      </View>
    );
    return (
      <TabNavigator tabBarStyle={{ height:50}}>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'home'}
          title="Home"
          renderIcon={() => <Image style={styles.img} source={require('./Img/about.png')} />}
          renderSelectedIcon={() => <Image style={styles.img} source={require('./Img/right.png')} />}
          badgeText="1"
          onPress={() => this.setState({ selectedTab: 'home' })}>
          {homeView}
        </TabNavigator.Item>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'profile'}
          title="Profile"
          renderIcon={() => <Image style={styles.img} source={require('./Img/ann.png')} />}
          renderSelectedIcon={() => <Image style={styles.img} source={require('./Img/up.png')} />}
          renderBadge={() => <Text>lmj</Text>}
          onPress={() => this.setState({ selectedTab: 'profile' })}>
          {profileView}
        </TabNavigator.Item>
      </TabNavigator>
    );
  }
}

const styles = StyleSheet.create({
 container1: {
   flex:1,
   justifyContent: 'center',
   alignItems: 'center',
   backgroundColor: '#F5FCFF',
 },
 container2: {
   flex:1,
   justifyContent: 'center',
   alignItems: 'center',
   backgroundColor: '#3F51B5',
 },
 img: {
   height: 30,
   width:30,
 },
});

AppRegistry.registerComponent('Awesome', () => Awesome);
