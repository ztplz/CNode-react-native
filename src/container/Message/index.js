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

class Message extends Component {
  static navigationOptions = {
   title: '消息',
   tabBar: {
     icon: () => <Icon name='ios-chatbubbles-outline' size={30} color='#c8bebe' />
   }
  };

  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Message</Text>
      </View>
    )
  }
}

export default Message;
