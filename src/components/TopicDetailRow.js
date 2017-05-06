/**
 * React Native App
 * https://github.com/ztplz/CNode-react-native
 * email: mysticzt@gmail.com
 */

import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableHighlight,
  StyleSheet
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import HTMLView from 'react-native-htmlview';
import timeDiff from '../utils/timeDiffUtil';

const content = "<div class=\"markdown-text\"><p>🥚 的插件机制简直强大！用上 🥚 瞬间感觉自己无所不能了！</p>\n</div>"

const TopicDetailRow = props => {
  // console.log(props.data);
  return (
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <View style={styles.ReplyInfoContainer}>
            <Image source={{uri: props.data.author.avatar_url}} style={{width: 35, height: 35}} />
            <View style={styles.authornameContainer}>
              <Text style={styles.authorname}>{props.data.author.loginname}</Text>
              <Text style={styles.createTime}>{props.floor + 1} 楼 • {timeDiff(props.data.create_at)}</Text>
            </View>
          </View>
          <View style={styles.iconContainer}>
            <Icon name='ios-thumbs-up' size={20} color='#5b5259' />
            <Text style={styles.thumbsUpNumber}>{props.data.ups.length}</Text>
            <Icon name='ios-undo' size={20} color='#736270' style={styles.undo} />
          </View>
        </View>
        <View style={styles.bottomContainer}>
          <HTMLView
            value={props.data.content}
          />
        </View>
      </View>
  )
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor: '#ccf18b'
  },
  topContainer: {
    flexDirection: 'row',
    height: 51,
    paddingTop: 8,
    paddingBottom: 8,
    // backgroundColor: '#40bfa9',
    justifyContent: 'space-between',
  },
  ReplyInfoContainer: {
    flexDirection: 'row',
  },
  authornameContainer: {
    justifyContent: 'space-between',
    marginLeft: 8
  },
  authorname: {
    fontSize: 14,
    color: '#1f2021',
  },
  createTime: {
    fontSize: 14,
    color: '#88808a'
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  thumbsUpNumber: {
    marginLeft: 5,

  },
  undo: {
    marginLeft: 18,
    marginRight: 10
  },
  bottomContainer: {
    paddingBottom: 8,
  }
})

export default TopicDetailRow;
