/**
 * Sample picker and progressbar App
 * date:2016-07-27
 * @Auth:lmj
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Picker,
  PickerIOS,
  ProgressViewIOS,
} from 'react-native';


class Awesome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      language:null
    };
  }

  render() {
    return(
      <View style={styles.container}>
        <View style={{flex:1}}>
          <Text>Picker组件</Text>
          <Picker
            selectedValue={this.state.language}
            onValueChange={lang => this.setState({language:lang})}
            mode='dropdown' >
            <Picker.Item style={styles.picker} lable='java' value='Java'/>
            <Picker.Item style={styles.picker} lable='js' value='JavaScript'/>
            <Picker.Item style={styles.picker} lable='c#' value='C# language'/>
            <Picker.Item style={styles.picker} lable='PHP' value='PHP develop'/>
          </Picker>
          <Text>{this.state.language}</Text>
        </View>
        <View style={{flex:1}}>
          <ProgressViewIOS style={styles.progressView} progressTintColor="dark" progress={0}/>
          <ProgressViewIOS style={styles.progressView} progressTintColor="purple" progress={0.2}/>
          <ProgressViewIOS style={styles.progressView} progressTintColor="red" progress={0.4}/>
          <ProgressViewIOS style={styles.progressView} progressTintColor="orange" progress={0.6}/>
          <ProgressViewIOS style={styles.progressView} progressTintColor="yellow" progress={0.8}/>
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
  progressView: {
    marginTop: 20,
  }
  // picker:{
  //   color:"#ccc"
  // }
});

AppRegistry.registerComponent('Awesome', () => Awesome);
