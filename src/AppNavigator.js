// import React, { PropTypes } from 'react';
import React from 'react';
import {
  View,
  StatusBar,
} from 'react-native';
// import { connect } from 'react-redux';
import { StackNavigator, TabNavigator, addNavigationHelpers } from 'react-navigation';
import HomePage from './container/HomePage';
import NewTopic from './container/NewTopic';
import Message from './container/Message';
import Me from './container/Me';
import UnreadMessage from './container/UnreadMessage';
import HavereadMessage from './container/HavereadMessage';
import TopicDetail from './container/TopicDetail';
import Setting from './container/Setting';
import ThemeColor from './container/ThemeColor';
import DraftBox from './container/DraftBox';
import Login from './container/Login';
import UserDetail from './container/UserDetail';
import Collection from './container/Collection';
import QRCodeScan from './container/QRCodeScan';
import RecentTopics from './container/RecentTopics';
import RecentReply from './container/RecentReply';


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
  initialRouteName: 'HomePage',
  swipeEnabled: true,
  // animationEnabled: true,    //  新版本bug
  tabBarOptions: {
    style: {
      paddingBottom: 2,
    },
  },
});

export const AppNavigator = StackNavigator({
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
  DraftBox: {
    screen: DraftBox
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
}, {
  headerMode: 'screen',
  initialRouteName: 'MainPage',
});

export default AppNavigator;

// const AppNavigator = ({ dispatch, nav }) => (
//     <Navigator
//       navigation={addNavigationHelpers({
//         dispatch,
//         state: nav,
//       })}
//     />
// );

// AppNavigator.propTypes = {
//   dispatch: PropTypes.func.isRequired,
//   nav: PropTypes.object.isRequired,
// };

//
// export default connect(
//   state => ({ nav: state.NavState }),
// )(AppNavigator);
