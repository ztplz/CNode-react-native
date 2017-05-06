/**
 * React Native App
 * https://github.com/ztplz/CNode-react-native
 * email: mysticzt@gmail.com
 */

import React from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import timeDiff from '../utils/timeDiffUtil';

const UserRecentRow = props => (
  <View style={styles.container}>
    <Text style={styles.title}>{props.item.title}</Text>
    <Text style={styles.time}>最近一次回复 • {timeDiff(props.item.last_reply_at)}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    paddingLeft: 8,
    paddingRight: 8,
    paddingTop: 10,
    paddingBottom: 10,
    // backgroundColor: 'green'
  },
  title: {
    fontSize: 16,
  },
  time: {
    alignSelf: 'flex-end',
    marginTop: 7,
    // fontSize: 12,
    color: '#ada3a2'
  }
})

export default UserRecentRow;
