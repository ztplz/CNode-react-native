/**
 * React Native App
 * https://github.com/ztplz/CNode-react-native
 * email: mysticzt@gmail.com
 */

// import React, { PropTypes } from 'react';
import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableWithoutFeedback,
  StyleSheet
} from 'react-native';
import HTMLView from 'react-native-htmlview';
import Icon from 'react-native-vector-icons/Ionicons';
import timeDiff from '../utils/timeDiffUtil';

const MessageRow = (props) => {
  console.log(props);
  return (
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <View style={styles.topLeftContainer}>
            <TouchableWithoutFeedback
              onPress={() => console.log('img press')}
            >
              <Image source={{uri: props.item.author.avatar_url}} style={{width: 36, height: 36}} />
            </TouchableWithoutFeedback>
            <View style={styles.userContainer}>
              <Text style={styles.usernameText}>{props.item.author.loginname}</Text>
              <Text style={styles.replyTimeText}>{timeDiff(props.item.reply.create_at)}</Text>
            </View>
          </View>
          <TouchableWithoutFeedback
            onPress={() => props.replyTextInputShow({isReply: true})}
          >
            <Icon name='md-text' size={25} color='#708bd1' style={{marginRight: 8}} />
          </TouchableWithoutFeedback>
        </View>
        <TouchableWithoutFeedback
          onPress={() => console.log('item press')}
        >
          <View>
            <View style={styles.replyText}>
              <HTMLView
                value={props.item.reply.content}
              />
            </View>
            <View style={styles.replyTopicContainer}>
              <Text
                style={styles.replyTopic}
                numberOfLines={3}
              >
                回复的主题： {props.item.topic.title}
              </Text>
            </View>
          </View>
        </TouchableWithoutFeedback>

      </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 8,
    paddingRight: 8,
    paddingTop: 5,
    paddingBottom: 5,
  },
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  topLeftContainer: {
    flexDirection: 'row',
  },
  userContainer: {
    marginLeft: 5,
    justifyContent: 'space-between',
  },
  usernameText: {
    color: '#444246',
    fontSize: 15,
  },
  replyTimeText: {
    color: '#86878f',
    fontSize: 12,
  },
  replyText: {
    marginTop: 5,
    // backgroundColor: 'red',
    paddingTop: 3,
    paddingBottom: 5,
  },
  replyTopicContainer: {
    backgroundColor: '#b5bebe',
    paddingTop: 3,
    paddingBottom: 3,
    paddingLeft: 5,
    paddingRight: 5,
    marginTop: 5,
    borderRadius: 5,
  },
  replyTopic: {
    fontSize: 13,
    color: '#464344',
  }
})

export default MessageRow;
