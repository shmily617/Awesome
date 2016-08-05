/**
 * Sample ListView sticky App
 * date:2016-08-02
 * @Auth:mjliu
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView,
  ActivityIndicatorIOS
} from 'react-native';

var API_URL = 'http://demo9383702.mockable.io/users';

class Awesome extends Component {
  // Initialize the hardcoded data
  constructor(props) {
    super(props);

    var getSectionData = (dataBlob, sectionID) => {
      return dataBlob[sectionID];
    };

    var getRowData = (dataBlob, sectionID, rowID) => {
      return dataBlob[sectionID+':'+rowID];
    };

    this.state = {
      loaded:false,
      dataSource: new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2,
        sectionHeaderHasChanged: (s1, s2) => s1 !==s2,
        getSectionHeaderData: getSectionData,
        getRowData: getRowData,
      }),
    };
  }

  render() {
    if (!this.state.loaded) {
      return this.renderLoadingView();
    }
    
    return (
      <View style={styles.container}>
        <View style={styles.header} >
          <Text style={styles.headerText} >User List</Text>
        </View>
      
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderRow}
          renderSectionHeader={this.renderSectionHeader}
          style={styles.listView}
        />
      </View>
    );
  }
  renderLoadingView() {
    return (
      <View style={styles.container} >
        <View style={styles.header}>
          <Text style={styles.headerText}>User List</Text>
        </View>
        <View style={[styles.container,styles.center]}>
              <ActivityIndicatorIOS
                  animating={!this.state.loaded}
                  style={[styles.activityIndicator, {height: 80}]}
                  size="large"
              />
        </View>
      </View>
      //android
      // <View style={[styles.container,styles.center]}>
      //   <Text>正在加载电影数据</Text>
      // </View>
    )
  }

  renderSectionHeader(sectionData, sectionID) {
    return (
      <View style={styles.section}>
        <Text style={styles.text}>片头-公司：{sectionData}-{sectionID}</Text>
      </View>
    );
  }

  renderRow(rowData, sectionID, rowID) {
    return (
      <View style={styles.rowStyle}>
        <Text style={styles.rowText}>{rowData.name.title}_{rowData.name.first}_{rowData.name.last}-{sectionID}-{rowID}</Text>
      </View>
    );
  }

  componentDidMount() {
    this.fetchData();
  }
  
  fetchData() {
    fetch(API_URL)
    .then((response) => response.json())
    .then((responseData) => {
      var organizations = responseData.results,
          length = organizations.length,
          dataBlob = {},
          sectionIDs = [],
          rowIDs = [],
          organization,
          users,
          userLength,
          user,
          i,
          j;

      for (i = 0; i < length; i++) {
          organization = organizations[i];

          sectionIDs.push(organization.id);
          dataBlob[organization.id] = organization.organization;

          users = organization.users;
          userLength = users.length;
          
          rowIDs[i] = [];//二维数组

          for(j = 0; j < userLength; j++) {
              user = users[j].user;
              rowIDs[i].push(user.md5);

              dataBlob[organization.id + ':' + user.md5] = user;
          }
      }

      this.setState({
          dataSource : this.state.dataSource.cloneWithRowsAndSections(dataBlob, sectionIDs, rowIDs),
          loaded     : true
      });
    })
    .done();     
  }
}

const styles = StyleSheet.create({
  listView:{
    backgroundColor: '#F5FCFF',
  },
  container: {
    flex: 1,
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  activityIndicator: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3F51B5',
    flexDirection: 'column',
    paddingTop: 25
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'white'
  },
  text: {
    color: 'white',
    paddingHorizontal: 8,
    fontSize: 16
  },
  rowStyle: {
    paddingVertical: 20,
    paddingLeft: 16,
    borderTopColor: 'white',
    borderLeftColor: 'white',
    borderRightColor: 'white',
    borderBottomColor: '#E0E0E0',
    borderWidth: 1
  },
  rowText: {
    color: '#212121',
    fontSize: 16
  },
  subText: {
    fontSize: 14,
    color: '#757575'
  },
  section: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: 6,
    backgroundColor: '#2196F3'
  }
});

AppRegistry.registerComponent('Awesome', () => Awesome);
