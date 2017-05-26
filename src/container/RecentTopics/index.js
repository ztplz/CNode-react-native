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
import * as actions from '../../actions/userdetailActions';
import UserRecentRow from '../../components/UserRecentRow';
import { pixel } from '../../utils/deviceSize';
import {
  NIGHT_HEADER_COLOR
} from '../../constants/themecolor';

class RecentTopics extends Component {
  static navigationOptions = ({ navigation, screenProps }) => ({
    title: navigation.state.params.authorname + ' 最近发布话题',
    headerTintColor: '#ffffff',
    headerStyle: {
      // backgroundColor: '#878fe0',
      backgroundColor: screenProps.isNightMode? NIGHT_HEADER_COLOR : screenProps.themeColor
    },
  })

  render() {
    const { isRefreshing, error, data, actions, navigation } = this.props;
    console.log(navigation);
    return (
      <View style={styles.container}>
        <FlatList
          data={data.recent_topics}
          renderItem={({item}) => <UserRecentRow item={item} handler={() => navigation.navigate('TopicDetail', { topicId: item.id } )} />}
          ItemSeparatorComponent={() => <View style={{paddingLeft: 8, paddingRight: 8, height: pixel, backgroundColor: '#85757a'}}></View>}
          onRefresh={() => actions.refreshUserDetail({isRefreshing: true, authorname: navigation.state.params.authorname, timeout: 10000}) }
          refreshing={isRefreshing}
          keyExtractor={(item, index) => 'RecentTopicsFlatList' + item.id + index }
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

const mapStateToProps = state => {
  const stateOfUserDetail = state.UserDetailState.toJS();
  return {
    isRefreshing: stateOfUserDetail.isRefreshing,
    data: stateOfUserDetail.data,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(RecentTopics);
