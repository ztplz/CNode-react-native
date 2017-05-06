/**
 * React Native App
 * https://github.com/ztplz/CNode-react-native
 * email: mysticzt@gmail.com
 */

import React, { Component } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet
} from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions/recentdetailActions';
import UserRecentRow from '../../components/UserRecentRow';
import { pixel } from '../../utils/deviceSize';

class RecentTopics extends Component {
  static navigationOptions = ({ navigation}) => ({
    title: navigation.state.params.authorname + ' 的最近发布话题',
    headerTintColor: '#ffffff',
    headerStyle: {
      backgroundColor: '#878fe0',
    },
  })

  render() {
    const { isRefreshing, error, data, actions, navigation } = this.props;
    console.log(navigation);
    return (
      <View>
        <FlatList
          data={data.recent_topics}
          renderItem={({item}) => <UserRecentRow item={item} />}
          ItemSeparatorComponent={() => <View style={{paddingLeft: 8, paddingRight: 8, height: pixel, backgroundColor: '#85757a'}}></View>}
          onRefresh={() => actions.refreshRecentDetailData({isRefreshing: true, authorname: navigation.state.params.authorname, timeout: 15000}) }
          refreshing={isRefreshing}
          keyExtractor={(item, index) => 'RecentTopicsFlatList' + item.id + index }
        />
      </View>
    )
  }
}

const mapStateToProps = state => {
  // const state = state.UserRecentTopicsState.toJS();
  return {
    isRefreshing: state.UserRecentState.get('isRefreshing'),
    error: state.UserRecentState.get('error'),
    data: state.UserDetailState.toJS().data,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(RecentTopics);
