/**
 * Sample ListView Movie App
 * date:2016-08-01
 * @Auth:mjliu
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  ListView,
  ActivityIndicatorIOS
} from 'react-native';

var URL = 'https://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExample.json'

class Awesome extends Component {
  // Initialize the hardcoded data
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
        renderRow={this.renderMovie}
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

  renderMovie(movie) {
    return (
      <View style={styles.container}>
        <Image
          source={{ uri: movie.posters.thumbnail }}
          style={styles.thumbnail}
          />
        <View style={styles.rightContainer}>
          <Text style={styles.title} >{movie.title}</Text>
          <Text style={styles.year} >{movie.release_dates.dvd}</Text>
        </View>
      </View>
    );
  }
  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    fetch(URL)
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(responseData.movies),
          loaded: true,
        });
      })
      .done();
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#F5FCFF',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#e5e5e5',
    borderWidth: 1,
  },
  listView: {
    paddingTop: 20,
    backgroundColor: '#F5FCFF',
  },
  thumbnail: {
    width: 63,
    height: 99,
  },
  rightContainer: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    marginBottom: 8,
    textAlign: 'center',
  },
  year: {
    textAlign: 'center',
  },
});

AppRegistry.registerComponent('Awesome', () => Awesome);
