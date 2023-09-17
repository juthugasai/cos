import React from 'react';
import {
  View,
  FlatList,
  ActivityIndicator,
  ScrollView,
  RefreshControl,
  StyleSheet,
  SafeAreaView,
  VirtualizedList,
} from 'react-native';

import getNews from '../components/News/getNews';

import Articles from '../components/News/Articles';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      refreshing: true,
      isLoading: true,
      images: [],
    };
  }

  componentDidMount() {
    this.fetchNews();
  }

  fetchNews = () => {
    getNews()
      .then((articles) =>
        this.setState({
          articles,
          refreshing: false,
          isLoading: false,
          images: articles
            .slice(0, 3)
            .map(({ enclosures }) => enclosures[0].url),
        })
      )
      .catch(() => this.setState({ refreshing: false }));
  };

  handleRefresh = () => {
    this.setState(
      {
        refreshing: true,
      },
      () => this.fetchNews()
    );
  };

  render() {
    const { articles, refreshing, isLoading, images } = this.state;
    const { mainViewStyle, activityIndicatorStyle } = styles;

    return (
      <View style={mainViewStyle}>
        {isLoading ? (
          <View style={activityIndicatorStyle}>
            <ActivityIndicator size="large" color="#0000ff" />
          </View>
        ) : (
          
            <FlatList
              refreshControl={
                <RefreshControl
                  refreshing={refreshing}
                  onRefresh={this.handleRefresh}
                />
              }
              data={articles}
              renderItem={({ item }) => <Articles article={item} />}
              keyExtractor={(item) => item.links[0].url}
            />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainViewStyle: {
    flex: 1,
    paddingTop: 25,
    marginTop: 110,
  },
  activityIndicatorStyle: {
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
