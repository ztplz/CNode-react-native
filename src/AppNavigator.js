// import React, { PropTypes } from 'react';
import React from 'react';
import {
  View,
  StatusBar,
} from 'react-native';
// import { connect } from 'react-redux';
import { StackNavigator, TabNavigator, addNavigationHelpers } from 'react-navigation';
import GlobalConfigStorage from './localStorage/GlobalConfigStorage';
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
import ReplyPage from './container/ReplyPage';

// let appThemeColor = new GlobalConfigStorage().getThemeColor();
// console.log(appThemeColor);

//
// let appThemeColor;
// export const changeThemeColor = (themecolor) => {
//   console.log('themecolor');
//   appThemeColor = themecolor;
// };
// console.log(appThemeColor);
// const themecolor = new GlobalConfigStorage().getThemeColor();
const MainPage = TabNavigator({
  HomePage: {
    screen: HomePage,
  },
  NewTopic: {
    screen: NewTopic,
    // navigationOptions: {
    //   title: '123'
    // }
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
  lazy: true,
  // animationEnabled: true,    //  新版本bug
  tabBarOptions: {
    style: {
      paddingBottom: 2,
    },
  },
  navigationOptions: {
    title: '123',
    backgroundColor: '#1b181b'
  }
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
  ReplyPage: {
    screen: ReplyPage
  }
}, {
  headerMode: 'screen',
  initialRouteName: 'MainPage',
  // initialRouteParams: {
  //   // themecolor: new GlobalConfigStorage().getThemeColor(),
  //   title: '123'
  // },
  navigationOptions: {
    // title: navigation.state.params.authorname + ' 的收藏',
    // title: '123',
    headerTintColor: '#ffffff',
    headerStyle: {
      backgroundColor:  '#39d23c',
      // backgroundColor: new GlobalConfigStorage().getThemeColor() || '#a96dd1',
      // backgroundColor: '#372a34',
    },
  }
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
