/**
 * React Native App
 * https://github.com/ztplz/CNode-react-native
 * email: mysticzt@gmail.com
 */

import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { StackNavigator, TabNavigator } from 'react-navigation';
import HomePage from './container/HomePage';
import NewTopic from './container/NewTopic';
import Message from './container/Message';
import Me from './container/Me';
import UnreadMessage from './container/UnreadMessage';
import HavereadMessage from './container/HavereadMessage';
import TopicDetail from './container/TopicDetail';
import Setting from './container/Setting';
import ThemeColor from './container/ThemeColor';
import Login from './container/Login';
import UserDetail from './container/UserDetail';
import Collection from './container/Collection';
import QRCodeScan from './container/QRCodeScan';
import RecentTopics from './container/RecentTopics';
import RecentReply from './container/RecentReply';
import ReplyPage from './container/ReplyPage';
import About from './container/About';
import CustomTabBar from './components/CustomTabBar';

const MainPage = TabNavigator({
  HomePage: {
    screen: HomePage,
  },
  NewTopic: {
    screen: NewTopic,
  },
  Message: {
    screen: Message,
  },
  Me: {
    screen: Me,
  },
}, {
  tabBarComponent: CustomTabBar
});

const AppNavigator = StackNavigator({
  MainPage: {
    screen: MainPage,
  },
  UnreadMessage: {
    screen: UnreadMessage,
  },
  HavereadMessage: {
    screen: HavereadMessage
  },
  TopicDetail: {
    screen: TopicDetail
  },
  Setting: {
    screen: Setting
  },
  ThemeColor: {
    screen: ThemeColor
  },
  Login: {
    screen: Login
  },
  UserDetail: {
    screen: UserDetail
  },
  Collection: {
    screen: Collection
  },
  QRCodeScan: {
    screen: QRCodeScan
  },
  RecentTopics: {
    screen: RecentTopics
  },
  RecentReply: {
    screen: RecentReply
  },
  ReplyPage: {
    screen: ReplyPage
  },
  About: {
    screen: About
  }
}, {
  headerMode: 'screen',
  initialRouteName: 'MainPage',
  navigationOptions: {
    headerTintColor: '#ffffff',
  }
});

const mapStateToProps = state => {
  return {
    screenProps: state.GlobalState.get('screenProps').toJS(),
  }
}

const mapDispatchToProps = dispatch => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(AppNavigator);
