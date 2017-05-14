/**
 * React Native App
 * https://github.com/ztplz/CNode-react-native
 * email: mysticzt@gmail.com
 */

import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  Alert,
  ScrollView,
  TouchableHighlight,
  TouchableWithoutFeedback,
  StyleSheet
} from 'react-native';
import HTMLView from 'react-native-htmlview';
import HtmlRender from 'react-native-html-render';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';
import * as actions from '../../actions/topicdetailActions';
import { DeviceWidth, DeviceHeight, pixel } from '../../utils/deviceSize';
import LoadingPage from '../../components/LoadingPage';
import timeDiff from '../../utils/timeDiffUtil';
import TopicDetailRow from '../../components/TopicDetailRow';
import HeaderButton from '../../components/HeaderButton';
import NetErrorPage from '../../components/NetErrorPage';
// import MessageReplyTextInput from '../../components/MessageReplyTextInput';
console.log(actions);

class TopicDetail extends Component {
  static navigationOptions = {
    title: '帖子详情',
    headerTintColor: '#ffffff',
    headerStyle: {
      backgroundColor: '#878fe0',
    },
    headerRight: <HeaderButton icon={<Icon name='ios-more' size={30} color='#ffffff' style={{marginRight: 12}} />}  handler={() => console.log('rightButtonPress')} />,
  };

  componentDidMount() {
    console.log(this.props);
    this.props.actions.getTopicDetailData({topicId: this.props.navigation.state.params.topicId, accesstoken: this.props.accesstoken, isLoading: true, isLoaded: false, error: '', timeout: 10000});
  }

  // function renderNode(node, index, siblings, parent, defaultRenderer) {
  //   if (node.name == 'img') {
  //     const a = node.attribs;
  //     const url = a.src.
  //     const iframeHtml = `<iframe src="${a.src}"></iframe>`;
  //     return (
  //       // <View key={index} style={{width: Number(a.width), height: Number(a.height)}}>
  //       //   <WebView source={{html: iframeHtml}} />
  //       // </View>
  //       <Image source={{uri: https + a.src}} style{{width.}}/>
  //     );
  //   }
  // }

  // showActionSheet() {
  //   ActionSheetIOS.showActionSheetWithOptions({
  //     options: [
  //       '刷  新',
  //       '评  论',
  //       isCollected? '取消收藏' : '收藏',
  //       '退  出'
  //     ],
  //     cancelButtonIndex: 3,
  //     tintColor: 'green',
  //   },
  //   (buttonIndex) => {
  //     switch (buttonIndex) {
  //       case 0:
  //         this.props.actions.refreshTopicDetailData({isRefreshing: true, timeout: })
  //       case 1:
  //         this.props.actions.
  //       case 2:
  //         this.props.actions.
  //     }
  //   });
  // }

  isWhichTab(tab) {
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

  collectOnPress() {
    console.log(this.props.accesstoken);
    if(this.props.isLogged) {
      if(this.props.isCollected) {
        this.props.actions.topicNotCollect({params: { accesstoken: this.props.accesstoken, topic_id: this.props.data.id }, isCollected: false, timeout: 10000});
      } else {
        this.props.actions.topicCollect({params: { accesstoken: this.props.accesstoken, topic_id: this.props.data.id }, isCollected: true, timeout: 10000})
      }

      return ;
    }

    Alert.alert(
      '请先登录',
      null,
      [
        {text: '登录', onPress: () => this.props.navigation.navigate('Login', { onGoBack: () => this.props.actions.getTopicDetailData({topicId: this.props.navigation.state.params.topicId, accesstoken: this.props.accesstoken, isLoading: true, isLoaded: false, error: '', timeout: 10000})})},
        // {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
        {text: '取消', null },
      ],
      // { cancelable: false }
    )
  }

  replyOnPress() {
    console.log(this.props.navigation);
    if(this.props.isLogged) {
      this.props.navigation.navigate('ReplyPage');
      return ;
    }

    Alert.alert(
      '请先登录',
      null,
      [
        {text: '登录', onPress: () => this.props.navigation.navigate('Login', { onGoBack: null} )},
        // {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
        {text: '取消', null },
      ],
      // { cancelable: false }
    )
  }

  render() {
    const { isLoading, isLoaded, isRefreshing, isLogged, isCollected, accesstoken, isReplyTextInputShow, error, data, actions, navigation } = this.props;
    console.log(this.props.data);
    console.log(this.props.isCollected);
    if(isLoading) {
      return (
        <LoadingPage title='正在加载，请稍候...' />
      );
    }

    if(!isLoading && isLoaded) {
      return (
        <ScrollView style={styles.container}>
          <View style={{paddingLeft: 8, paddingRight: 8}}>
            <Text style={styles.titleText}>
              {
                data.good?
                <View style={styles.goodTextContainer}>
                  <Text style={styles.goodText}>精华</Text>
                </View>
                :
                null
              }
              {
                data.top?
                <View style={styles.topTextContainer}>
                  <Text style={styles.topText}>置顶</Text>
                </View>
                :
                null
              }
              {data.title}
            </Text>
            <View style={styles.topicInfoContainer}>
              <TouchableWithoutFeedback
                style={{backgroundColor: 'red'}}
                onPress={() => navigation.navigate('UserDetail', {authorname: data.author.loginname})}
              >
                  <Image source={{uri: data.author.avatar_url}} style={{width: 40, height: 40}}/>
              </TouchableWithoutFeedback>
              <Text style={styles.topicInfo}> • 发布于 {timeDiff(data.create_at)} • 作者 {data.author.loginname} • {data.visit_count} 次浏览 • 最后一次编辑是 {timeDiff(data.last_reply_at)} • 来自 {this.isWhichTab(data.tab)}</Text>
            </View>
            <View style={styles.topicInfoSeparator}></View>
            <View style={{paddingBottom: 20, borderBottomWidth: pixel}}>
              <HTMLView
                value={this.props.data.content}
              />
              {/* <HtmlRender
                value={{data.content}}
              /> */}
            </View>
          </View>

          <View style={styles.btnRow}>
            <TouchableHighlight
              underlayColor='#d8dbd8'
              onPress={() => this.collectOnPress()}
              style={styles.collectBtn}
            >
              <View style={styles.collectBtnStyle}>
                <Icon name= {isCollected?'ios-star' : 'ios-star-outline'  } size={25} color= {isCollected? '#d55c5c' : '#756d6d'} />
                <Text style={{marginLeft: 8}}>{isCollected? '取消收藏' : '收藏主题'}</Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight
              underlayColor='#d8dbd8'
              onPress={() => this.replyOnPress()}
              style={styles.replyBtn}
            >
              <View style={styles.replyBtnStyle}>
                <Icon name='ios-create' size={25} color='#756d6d' />
                <Text style={{marginLeft: 8}}>发表评论</Text>
              </View>
            </TouchableHighlight>
          </View>
          <View style={{width: DeviceWidth+20, height: 50, justifyContent: 'center', backgroundColor: '#d5d5d5'}}>
            <Text style={{marginLeft: 15, color: '#4e4e4e'}}>{data.reply_count} 条评论</Text>
          </View>
          <View style={{marginTop: 30, paddingLeft: 8, paddingRight: 8}}>
            <FlatList
              data={data.replies}
              renderItem={({item, index}) => <TopicDetailRow data={item} floor={index} accesstoken={accesstoken} navigation={navigation} isLogged={isLogged}  actions={actions} />}
              ItemSeparatorComponent={() => <View style={styles.commentSeparator} />}
              keyExtractor={(item, index) => 'TopicDetail' + item.id + index }
            />
          </View>
          {isReplyTextInputShow? <MessageReplyTextInput /> : null}
        </ScrollView>
      );
    }

    if(error !== '') {
      console.log(error.message);
      return (
        <NetErrorPage
          error={error.message}
          handler={() => actions.getTopicDetailData({topicId: navigation.state.params.topicId, accesstoken: '01605c45-3648-470a-8c2c-04551b61672b', isLoading: true, isLoaded: false, error: '', timeout: 10000})}
        />
      )
    }

    return null;
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    // paddingLeft: 8,
    // paddingRight: 8,
  },
  titleText: {
    fontSize: 17,
    // backgroundColor: 'red'
  },
  goodTextContainer: {
    height: 20,
    width: 35,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ee535d',
    marginTop: 3
  },
  goodText: {
    color: '#ffffff'
  },
  topTextContainer: {
    height: 20,
    width: 35,
    borderRadius: 5,
    // marginLeft: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#53dd58',
    marginTop: 3,
    // paddingRight: 5
  },
  topText: {
    color: '#ffffff'
  },
  topicInfoContainer: {
    marginTop: 10,
    flexDirection: 'row'
  },
  topicInfo: {
    marginLeft: 8,
    color: '#82828c',
    width: DeviceWidth - 60,
  },
  topicInfoSeparator: {
    height: 1,
    backgroundColor: '#9f95aa',
    marginTop: 15,
    marginBottom: 25,
  },
  commentSeparator: {
    height: 1,
    backgroundColor: '#a4a496'
  },
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  },
  // titleHtml: {
  //   width: DeviceWidth - 20
  // }
  btnRow: {
    // flex: 1,
    width: DeviceWidth -16,
    height: 50,
    flexDirection: 'row',
    borderBottomWidth: pixel,
    // backgroundColor: 'red'
  },
  collectBtn: {
    flex: 1,
    borderRightWidth: pixel
    // flexDirection: 'row',
    // justifyContent: 'center',
    // alignItems: 'center'
  },
  replyBtn: {
    flex: 1,
    // flexDirection: 'row',
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: 'red'
  },
  collectBtnStyle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  replyBtnStyle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  }
});

const mapStateToProps = state => {
  const stateOfTopicDetail = state.TopicDetailState.toJS();
  const stateOfGlobalState = state.GlobalState.toJS();
  return {
    isLoading: stateOfTopicDetail.isLoading,
    isLoaded: stateOfTopicDetail.isLoaded,
    isRefreshing: stateOfTopicDetail.isRefreshing,
    isCollected: stateOfTopicDetail.isCollected,
    isReplyTextInputShow: stateOfTopicDetail.isReplyTextInputShow,
    error: stateOfTopicDetail.error,
    data: stateOfTopicDetail.data,
    isLogged: stateOfGlobalState.isLogged,
    accesstoken: stateOfGlobalState.accesstoken,
    // accesstoken:  state.GlobalState.get('accesstoken')
  }
};

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TopicDetail);
