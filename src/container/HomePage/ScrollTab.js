/**
 * React Native App
 * https://github.com/ztplz/CNode-react-native
 * email: mysticzt@gmail.com
 */

// import React, { Component, PropTypes } from 'react';
import React, { Component } from 'react';
import {
  View,
  Text,
  ScrollView,
  ActionSheetIOS,
  FlatList,
} from 'react-native';
import LoadingPage from '../../components/LoadingPage';
import FlatListRow from '../../components/FlatListRow';
import FlatListFooter from '../../components/FlatListFooter';
import { pixel } from '../../utils/deviceSize';
import HomePageStorage from '../../localStorage/HomePageStorage';
import NetErrorPage from '../../components/NetErrorPage';

class ScrollTab extends Component {
  // constructor(props) {
  //   super(props);
  //   this.ActionSheetIOSButtonArray = [
  //     '刷  新'，
  //     '评论',
  //     ''
  //   ]
  // }

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
    const { state, tabName, actions, navigation } = this.props;

    if(state.isLoading) {
      return  <LoadingPage title='正在加载，请稍候...' />;
    }

    if(state.error === 'FETCH_TIME_OUT') {
      return <NetErrorPage error={state.error} handler={() => actions.getHomePageData({tabName: this.props.tabName, isLoading: true, isLoaded: false, isLoadedAll: false, timeout: 10000, error: '', pageIndex: 1})} />;
    }

    if(!state.isLoading && state.isLoaded) {
      return (
        <View>
          <FlatList
            data={state.data}
            renderItem={({item}) => <FlatListRow item={item} handler={() => navigation.navigate('TopicDetail', { topicId: item.id })} /> }
            ItemSeparatorComponent={() => <View style={{paddingLeft: 8, paddingRight: 8, height: pixel, backgroundColor: '#85757a'}}></View>}
            onRefresh={() => this.refreshFlatList() }
            refreshing={state.isRefreshing}
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

// ScrollTab.propTypes = {
//   tabLabel: PropTypes.string.isRequired,
// };

export default ScrollTab;
