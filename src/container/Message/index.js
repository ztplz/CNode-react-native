/**
 * React Native App
 * https://github.com/ztplz/CNode-react-native
 * email: mysticzt@gmail.com
 */

// import React, { Component, PropTypes } from 'react';
import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableHighlight,
  StyleSheet
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import CustomRow from '../../components/CustomRow';
import { pixel } from '../../utils/deviceSize';

class Message extends Component {
  static navigationOptions = {
    tabBarLabel: '消息',
    lazyLoad: true,
    tabBarIcon: () => <Icon name='ios-chatbubbles-outline' size={30} color='#c8bebe' />,
    title: '消息',
    headerTintColor: '#ffffff',
    headerStyle: {
      backgroundColor: '#878fe0',
    },
  };

  render() {
    const { navigation } = this.props;
    return (
      <View>
        <TouchableHighlight
          underlayColor='#c0c2c3'
          onPress={() => navigation.navigate('UnreadMessage')}
        >
          <View>
            <CustomRow
              title='未读消息'
              badge={50}
              leftIcon={<View style={styles.unreadMessageLeftIcon}><Icon name='ios-mail' size={30} color='#ffffff' /></View>}
              rightIcon={<Icon name='ios-arrow-forward' size={35} color='#9d9eab' />}
              rowStyle={styles.messageContainer}
              titleStyle={styles.messageTitle}
            />
          </View>

        </TouchableHighlight>
        <TouchableHighlight
          underlayColor='#c0c2c3'
          onPress={() => console.log('222')}
        >
          <View>
            <CustomRow
              title='已读消息'
              badge={50}
              leftIcon={<View style={styles.havereadMessageLeftIcon}><Icon name='ios-mail-open' size={30} color='#ffffff' /></View>}
              rightIcon={<Icon name='ios-arrow-forward' size={35} color='#9d9eab' />}
              rowStyle={styles.messageContainer}
              titleStyle={styles.messageTitle}
            />
          </View>

        </TouchableHighlight>
      </View>

    )
  }
}

const styles = StyleSheet.create({
  messageContainer: {
    height: 65,
    borderBottomWidth: pixel,
    borderBottomColor: '#89828a'
  },
  messageTitle: {
    fontSize: 15
  },
  unreadMessageLeftIcon: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#4493ba',
    borderRadius: 40
  },
  havereadMessageLeftIcon: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#e2415e',
    borderRadius: 40
  }
})

export default Message;
