/**
 * React Native App
 * https://github.com/ztplz/CNode-react-native
 * email: mysticzt@gmail.com
 */

// import React, { PropTypes } from 'react';
import React from 'react';
import {
  View,
  StatusBar,
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
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
import About from './container/About';
import CustomTabBar from './components/CustomTabBar';
// import AppTabNavigator from './AppTabNavigator';

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
  },
  Message: {
    screen: Message,
  },
  Me: {
    screen: Me,
  },
}, {
  // initialRouteName: 'HomePage',
  // swipeEnabled: true,
  // lazy: true,
  // tabBarOptions: {
  //   style: {
  //     paddingBottom: 2,
  //   },
  //   // activeBackgroundColor: '#3bb84f'
  // },
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
  },
  About: {
    screen: About
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
    // headerStyle: {
    //   backgroundColor:  '#39d23c',
    //   // backgroundColor: new GlobalConfigStorage().getThemeColor() || '#a96dd1',
    //   // backgroundColor: '#372a34',
    // },
  }
});

const mapStateToProps = state => {
  console.log(state.GlobalState.get('screenProps').toJS());
  return {
    screenProps: state.GlobalState.get('screenProps').toJS(),
  }
}

const mapDispatchToProps = dispatch => {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppNavigator);

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
