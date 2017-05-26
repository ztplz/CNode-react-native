/**
 * React Native App
 * https://github.com/ztplz/CNode-react-native
 * email: mysticzt@gmail.com
 */

import React from 'react';
import {
  View,
  Text,
  TouchableHighlight,
  StyleSheet
} from 'react-native';
import timeDiff from '../utils/timeDiffUtil';

const UserRecentRow = props => (
  <TouchableHighlight
    underlayColor='#d2d2d2'
    onPress={ props.handler }
  >
    <View style={styles.container}>
      <Text style={styles.title}>{props.item.title}</Text>
      <View style={styles.bottomContainer}>
        <Text style={styles.author}>作者 • {props.item.author.loginname}</Text>
        <Text style={styles.time}>最近一次回复 • {timeDiff(props.item.last_reply_at)}</Text>
      </View>
    </View>
  </TouchableHighlight>
);

const styles = StyleSheet.create({
  container: {
    paddingLeft: 8,
    paddingRight: 8,
    paddingTop: 10,
    paddingBottom: 10,
    // backgroundColor: 'green'
  },
  bottomContainer: {
    marginTop: 7,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  title: {
    fontSize: 16,
  },
  author: {
    color: '#ada3a2'
  },
  time: {
    // alignSelf: 'flex-end',
    // marginTop: 7,
    // fontSize: 12,
    color: '#ada3a2'
  }
})

export default UserRecentRow;
