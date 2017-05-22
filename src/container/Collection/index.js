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
import * as actions from '../../actions/collectionActions';
import CollectionRow from '../../components/CollectionRow';
import { pixel } from '../../utils/deviceSize';
import LoadingPage from '../../components/LoadingPage';
import NetErrorPage from '../../components/NetErrorPage';
import {
  NIGHT_HEADER_COLOR
} from '../../constants/themecolor';

class Collection extends Component {
  static navigationOptions = ({ navigation, screenProps }) => ({
    title: (navigation.state.params.isCurrentUser ? '我' : navigation.state.params.authorname) + ' 的收藏',
    // title: this.props.loginname,
    headerTintColor: '#ffffff',
    headerStyle: {
      // backgroundColor: '#878fe0',
      backgroundColor: screenProps.isNightMode? NIGHT_HEADER_COLOR : screenProps.themeColor
    },
  })

  componentDidMount() {
    this.props.actions.getCollectionData({isLoading: true, isLoaded: false, username: this.props.navigation.state.params.authorname, timeout: 15000, error: ''})
  }

  render() {
    const { isLoading, isLoaded, isRefreshing, error, data, navigation, actions } = this.props;

    if(isLoading) {
      return <LoadingPage title='正在加载，请稍候...' />;
    }

    if(!isLoading && isLoaded) {
      return (
        <View style={styles.container}>
          <FlatList
            data={data}
            renderItem={({item, index}) => <CollectionRow data={item} navigate={navigation.navigate}  />}
            ItemSeparatorComponent={() => <View style={{paddingLeft: 8, paddingRight: 8, height: pixel, backgroundColor: '#85757a'}}></View>}
            keyExtractor={(item, index) => 'Collection' + item.id + index }
            onRefresh={() => actions.refreshCollectionData({isRefreshing: true, username: navigation.state.params.authorname, timeout: 15000, error: ''}) }
            refreshing={isRefreshing}
            keyExtractor={(item, index) => 'RecentTopicsFlatList' + item.id + index }
          />
        </View>
      )
    }

    if(error !== '') {
      return (
        <NetErrorPage
          error={error.message}
          handler={() => actions.getCollectionData({isLoading: true, isLoaded: false, username: this.props.navigation.state.params.authorname, timeout: 10000, error: ''})}
        />
      )
    }

    return null;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  collectionSeparatorLine: {
    height: 1,
    backgroundColor: '#736872'
  }
})

const mapStateToProps = state => {
  const stateOfCollection = state.CollectionState.toJS();
  return {
    isLoading: stateOfCollection.isLoading,
    isLoaded: stateOfCollection.isLoaded,
    isRefreshing: stateOfCollection.isRefreshing,
    error: stateOfCollection.error,
    data: stateOfCollection.data,
    // loginname: GlobalState.get('loginname')
  }
}

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Collection);
