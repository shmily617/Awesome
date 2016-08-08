/**
 * curve Page
 * date:2016-08-06
 * @Auth:mjliu
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  WebView,
  ScrollView
} from 'react-native';

const tempreture={
  'tem':27,
  'high':10.5,
  'low':-6.5,
}
class Curve extends Component {
  constructor(props) {
    super(props);
    console.log("========", this.props);
    this.state = {}
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.flex}>
          <Text style={styles.head}>温度曲线</Text>
          <View style={{ height: 180 }}>
            <WebView
              source={{ uri: 'http://10.107.31.216:8888/' }}
              style={{ marginTop: 20 }}
              scalesPageToFit={true}
              />
          </View>
          <View style={{ backgroundColor: '#f1f1f1', }}>
            <View style={styles.info} >
              <Text style={styles.infoTitle}>报警信息</Text>
              <Text style={styles.infoText}>当前温度：{tempreture.tem}摄氏度，超过正常温度范围：{tempreture.high}至{tempreture.low}摄氏度，请及时处理</Text>
              <Text style={styles.infoText}>当前温度：{tempreture.tem}摄氏度，超过正常温度范围：{tempreture.high}至{tempreture.low}摄氏度，请及时处理</Text>
              <Text style={styles.infoText}>当前温度：{tempreture.tem}摄氏度，超过正常温度范围：{tempreture.high}至{tempreture.low}摄氏度，请及时处理</Text>
              <Text style={styles.infoText}>当前温度：{tempreture.tem}摄氏度，超过正常温度范围：{tempreture.high}至{tempreture.low}摄氏度，请及时处理</Text>
              <Text style={styles.infoText}>当前温度：{tempreture.tem}摄氏度，超过正常温度范围：{tempreture.high}至{tempreture.low}摄氏度，请及时处理</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  flex: {
    flex: 1
  },
  head: {
    fontSize: 18,
    color: 'grey',
    marginLeft: 10,
    marginTop: 10,
  },
  info: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
    marginTop: 10,
  },
  infoTitle: {
    fontSize: 18,
  },
  infoText: {
    color: 'grey',
    marginBottom: 10,
    marginTop: 10,
  }
});

module.exports = Curve;
