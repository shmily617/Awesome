/**
 * Detail Page
 * date:2016-08-08
 * @Auth:mjliu
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  ListView,
  TouchableOpacity,
  ActivityIndicatorIOS
} from 'react-native';

import Curve from './Curve.js';


class Detail extends Component {
  constructor(props) {
    super(props);
    // console.log("========", this.props.route.allDatas.transInfo);
    this.state = {
      loaded: false,
      //  _that: this.props.route.allDatas,
      dataSource: new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2
      }),
    };
  }

  render() {
    // if (!this.state.loaded) {
    //   return this.renderLoadingView();
    // }

    return (
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.header}>
            <View style={styles.uper}>
              <View style={styles.leftContainer}>
                <Text style={styles.title}>运单号：{this.props.route.allDatas.id}</Text>
                <Text style={styles.text}>运单状态：{this.props.route.allDatas.status}</Text>
                <Text style={styles.text}>始发地：{this.props.route.allDatas.transport.fromWhere}</Text>
                <Text style={styles.text}>目的地：{this.props.route.allDatas.transport.toWhere}</Text>
              </View>
              <View style={styles.rightContainer}>
                <View style={styles.circle}>
                  <Text style={{ color: '#fff' }}>{this.props.route.allDatas.status}</Text>
                </View>
              </View>
            </View>
            <View style={styles.downer}>
              <View style={styles.leftContainer}>
                <Text style={styles.text}>温度：{this.props.route.allDatas.tempreture.temp}</Text>
                <Text style={styles.text}>告警：{this.props.route.allDatas.warning}</Text>
                <Text style={styles.text}>时间：{this.props.route.allDatas.time}</Text>
              </View>
              <TouchableOpacity style={styles.rightContainer}>
                <Text style={{ color: 'grey', fontSize: 26 }}
                  onPress={this._gotoView.bind(this,this.props.route.allDatas.transInfo) }>></Text>
              </TouchableOpacity>
            </View>
          </View>
          <ListView
            dataSource={this.state.dataSource}
            renderRow={this._renderList.bind(this) }
            style={styles.listView}
            />
        </View>
      </ScrollView>
    );
  }




  renderLoadingView() {
    return (
      <View style={styles.container}>
        <ActivityIndicatorIOS
          animating={!this.state.loaded}
          style={[styles.activityIndicator, { height: 80 }]}
          size="large"
          />
      </View>
    )
  }

  _renderList(lists) {
    return (
      <View style={styles.containerListview}>
        <View style={{ flex: 1 ,marginLeft:10}}>
          <Text style={styles.titleListview} >{lists.id}:{lists.name}</Text>
        </View>
        <View style={{ flex: 3, flexDirection: 'row', }}>
          <View style={[styles.leftContainer,{flex:1}]}>
            <Text style={styles.textListview} >{lists.fromWhere}</Text>
          </View>
          <View style={styles.centerContainer}>
            <View style={styles.circle2}>
              <Text style={[styles.textListview, { color: '#e85526',fontSize:12 }]} >{lists.status}</Text>
            </View>
          </View>
          <View style={styles.rightContainer}>
            <Text style={styles.textListview} >{lists.toWhere}</Text>
          </View>
        </View>
      </View>
    );
  }

  _gotoView(lists) {
    this.props.navigator.push({
      component: Curve,
      title: '温度详情',
      allDatas:lists,
    });
  }
  componentDidMount() {
    this._fetchData();
  }

  _fetchData() {
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(this.props.route.allDatas.transInfo),
      loaded: true,
    });
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    backgroundColor: '#f8bb86',
    height: 200,
    justifyContent: 'flex-start',
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
    marginTop: 10,
  },
  uper: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: 'grey',
    height: 120,
  },
  downer: {
    flexDirection: 'row',
    height: 80,
  },
  rightContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  leftContainer: {
    flex: 3,
    justifyContent: 'center',
    marginLeft: 10,
  },
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems:'center',
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
    marginTop: 10,
    color: '#fff',
  },
  text: {
    fontSize: 14,
    color: '#fff',
    marginBottom: 8,
  },
  circle: {
    width: 60,
    height: 60,
    backgroundColor: '#f8dd86',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  circle2: {
    width: 40,
    height: 40,
    backgroundColor: '#f8dd86',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerListview: {
    flex: 1,
    backgroundColor: '#fff',
    marginLeft: 10,
    marginRight: 10,
    marginTop: 4,
    height: 80,
  },
  titleListview: {
    fontSize: 16,
    marginTop: 10,
    marginBottom: 10,
    color: 'black', 
  },
  textListview: {
    fontSize: 14,
    color: 'grey',
    textAlign:'center'
  }
});

module.exports = Detail;
