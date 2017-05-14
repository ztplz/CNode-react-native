/**
 * React Native App
 * https://github.com/ztplz/CNode-react-native
 * email: mysticzt@gmail.com
 */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import NetErrorPage from '../../components/ErrorPage';

class NetErrorPage extends Component {
  static navigationOptions = {
    title: '错误',
    headerTintColor: '#ffffff',
    headerStyle: {
      backgroundColor: '#878fe0',
    },
  };

  render() {
    return (
      <NetErrorPage />
    )
  }
}

export default NetErrorPage;
