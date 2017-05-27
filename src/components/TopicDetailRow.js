/**
 * React Native App
 * https://github.com/ztplz/CNode-react-native
 * email: mysticzt@gmail.com
 */

import React from 'react';
import {
  View,
  Text,
  Alert,
  Image,
  TouchableWithoutFeedback,
  TouchableHighlight,
  StyleSheet
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import HTMLView from 'react-native-htmlview';
import timeDiff from '../utils/timeDiffUtil';

const likeIt = (navigation, getTopicDetailData, upedItem, index, isLogged, isUped, reply_id, accesstoken) => {
  if(isLogged) {
    // if(isUped) {
    //   notUpedItem({params: { accesstoken, topic_id,},  timeout: 10000});
    // } else {
    //   upedItem({params: { accesstoken, topic_id },  timeout: 10000})
    // }
    //
    // return ;
    upedItem({accesstoken, reply_id, isUped: !isUped, index})
  }

  Alert.alert(
    '请先登录',
    null,
    [
      {text: '登录', onPress: () => navigation.navigate('Login', { onGoBack: () => getTopicDetailData({topicId: navigation.state.params.topicId, accesstoken, isLoading: true, isLoaded: false, error: '', timeout: 10000})})},
      {text: '取消', null },
    ],
  )
}

const replyToOther = (navigation, getTopicDetailData, isLogged, replyname, topic_id, reply_id, accesstoken) => {
  console.log(reply_id);
  if(isLogged) {
    navigation.navigate('ReplyPage', { replyname, topic_id, reply_id, onGoBack: () => getTopicDetailData({topicId: navigation.state.params.topicId, accesstoken, isLoading: true, isLoaded: false, error: '', timeout: 10000})});
    return ;
  }

  Alert.alert(
    '请先登录',
    null,
    [
      {text: '登录', onPress: () => navigation.navigate('Login', { onGoBack: () => getTopicDetailData({topicId: navigation.state.params.topicId, accesstoken, isLoading: true, isLoaded: false, error: '', timeout: 10000})})},
      {text: '取消', null },
    ],
  )
}

const TopicDetailRow = props => {
  return (
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <View style={styles.ReplyInfoContainer}>
            <TouchableWithoutFeedback
              onPress={() => props.navigation.navigate('UserDetail', {authorname: props.data.author.loginname})}
            >
              <Image source={{uri: props.data.author.avatar_url}} style={{width: 35, height: 35}} />
            </TouchableWithoutFeedback>
            <View style={styles.authornameContainer}>
              <Text style={styles.authorname}>{props.data.author.loginname}</Text>
              <Text style={styles.createTime}>{props.floor + 1} 楼 • {timeDiff(props.data.create_at)}</Text>
            </View>
          </View>
          <View style={styles.iconContainer}>
            <TouchableWithoutFeedback
              onPress={() => likeIt(props.floor, props.isLogged, props.data.is_uped, props.accesstoken, props.data.id, props.navigation, props.actions.upedItem, props.actions.getTopicDetailData)}
            >
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Icon name='ios-thumbs-up' size={20} color={props.data.is_uped? '#605e57' : '#b7bfb7'} />
                <Text style={styles.thumbsUpNumber}>{props.data.ups.length}</Text>
              </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback
              onPress={() => replyToOther(props.navigation, props.actions.getTopicDetailData, props.isLogged, props.data.author.loginname, props.topic_id, props.data.id, props.accesstoken)}
            >
              <Icon name='ios-undo' size={20} color='#736270' style={styles.undo} />
            </TouchableWithoutFeedback>
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
