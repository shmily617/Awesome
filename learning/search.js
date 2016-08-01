/**
 * Sample Search App
 * date:2016-07-26
 * @Auth:lmj
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  PixelRatio
} from 'react-native';

var onePT=1/PixelRatio.get();

class Awesome extends Component {
  render() {
    return (
      <View style={styles.container1}>
      <Search></Search>
      </View>
    );
  }
}

class Search extends Component{
  //show boolean this.state   
  // value 显示的值
  constructor(props) {
    super(props);
    this.state={
      show:false,
      value:null,
    };
  }

  hide(val) {
    this.setState({
      show:false,
      value:val,
    });
  }

  getValue(text) {
    this.setState({
      show:true,
      value:text,
    })
  }

  render() {
    return(
      <View style={{flex:1}}>
        <View style={styles.container}>
          <View style={{flex:1}}>
            <TextInput 
            placeholder="请输入关键词"
            returnKeyType="search" 
            value={this.state.value} 
            onChangeText={this.getValue.bind(this)} 
            style={styles.input}></TextInput>
          </View>
          <View style={styles.btn}>
            <Text style={styles.search} onPress={this.hide.bind(this, this.state.value)} >搜索</Text>
          </View>
        </View>
        {this.state.show? 
          <View style={styles.result}>
            <Text onPress={this.hide.bind(this, this.state.value+'怎样看美剧才学得到英语？')}
            style={styles.item} numberOfLine={1}>{this.state.value}怎样看美剧才学得到英语？</Text>
            <Text onPress={this.hide.bind(this, '开始使用'+this.state.value)}
            style={styles.item} numberOfLine={1}>开始使用{this.state.value}</Text>
            <Text onPress={this.hide.bind(this, this.state.value+'如何评价')}
            style={styles.item} numberOfLine={1}>{this.state.value}如何评价</Text>
            <Text onPress={this.hide.bind(this, '解惑：'+this.state.value)}
            style={styles.item} numberOfLine={1}>解惑：{this.state.value}</Text>
          </View>
        :null}
      </View>  
    );
  }
}

const styles = StyleSheet.create({
  container: {
   
   flexDirection:'row',
   height:45,
  },
  container1: {
   flex:1,
   marginTop:25
  },
  input:{
    height:45,
    borderWidth:1,
    marginLeft:5,
    paddingLeft:5,
    borderColor:'#ccc',
    borderRadius:4
  },
  btn:{
    width:65,
    height:45,
    backgroundColor:'#23beff',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:3,
    marginLeft:-5,
    marginRight:5
  },
  search:{
    color:'#fff',
    fontSize:15,
    fontWeight:'bold'
  },
  result:{
    height:200,
    marginTop:onePT,
    marginLeft:5,
    marginRight:5,
    marginTop:onePT,
    borderColor:'#ccc',
    borderTopWidth:onePT,
  },
  item:{
    paddingTop:5,
    paddingBottom:5,
    padding:10,
    fontSize:15,
    borderColor:'#ddd',
    borderBottomWidth:onePT,
  }

});

AppRegistry.registerComponent('Awesome', () => Awesome);
