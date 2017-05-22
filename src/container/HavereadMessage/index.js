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
import MessageRow from '../../components/MessageRow';
import MessageReplyTextInput from '../../components/MessageReplyTextInput';
import * as actions from '../../actions/havereadMessageActions';
import LoadingPage from '../../components/LoadingPage';
import { DeviceHeight, DeviceWidth, pixel } from '../../utils/deviceSize';
import NetErrorPage from '../../components/NetErrorPage';
import {
  NIGHT_HEADER_COLOR
} from '../../constants/themecolor';

class HavereadMessage extends Component {
  static navigationOptions = ({ navigation, screenProps}) => ({
    title: '已读消息',
    headerTintColor: '#ffffff',
    headerStyle: {
      // backgroundColor: '#878fe0',
      backgroundColor: screenProps.isNightMode? NIGHT_HEADER_COLOR : screenProps.themeColor
    },
  });

  constructor(props) {
    super(props);
    this.listeners = null;
    this.state = {
      keyboardHeight: 0,
      isKeyboardOpened: false,
      text: null,
    };
    this.updateKeyboardSpace = this.updateKeyboardSpace.bind(this);
    this.resetKeyboardSpace = this.resetKeyboardSpace.bind(this);
  }

  componentDidMount() {
    this.props.actions.getHavereadMessageData({isLoading: true, isloaded: false, accesstoken: this.props.accesstoken, error: '', timeout: 10000});
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
    this.props.actions.refreshHavereadMessageData({isRefreshing: true, accesstoken: this.props.accesstoken, error: '', timeout: 10000})
  }

  sendReply() {
    this.props.actions.havereadMessageReply({timeout: 10000, topic_id: this.props.replyTopicId, params: { reply_id: this.props.replyId, accesstoken: this.props.accesstoken, content: '@' + this.props.replyName + '  ' + this.props.replyText}});
    this.props.actions.replyTextInputShow({isReply: false, replyName: '', text: '', replyId: '', replyTopicId: ''});
    Keyboard.dismiss();
  }

  render() {
    const { isLoading, isLoaded, isRefreshing, isReply, replyName, replyId, replyTopicId, replyText, accesstoken, error, data, actions, navigation } = this.props;

    if(isLoading) {
      return (
        <LoadingPage
          title='正在加载已读消息...'
        />
      )
    }

    if(!isLoading && isLoaded) {
      return (
        <View style={styles.container}>
          <FlatList
            data={data}
            renderItem={({item}) => <MessageRow replyTextInputShow={actions.replyTextInputShow} item={item} navigation={navigation} currentReplyName={replyName} currentText={replyText} />}
            ItemSeparatorComponent={() => <View style={{paddingLeft: 8, paddingRight: 8, height: pixel, backgroundColor: '#85757a'}}></View>}
            onRefresh={() => this.refreshHavereadMessage() }
            refreshing={isRefreshing}
            keyExtractor={(item, index) => 'has_read_messages' + item.id + index }
          />
          {
            this.state.isKeyboardOpened?
              <View style={{marginBottom: this.state.keyboardHeight, flexDirection: 'row', alignItems: 'center', borderWidth: pixel, paddingTop: 5, paddingBottom: 5}}>
                <MessageReplyTextInput   style={{width: DeviceWidth - 61, borderWidth: 1, borderColor: '#79757e', borderRadius: 5, marginLeft: 8, marginRight: 8, paddingLeft: 10}} placeholder={' 回复 ' + replyName + '：'}    fontSize={17} autoCapitalize='none' value={replyText} onChangeText={(text) => actions.havereadMessageTextChange({text})} />
                  <TouchableOpacity
                    onPress={() => this.sendReply()}
                  >
                    <View style={{backgroundColor: '#72aad9', height: 30, width: 37, alignItems: 'center', justifyContent: 'center', borderRadius: 5, marginRight: 8}}>
                      <Text>发送</Text>
                    </View>
                  </TouchableOpacity>
              </View>
              :
              null
          }
          { isReply? <TextInput  onBlur={() => this.props.actions.replyTextInputShow({isReply: false, replyName: this.props.replyName, text: replyText, replyId: replyId, replyTopicId: replyTopicId})} autoFocus={isReply} caretHidden={true} style={styles.textinputStyle} /> : null}
        </View>
      )
    }

    if(error) {
      return (
        <NetErrorPage
          error={error}
          handler={() => actions.getHavereadMessageData({isLoading: true, isLoaded: false, accesstoken: accesstoken, error: '', timeout: 10000})}
        />
      )
    }

    return null;

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
  // const stateOfMessage = state.MessageState.toJS();
  const stateOfHavereadMessage  = state.HavereadMessageState.toJS();
  return {
    isLoading: stateOfHavereadMessage.isLoading,
    isLoaded: stateOfHavereadMessage.isLoaded,
    isRefreshing: stateOfHavereadMessage.isRefreshing,
    isReply: stateOfHavereadMessage.isReply,
    replyName: stateOfHavereadMessage.replyName,
    replyId: stateOfHavereadMessage.replyId,
    replyTopicId: stateOfHavereadMessage.replyTopicId,
    replyText: stateOfHavereadMessage.replyText,
    error: stateOfHavereadMessage.error,
    data: stateOfHavereadMessage.data,
    accesstoken: state.GlobalState.get('accesstoken')
  }
}

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HavereadMessage);
