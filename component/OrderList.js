/**
 * listView Component
 * date:2016-08-06
 * @Auth:mjliu
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView,
  ActivityIndicatorIOS,
  TouchableOpacity,
  ScrollView
} from 'react-native';

import dataList from '../DataList.js';
import Detail from './Detail.js';

class orderList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      dataSource: new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2
      }),
    };
  }

  render() {
    if (!this.state.loaded) {
      return this.renderLoadingView();
    }

    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderList.bind(this)}
        style={styles.listView}
        />
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
  renderList(lists) {
    // console.log(lists);
    return (  
        <TouchableOpacity style={styles.container} 
           onPress={this._gotoView.bind(this, lists)}>
          <View style={styles.leftContainer}>
            <Text style={styles.title} >{lists.id}</Text>
            <Text style={styles.text} >{lists.transport.fromWhere}</Text>
          </View>
          <View style={styles.centerContainer}>
            <View style={styles.transLine} />
          </View>
          <View style={styles.rightContainer}>
            <Text style={[styles.text, styles.destination]} >{lists.transport.toWhere}</Text>
            <View style={styles.circle}>
              <Text style={[styles.text, { color: '#e85526' }]} >{lists.status}</Text>
            </View>
          </View>
        </TouchableOpacity>
    );
  }
  _gotoView(lists) {
    console.log("====", lists);
    this.props.navigator.push({
      component: Detail,
      title: '订单详情',
    });
  }
  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(dataList.lists),
      loaded: true,
    });
  }
}


// class Detail extends Component{
//   render() {
//     return(
//       <ScrollView style={styles.container}>
//         <Text>详情页</Text>
//         <Text>尽管信息很少，但这就是详情页</Text>
//       </ScrollView>
//     );
//   }
// }


const styles = StyleSheet.create({
  listView: {
    // paddingTop: 20,
    backgroundColor: '#F5F5F5',
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
    marginTop: 10,
    height: 90,
  },
  rightContainer: {
    flex: 2,
    alignItems: 'center',
    flexDirection: 'row',
  },
  centerContainer: {
    flex: 2,
    justifyContent: 'center',
  },
  leftContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
  },
  text: {
    textAlign: 'center',
    color: '#666',
  },
  destination: {
    marginBottom: -38,
    marginRight: 20,
  },
  transLine: {
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: '#666',
    marginLeft: 15,
    marginRight: 15,
  },
  circle: {
    width: 60,
    height: 60,
    backgroundColor: '#f8bb86',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  }
});

module.exports = orderList;
