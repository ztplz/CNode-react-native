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
  Keyboard,
  Platform,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Map, List } from 'immutable';
import MessageRow from '../../components/MessageRow';
import MessageReplyTextInput from '../../components/MessageReplyTextInput';
import * as actions from '../../actions/havereadMessageActions';
import LoadingPage from '../../components/LoadingPage';
import { DeviceHeight, DeviceWidth, pixel } from '../../utils/deviceSize';

class HavereadMessage extends Component {
  static navigationOptions = {
    title: '已读消息',
    headerTintColor: '#ffffff',
    headerStyle: {
      backgroundColor: '#878fe0',
    },
  };

  constructor(props) {
    super(props);
    this.listeners = null;
    this.data=[
      {
        "id": "58c8022668828084780013e5",
        "type": "reply",
        "has_read": true,
        "author": {
          "loginname": "gzhangzy",
          "avatar_url": "https://avatars1.githubusercontent.com/u/7035683?v=3&s=120"
        },
        "topic": {
          "id": "58c801f5e0cfa8974a261314",
          "title": "测试下回复api",
          "last_reply_at": "2017-03-14T14:45:58.819Z"
        },
        "reply": {
          "id": "58c8022668828084780013e4",
          "content": "<div class=\"markdown-text\"><p>yi tiao</p>\n</div>",
          "ups": [],
          "create_at": "2017-03-14T14:45:58.803Z"
        },
        "create_at": "2017-03-14T14:45:58.821Z"
      },
      {
        "id": "58c8022668828084780013e5",
        "type": "reply",
        "has_read": true,
        "author": {
          "loginname": "gzhangzy",
          "avatar_url": "https://avatars1.githubusercontent.com/u/7035683?v=3&s=120"
        },
        "topic": {
          "id": "58c801f5e0cfa8974a261314",
          "title": "测试下回复api",
          "last_reply_at": "2017-03-14T14:45:58.819Z"
        },
        "reply": {
          "id": "58c8022668828084780013e4",
          "content": "<div class=\"markdown-text\"><p>yi tiao</p>\n</div>",
          "ups": [],
          "create_at": "2017-03-14T14:45:58.803Z"
        },
        "create_at": "2017-03-14T14:45:58.821Z"
      },
      {
        "id": "58c8022668828084780013e5",
        "type": "reply",
        "has_read": true,
        "author": {
          "loginname": "gzhangzy",
          "avatar_url": "https://avatars1.githubusercontent.com/u/7035683?v=3&s=120"
        },
        "topic": {
          "id": "58c801f5e0cfa8974a261314",
          "title": "测试下回复api",
          "last_reply_at": "2017-03-14T14:45:58.819Z"
        },
        "reply": {
          "id": "58c8022668828084780013e4",
          "content": "<div class=\"markdown-text\"><p>yi tiao</p>\n</div>",
          "ups": [],
          "create_at": "2017-03-14T14:45:58.803Z"
        },
        "create_at": "2017-03-14T14:45:58.821Z"
      },
      {
        "id": "58c8022668828084780013e5",
        "type": "reply",
        "has_read": true,
        "author": {
          "loginname": "gzhangzy",
          "avatar_url": "https://avatars1.githubusercontent.com/u/7035683?v=3&s=120"
        },
        "topic": {
          "id": "58c801f5e0cfa8974a261314",
          "title": "测试下回复api",
          "last_reply_at": "2017-03-14T14:45:58.819Z"
        },
        "reply": {
          "id": "58c8022668828084780013e4",
          "content": "<div class=\"markdown-text\"><p>yi tiao</p>\n</div>",
          "ups": [],
          "create_at": "2017-03-14T14:45:58.803Z"
        },
        "create_at": "2017-03-14T14:45:58.821Z"
      },
      {
        "id": "58c8022668828084780013e5",
        "type": "reply",
        "has_read": true,
        "author": {
          "loginname": "gzhangzy",
          "avatar_url": "https://avatars1.githubusercontent.com/u/7035683?v=3&s=120"
        },
        "topic": {
          "id": "58c801f5e0cfa8974a261314",
          "title": "测试下回复api",
          "last_reply_at": "2017-03-14T14:45:58.819Z"
        },
        "reply": {
          "id": "58c8022668828084780013e4",
          "content": "<div class=\"markdown-text\"><p>yi tiao</p>\n</div>",
          "ups": [],
          "create_at": "2017-03-14T14:45:58.803Z"
        },
        "create_at": "2017-03-14T14:45:58.821Z"
      },
      {
        "id": "58c8022668828084780013e5",
        "type": "reply",
        "has_read": true,
        "author": {
          "loginname": "gzhangzy",
          "avatar_url": "https://avatars1.githubusercontent.com/u/7035683?v=3&s=120"
        },
        "topic": {
          "id": "58c801f5e0cfa8974a261314",
          "title": "测试下回复api",
          "last_reply_at": "2017-03-14T14:45:58.819Z"
        },
        "reply": {
          "id": "58c8022668828084780013e4",
          "content": "<div class=\"markdown-text\"><p>yi tiao</p>\n</div>",
          "ups": [],
          "create_at": "2017-03-14T14:45:58.803Z"
        },
        "create_at": "2017-03-14T14:45:58.821Z"
      },
      {
        "id": "58c8022668828084780013e5",
        "type": "reply",
        "has_read": true,
        "author": {
          "loginname": "gzhangzy",
          "avatar_url": "https://avatars1.githubusercontent.com/u/7035683?v=3&s=120"
        },
        "topic": {
          "id": "58c801f5e0cfa8974a261314",
          "title": "测试下回复api",
          "last_reply_at": "2017-03-14T14:45:58.819Z"
        },
        "reply": {
          "id": "58c8022668828084780013e4",
          "content": "<div class=\"markdown-text\"><p>yi tiao</p>\n</div>",
          "ups": [],
          "create_at": "2017-03-14T14:45:58.803Z"
        },
        "create_at": "2017-03-14T14:45:58.821Z"
      },
      {
        "id": "58c8022668828084780013e5",
        "type": "reply",
        "has_read": true,
        "author": {
          "loginname": "gzhangzy",
          "avatar_url": "https://avatars1.githubusercontent.com/u/7035683?v=3&s=120"
        },
        "topic": {
          "id": "58c801f5e0cfa8974a261314",
          "title": "测试下回复api",
          "last_reply_at": "2017-03-14T14:45:58.819Z"
        },
        "reply": {
          "id": "58c8022668828084780013e4",
          "content": "<div class=\"markdown-text\"><p>yi tiao</p>\n</div>",
          "ups": [],
          "create_at": "2017-03-14T14:45:58.803Z"
        },
        "create_at": "2017-03-14T14:45:58.821Z"
      },
      {
        "id": "58c8022668828084780013e5",
        "type": "reply",
        "has_read": true,
        "author": {
          "loginname": "gzhangzy",
          "avatar_url": "https://avatars1.githubusercontent.com/u/7035683?v=3&s=120"
        },
        "topic": {
          "id": "58c801f5e0cfa8974a261314",
          "title": "测试下回复api",
          "last_reply_at": "2017-03-14T14:45:58.819Z"
        },
        "reply": {
          "id": "58c8022668828084780013e4",
          "content": "<div class=\"markdown-text\"><p>yi tiao</p>\n</div>",
          "ups": [],
          "create_at": "2017-03-14T14:45:58.803Z"
        },
        "create_at": "2017-03-14T14:45:58.821Z"
      }
    ]
    this.state = {
      keyboardHeight: 0,
      isKeyboardOpened: false,
      text: null,
    };
    this.updateKeyboardSpace = this.updateKeyboardSpace.bind(this);
    this.resetKeyboardSpace = this.resetKeyboardSpace.bind(this);
  }

  componentDidMount() {
    this.props.actions.getHavereadMessageData({isLoading: true, accesstoken: '01605c45-3648-470a-8c2c-04551b61672b', timeout: 10000});
    const updateListener = Platform.OS === 'android' ? 'keyboardDidShow' : 'keyboardWillShow';
    const resetListener = Platform.OS === 'android' ? 'keyboardDidHide' : 'keyboardWillHide';
    this.listeners = [
      Keyboard.addListener(updateListener, this.updateKeyboardSpace),
      Keyboard.addListener(resetListener, this.resetKeyboardSpace)
    ];
  }

  componentWillUnmount() {
    this.listeners.forEach(listener => listener.remove());
  }

  updateKeyboardSpace(event) {
    if (!event.endCoordinates) {
      return;
    }

    const keyboardSpaceHeight = DeviceHeight - event.endCoordinates.screenY;
    this.setState({
      keyboardHeight: keyboardSpaceHeight,
      isKeyboardOpened: true
    });

  }

  resetKeyboardSpace(event) {
    this.setState({
      keyboardHeight: 0,
      isKeyboardOpened: false
    });
  }



  refreshHavereadMessage() {
    this.props.actions.refreshHavereadMessageData({isRefreshing: true, accesstoken: '01605c45-3648-470a-8c2c-04551b61672b', timeout: 10000})
  }

  render() {
    const { isLoading, isRefreshing, isReply, error, data } = this.props.state.toJS();
    console.log(isReply);
    // console.log(this.state.text);

    if(isLoading) {
      return (
        <LoadingPage
          title='正在加载未读消息...'
        />
      )
    } else {
      if(data) {
        return (
          <View style={styles.container}>
            <FlatList
              data={this.data}
              renderItem={({item}) => <MessageRow replyTextInputShow={this.props.actions.replyTextInputShow} item={item} />}
              ItemSeparatorComponent={() => <View style={{paddingLeft: 8, paddingRight: 8, height: pixel, backgroundColor: '#85757a'}}></View>}
              onRefresh={() => this.refreshHavereadMessage() }
              refreshing={isRefreshing}
              keyExtractor={(item, index) => 'has_read_messages' + item.id + index }
            />
            {
              this.state.isKeyboardOpened?
                <View style={{marginBottom: this.state.keyboardHeight, flexDirection: 'row', alignItems: 'center', borderWidth: pixel, paddingTop: 5, paddingBottom: 5}}>
                  <MessageReplyTextInput   style={{width: DeviceWidth - 61, borderWidth: 1, borderColor: '#79757e', borderRadius: 5, marginLeft: 8, marginRight: 8}} placeholder='回复 mysticzt： '   fontSize={17} autoCapitalize='none' />
                    <TouchableOpacity>
                      <View style={{backgroundColor: '#72aad9', height: 30, width: 37, alignItems: 'center', justifyContent: 'center', borderRadius: 5, marginRight: 8}}>
                        <Text>发送</Text>
                      </View>
                    </TouchableOpacity>
                </View>
                :
                null
            }
            { isReply? <TextInput  onBlur={() => this.props.actions.replyTextInputShow({isReply: false})} autoFocus={isReply} caretHidden={true} style={styles.textinputStyle} /> : null}
          </View>
        )
      } else {
        return null;
      }
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  textinputStyle: {
    // height: 40
  }
});

const mapStateToProps = state => {
  return {
    state: state.HavereadMessageState,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HavereadMessage);
