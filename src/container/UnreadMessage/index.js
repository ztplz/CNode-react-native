/**
 * React Native App
 * https://github.com/ztplz/CNode-react-native
 * email: mysticzt@gmail.com
 */

import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableHighlight,
  StyleSheet
} from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Map, List } from 'immutable';
import MessageRow from '../../components/MessageRow';
import * as actions from '../../actions/unreadMessageActions';
import LoadingPage from '../../components/LoadingPage';

class UnreadMessage extends Component {
  static navigationOptions = {
    title: '未读消息',
    headerTintColor: '#ffffff',
    headerStyle: {
      backgroundColor: '#878fe0',
    },
  };

  componentDidMount() {
    this.props.actions.getUnreadMessageData({isLoading: true, accesstoken: '01605c45-3648-470a-8c2c-04551b61672b', timeout: 10000});
  }

  refreshUnreadMessage() {
    this.props.actions.refreshUnreadMessageData({isRefreshing: true, accesstoken: '01605c45-3648-470a-8c2c-04551b61672b', timeout: 10000})
  }

  render() {
    const { isLoading, isRefreshing, error, data } = this.props.state.toJS();

    if(isLoading) {
      return (
        <LoadingPage
          title='正在加载未读消息...'
        />
      )
    } else {
      if(data) {
        return (
          <View style={styles.container}>
            <FlatList
              data={data}
              renderItem={({item}) => <MessageRow item={item} />}
              ItemSeparatorComponent={() => <View style={{paddingLeft: 8, paddingRight: 8, height: pixel, backgroundColor: '#85757a'}}></View>}
              onRefresh={() => this.refreshUnreadMessage() }
              refreshing={isRefreshing}
              keyExtractor={(item, index) => 'hasnot_read_messages' + item.id + index }
            />
          </View>
        )
      } else {
        return null;
      }
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

const mapStateToProps = state => {
  return {
    state: state.UnreadMessageState,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UnreadMessage);
