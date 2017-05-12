/**
 * React Native App
 * https://github.com/ztplz/CNode-react-native
 * email: mysticzt@gmail.com
 */

import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableHighlight,
  StyleSheet
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const isWhichTab = tab => {
  switch (tab) {
    case 'all':
      return '全部';
    case 'good':
      return '精华';
    case 'share':
      return '分享';
    case 'ask':
      return '问答';
    case 'job':
      return '招聘;'
    default:
      return '';
  }
}

const CollectionRow = props => (
  <TouchableHighlight
    underlayColor='#e7e7e7'
    onPress={() => props.navigate('TopicDetail', {topicId: props.data.id})}
  >
    <View style={styles.container}>
      <Text style={styles.titleText}>{props.data.title}</Text>
      <View style={styles.bottomContainer}>
        <Text style={styles.authorname}>{props.data.author.loginname} • {isWhichTab(props.data.tab)}</Text>
        <View style={styles.iconContainer}>
          <Icon name='md-text' size={20} color='#5364d2' />
          <Text style={styles.replyNumber}>{props.data.reply_count}</Text>
        </View>
      </View>
    </View>
  </TouchableHighlight>
);

const styles = StyleSheet.create({
  container: {
    paddingLeft: 8,
    paddingRight: 8,
    paddingTop: 5,
    paddingBottom: 5,
    // borderBottomWidth: 1,
    // borderBottomColor: '#818f8b'
  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10
  },
  titleText: {
    fontSize: 17,
  },
  authorname: {
    color: '#8e989e',
  },
  iconContainer: {
    flexDirection: 'row',
    width: 60
  },
  replyNumber: {
    marginLeft: 8
  }
})

export default CollectionRow;
