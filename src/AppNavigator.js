import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { StackNavigator, TabNavigator, addNavigationHelpers } from 'react-navigation';
import HomePage from './container/HomePage';
import NewTopic from './container/NewTopic';
import Message from './container/Message';
import Me from './container/Me';

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
  swipeEnabled: true,
  animationEnabled: true,
  tabBarOptions: {
    style: {
      paddingBottom: 2,
    },
  },
});

export const Navigator = StackNavigator({
  MainPage: {
    screen: MainPage,
  },
}, {
  headerMode: 'screen',
});

const AppNavigator = ({ dispatch, nav }) => (
  <Navigator
    navigation={addNavigationHelpers({
      dispatch,
      state: nav,
    })}
  />
);

AppNavigator.propTypes = {
  dispatch: PropTypes.func.isRequired,
  nav: PropTypes.object.isRequired,
};

export default connect(
  state => ({ nav: state.NavState }),
)(AppNavigator);
