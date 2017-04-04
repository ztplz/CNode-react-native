/**
 * React Native App
 * https://github.com/ztplz/CNode-react-native
 * email: mysticzt@gmail.com
 */

import React, { Component, PropTypes } from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

class Me extends Component {
  static navigationOptions = {
   title: '我的',
   tabBar: {
     icon: () => <Icon name='ios-create-outline' size={30} color='#c8bebe' />
   },
  };

  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Me</Text>
      </View>
    )
  }
}

export default Me;
