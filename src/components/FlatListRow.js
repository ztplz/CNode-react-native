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
  TouchableHighlight,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import timeDiff from '../utils/timeDiffUtil';
import {
  NIGHT_HOMEPAGE_FLATLISTROW_TEXT_COLOR,
} from '../constants/themecolor';


// moment.updateLocale('zh-cn', momentLocale);
// console.log(moment.parseZone("2017-04-04T10:48:48.122Z").zone());


const whichTab = (tabName) => {
  switch (tabName) {
    case 'all':
      return '全部';
    case 'good':
      return '精华';
    case 'share':
      return '分享';
    case 'ask':
      return '问答';
    case 'job':
      return '招聘';
    default:
      return '全部';
  }
};

const HomePageListRow = (props) => {
  return (
    <TouchableHighlight
      // activeOpacity={0.9}
      // underlayColor={props.isNightMode? '#484a45' : '#c0c2c3' }
      underlayColor='#c0c2c3'
      onPress={props.handler}
    >
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <View style={styles.topLeftContainer}>
            <Image source={{uri: props.item.author.avatar_url}} style={styles.avatar}/>
            <Text style={[styles.authorName, { color: props.screenProps.isNightMode? NIGHT_HOMEPAGE_FLATLISTROW_TEXT_COLOR : null }]}>{props.item.author.loginname}</Text>
            {
              props.item.good ?
              <View style={styles.good}>
                <Text style={styles.goodText}>精华</Text>
              </View>
              :
              null
            }
            {
              props.item.top?
              <View style={styles.top}>
                <Text style={styles.topText}>置顶</Text>
              </View>
              :
              null
            }
          </View>
          <View style={styles.topRightContainer}>
            <Icon name='ios-clock-outline' size={15} color='#62615a' />
            <Text style={[styles.createTime, { color: props.screenProps.isNightMode? NIGHT_HOMEPAGE_FLATLISTROW_TEXT_COLOR : null }]}>{timeDiff(props.item.create_at)}</Text>
            <View style={styles.tab}>
              <Text style={styles.tabText}>{whichTab(props.item.tab)}</Text>
            </View>
          </View>
        </View>
        <Text
          numberOfLines={2}
          style={[styles.contentText, { color: props.screenProps.isNightMode? NIGHT_HOMEPAGE_FLATLISTROW_TEXT_COLOR : null }]}
        >
          {props.item.title}
        </Text>
        <View style={styles.bottomContainer}>
          <View style={styles.bottomLeftContainer}>
            <Icon name="ios-eye-outline" size={15} color="#62615a" />
            <Text style={[styles.visitCount, { color: props.screenProps.isNightMode? NIGHT_HOMEPAGE_FLATLISTROW_TEXT_COLOR : null }]}>{props.item.visit_count}</Text>
            <Icon name="ios-text-outline" size={15} color="#62615a" style={styles.replyIcon} />
            <Text style={[styles.replyCount, { color: props.screenProps.isNightMode? NIGHT_HOMEPAGE_FLATLISTROW_TEXT_COLOR : null }]}>{props.item.reply_count}</Text>
          </View>
          <Text style={[styles.replyTimeText, { color: props.screenProps.isNightMode? NIGHT_HOMEPAGE_FLATLISTROW_TEXT_COLOR : null }]}>{timeDiff(props.item.last_reply_at)}</Text>
        </View>
      </View>
    </TouchableHighlight>

  );
};

const styles = StyleSheet.create({
  container: {
    padding: 8,
  },
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  topLeftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  topRightContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 30,
    height: 30,
  },
  authorName: {
    marginLeft: 8,
    fontSize: 15,
    color: '#958994'
  },
  good: {
    marginLeft: 5,
    padding: 3,
    backgroundColor: '#ee535d',
    borderRadius: 10,
  },
  goodText: {
    fontSize: 13,
    color: '#f6f5f1'
  },
  top: {
    marginLeft: 3,
    padding: 3,
    backgroundColor: '#53dd58',
    borderRadius: 10,
  },
  topText: {
    fontSize: 13,
    color: '#f6f5f1',
  },
  createTime: {
    marginLeft: 5,
    color: '#958994',
  },
  tab: {
    marginLeft: 8,
    padding: 3,
    backgroundColor: '#797aed',
    borderRadius: 10,
  },
  tabText: {
    fontSize: 13,
    color: '#f6f5f1',
  },
  contentText: {
    fontSize: 15,
    marginTop: 7,
  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
  },
  bottomLeftContainer: {
    flexDirection: 'row',
  },
  visitCount: {
    marginLeft: 5,
    color: '#958994',
  },
  replyCount: {
    marginLeft: 5,
    color: '#958994',
  },
  replyIcon: {
    marginLeft: 12,
  },
  replyTimeText: {
    color: '#958994',
  }
});

export default HomePageListRow;
