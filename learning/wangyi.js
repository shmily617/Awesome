/**
 * Sample Wangyi News App
 * date:2016-07-25
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
const Header = require('./component/head');

class Awesome extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header></Header>
        <List title='火箭军今起换发新军服 衬衣为国际经典色'></List>
        <List title='身份证现可异地办理 微信发红包需经认证'></List>
        <List title='传军队师职干部工资将达3万 国防部澄清'></List>
        <List title='土耳其警方逮捕22名机场袭击事件嫌疑人'></List>

        <ImportantNews 
        news={['曝宜家门店现女子不雅照 下身赤裸逛商场(图)',
        '中国成世界第二大创业市场 7分钟诞生一创业公司中国成世界第二大创业市场 7分钟诞生一创业公司创业市场 7分钟诞生一创业公司',
        '受伤维和战士杨占成重返马里 继续执行维和任务',
        '魅族上线mCycle环保公益活动:回收废旧手机',
        '昆明7万人中考1万人获加分 教育局:都有依据',
        '王儒林不再任山西省委书记:愉快服从组织安排']} >
        </ImportantNews>
      </View>
    );
  }
}

class List extends Component{
  render() {
    return(
      <View style={styles.listItems}>
        <Text style={styles.listItemsFont}>{this.props.title}</Text>
      </View>
    );
  }
}

class ImportantNews extends Component{
  show(title) {
    alert(title);
  }

  render() {
    var newssss=[];
    for(var i in this.props.news) {
      var text=(
        <Text
          onPress={this.show.bind(this,this.props.news[i])}
          numberOfLines={1}
          style={styles.newsItems}
        >{this.props.news[i]}</Text>
      );
      newssss.push(text);
    }

    return(
      <View style={styles.container}>
        <Text style={styles.newsTitle}>今日要闻</Text>  
        {newssss}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex:1,
  },
  listItems:{
    height:40,
    marginLeft:10,
    marginRight:10,
    borderBottomWidth:1,
    borderColor:'#ddd',
    justifyContent:'center',
  },
  listItemsFont:{
    fontSize:16
  },
  newsTitle:{
    fontSize:20,
    fontWeight:'bold',
    color:'#cd1d1c',
    marginLeft:10,
    marginTop:15,
  },
  newsItems:{
    marginLeft:10,
    marginRight:10,
    fontSize:15,
    lineHeight:30,
  }
});

AppRegistry.registerComponent('Awesome', () => Awesome);
