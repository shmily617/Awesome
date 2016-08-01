/**
 * Sample Image Change App
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
  Image
} from 'react-native';

var imgs=['https://www.baidu.com/img/bd_logo1.png',
          'https://www.google.com.hk/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png',
          'https://avatars0.githubusercontent.com/u/9589467?v=3&s=460']

class Awesome extends Component {
  render() {
    return (
      
        <MyImage images={imgs}></MyImage>
      
    );
  }
}

class MyImage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count:1,
      images:this.props.images,
    };
  }

  goLast() {
    var count = this.state.count;
    count --;
    if (count >= 0) {
      this.setState({
        count:count,
      });
    }
  }

  goNext() {
    var count = this.state.count;
    count ++;
    if (count < imgs.length) {
      this.setState({
        count:count,
      });
    }
  }

  render() {
    return(
      <View style={styles.container}>
        <View style={[styles.imgContainer,styles.center]}>
          <Image source={{uri:this.state.images[this.state.count]}} 
          resizeMode='contain' style={styles.img}
          ></Image>
        </View>

        <View style={styles.btnContainer}>
          <TouchableOpacity style={styles.btn} onPress={this.goLast.bind(this)}>
            <Text style={styles.text}>上一张</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn} onPress={this.goNext.bind(this)}>
            <Text style={styles.text}>下一张</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
   flex:1,
   alignItems:'center',
   marginTop:50
  },
  center:{
    alignItems:'center',
    justifyContent:'center'
  },
  imgContainer:{
    height:250,
    width:250,
    borderColor:"#ccc",
    borderWidth:1,
    borderRadius:5,
  },
  img:{
    height:200,
    width:200,
  },
  btnContainer:{
    flexDirection:'row',
    marginTop:20,
    justifyContent:'center',
  },
  btn:{
    width:60,
    height:30,
    backgroundColor:'#0089ff',
    borderRadius:5,
    justifyContent:'center',
    alignItems:'center',
    marginLeft:25,
  },
   text:{
    color:'#fff',
    fontSize:15,
    fontWeight:'bold'
  },
});

AppRegistry.registerComponent('Awesome', () => Awesome);
