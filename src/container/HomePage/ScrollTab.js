/**
 * React Native App
 * https://github.com/ztplz/CNode-react-native
 * email: mysticzt@gmail.com
 */

import React, { Component } from 'react';
import {
  View,
  Text,
  ScrollView,
  ActionSheetIOS,
  RefreshControl,
  FlatList,
} from 'react-native';
import LoadingPage from '../../components/LoadingPage';
import FlatListRow from '../../components/FlatListRow';
import FlatListFooter from '../../components/FlatListFooter';
import { pixel } from '../../utils/deviceSize';
import NetErrorPage from '../../components/NetErrorPage';
import {
  NIGHT_HEADER_COLOR,
  NIGHT_BACKGROUND_COLOR,
  NIGHT_REFRESH_COLOR
} from '../../constants/themecolor';

class ScrollTab extends Component {

  componentDidMount() {
    this.props.actions.getHomePageData({tabName: this.props.tabName, isLoading: true, isLoaded: false, isLoadedAll: false, timeout: 10000, pageIndex: 1, date: this.props.state.date});
  }

  refreshFlatList() {
    this.props.actions.refreshHomePageData({tabName: this.props.tabName, isRefreshing: true, isLoadedAll: false, timeout: 10000, pageIndex: 1, error: ''});
  }

  loadMoreData() {
    this.props.actions.loadMoreHomePageData({tabName: this.props.tabName, isLoadingMore: true, isLoadedAll: false, timeout: 10000, error: '', pageIndex: this.props.state.pageIndex + 1})
  }



  render() {
    const { state, tabName, actions, navigation, screenProps } = this.props;

    if(state.isLoading) {
      return  <LoadingPage screenProps={screenProps} title='正在加载，请稍候...' />;
    }

    if(state.error === 'FETCH_TIME_OUT') {
      return <NetErrorPage error={state.error} handler={() => actions.getHomePageData({tabName: this.props.tabName, isLoading: true, isLoaded: false, isLoadedAll: false, timeout: 10000, error: '', pageIndex: 1})} />;
    }

    if(!state.isLoading && state.isLoaded) {
      return (
        <View style={{backgroundColor: screenProps.isNightMode? NIGHT_BACKGROUND_COLOR : null}}>
          <FlatList
            data={state.data}
            renderItem={({item}) => <FlatListRow item={item} handler={() => navigation.navigate('TopicDetail', { topicId: item.id })} screenProps={screenProps} /> }
            ItemSeparatorComponent={() => <View style={{paddingLeft: 8, paddingRight: 8, height: pixel, backgroundColor: '#85757a'}}></View>}
            refreshControl={
              <RefreshControl
                refreshing={state.isRefreshing}
                onRefresh={() => this.refreshFlatList()}
                tintColor={screenProps.isNightMode? NIGHT_REFRESH_COLOR : null }
              />
            }
            onEndReached={() => this.loadMoreData()}
            onEndReachedThreshold={0}
            ListFooterComponent={() => <FlatListFooter isLoadingMore={state.isLoadingMore} isLoadedAll={state.isLoadedAll} error={state.error} />}
            keyExtractor={(item, index) => 'HomePageFlatList' + item.id + index }
          />
        </View>

      );
    }

    return null;

  }
}

export default ScrollTab;
