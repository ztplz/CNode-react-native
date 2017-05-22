/**
 * React Native App
 * https://github.com/ztplz/CNode-react-native
 * email: mysticzt@gmail.com
 */

import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { StackNavigator, TabNavigator, TabView, addNavigationHelpers } from 'react-navigation';
import HomePage from './container/HomePage';
import NewTopic from './container/NewTopic';
import Message from './container/Message';
import Me from './container/Me';

const MyTabNavigator = TabNavigator({
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
  tabBarOptions: {
    style: {
      paddingBottom: 2,
      // backgroundColor: props.screenProps.isNightMode? '#666666' : '#f4f4f4'
    },
  },
  // tabBarComponent: props => {
  //     const backgroundColor = props.position.interpolate({
  //       inputRange: [0,1,2],
  //       outputRange: ['#e74c3c','#9b59b6','#3498db'],
  //     })
  //     return (
  //       <TabView.TabBarTop
  //         {...props}
  //         style={{ backgroundColor }}
  //       />
  //     );
  //   },
});

export default class AppTabNavigator extends Component {
  render() {
    const { screenProps } = this.props;
    return (
      <MyTabNavigator screenProps={screenProps} />
    )
  }
}

// const mapStateToProps = state => {
//   return {
//     tabProps: state.GlobalState.get('screenProps')
//   }
// }
//
// const mapDispatchToProps = dispatch => {
//   return {}
// }
//
// export default connect(mapStateToProps, mapDispatchToProps)(AppTabNavigator);
