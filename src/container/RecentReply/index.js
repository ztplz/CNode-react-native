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
  RefreshControl,
  StyleSheet
} from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as meActions from '../../actions/meActions';
import * as userActions from '../../actions/userdetailActions';
import UserRecentRow from '../../components/UserRecentRow';
import { pixel } from '../../utils/deviceSize';
import {
  NIGHT_HEADER_COLOR,
  NIGHT_REFRESH_COLOR,
  NIGHT_BACKGROUND_COLOR,
  NIGHT_RECENT_FLATLIST_HEADER
} from '../../constants/themecolor';

class RecentReply extends Component {
  static navigationOptions = ({ navigation, screenProps}) => ({
    title: navigation.state.params.authorname + ' 最近参与话题',
    headerTintColor: '#ffffff',
    headerStyle: {
      backgroundColor: screenProps.isNightMode? NIGHT_HEADER_COLOR : screenProps.themeColor
    },
  })

  refreshData() {
    if(this.props.navigation.state.params.authorname === '我') {
      this.props.meActions.refreshMeData({ isRefreshing: true, timeout: 10000, loginname: this.props.loginname });
    } else {
      this.props.userActions.refreshUserDetail({ isRefreshing: true, timeout: 10000, authorname: this.props.navigation.state.params.authorname })
    }
  }

  renderHeader() {
    if(this.props.navigation.state.params.authorname === '我') {
      if(this.props.dataOfMe.recent_replies.length === 0) {
        return (
          <View style={styles.flatlistHeader}>
            <Text style={[styles.flatlistHeaderText, { color: this.props.screenProps.isNightMode? NIGHT_RECENT_FLATLIST_HEADER : null }]}>你最近未参与话题</Text>
          </View>
        )
      }
      return null;
    }

    if(this.props.dataOfUser.recent_replies.length === 0) {
      return (
        <View style={styles.flatlistHeader}>
          <Text style={[styles.flatlistHeaderText, { color: this.props.screenProps.isNightMode? NIGHT_RECENT_FLATLIST_HEADER : null }]}>他最近未参与话题</Text>
        </View>
      )
    }

    return null;
  }

  render() {
    const { isRefreshing, error, screenProps, dataOfUser, dataOfMe, actions, navigation } = this.props;
    return (
      <View style={[styles.container, { backgroundColor: screenProps.isNightMode? NIGHT_BACKGROUND_COLOR : null }]}>
        <FlatList
          data={navigation.state.params.authorname === '我'? dataOfMe.recent_replies : dataOfUser.recent_replies}
          renderItem={({item}) => <UserRecentRow item={item} screenProps={screenProps} handler={() => navigation.navigate('TopicDetail', { topicId: item.id } )} /> }
          ListHeaderComponent={() => this.renderHeader()}
          refreshControl={
            <RefreshControl
              refreshing={isRefreshing}
              onRefresh={() => this.refreshData()}
              tintColor={screenProps.isNightMode? NIGHT_REFRESH_COLOR : null }
            />
          }
          keyExtractor={(item, index) => 'RecentTopicsFlatList' + item.id + index }
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  flatlistHeader: {
    height: 45,
    alignItems: 'center',
    justifyContent: 'center'
  },
  flatlistHeaderText: {
    fontSize: 20
  }
})

const mapStateToProps = state => {
  const stateOfUserDetail = state.UserDetailState.toJS();
  const stateOfMe = state.MeState.toJS();
  return {
    isRefreshing: stateOfUserDetail.isRefreshing,
    dataOfUser: stateOfUserDetail.data,
    dataOfMe: stateOfMe.data,
    loginname: state.GlobalState.get('loginname')
  }
}

const mapDispatchToProps = dispatch => {
  return {
    meActions: bindActionCreators(meActions, dispatch),
    userActions: bindActionCreators(userActions, dispatch)
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(RecentReply);
