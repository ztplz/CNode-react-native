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

class NewTopic extends Component {
  static navigationOptions = {
   title: '新建帖子',
   tabBar: {
     icon: () => <Icon name='ios-contact-outline' size={30} color='#c8bebe' />
   }
  };

  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>NewTopic</Text>
      </View>
    )
  }
}

export default NewTopic;
