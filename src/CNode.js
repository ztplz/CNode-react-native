/**
 * React Native App
 * https://github.com/ztplz/CNode-react-native
 * email: mysticzt@gmail.com
 */

import React, { Component } from 'react';
import { View, StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import AppNavigator from './AppNavigator';
import configStore from './store/configStore';

const store = configStore();

StatusBar.setBarStyle('light-content', true);

class CNode extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    );
  }
}

export default CNode;
