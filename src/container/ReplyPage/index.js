/**
 * React Native App
 * https://github.com/ztplz/CNode-react-native
 * email: mysticzt@gmail.com
 */

import React, { Component } from 'react';
import {
  View,
  KeyboardAvoidingView,
  Text,
  TextInput,
  ActivityIndicator,
  StyleSheet
} from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions/replypageActions';
import { DeviceHeight, pixel } from '../../utils/deviceSize';
import {
  NIGHT_HEADER_COLOR
} from '../../constants/themecolor';
import HeaderButton from '../../components/HeaderButton';

class ReplyPage extends Component {
  static navigationOptions = ({ navigation, screenProps }) => ({
    title: '回复',
    headerTintColor: '#ffffff',
    headerStyle: {
      // backgroundColor: '#878fe0',
      backgroundColor: screenProps.isNightMode? NIGHT_HEADER_COLOR : screenProps.themeColor
    },
    headerRight: <HeaderButton title='发送' textStyle={{color: '#ffffff', marginRight: 8}} handler={ navigation.state.params?  navigation.state.params.rightButtonHandler : null } />,
  })

  constructor(props) {
    super(props);
    this.state = {
      replyText: '',
    }
  }

  componentDidMount() {
    console.log('new topic');
    this.props.navigation.setParams({
      rightButtonHandler: () => this.rightClick(),
    })
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.isReplySuccess) {
      this.props.navigation.goBack();
      this.props.navigation.state.params.onGoBack();
    }
  }

  rightClick() {
    console.log(this.state.replyText);
    this.props.actions.replyToTopic({ isSending: true, timeout: 10000, topic_id: this.props.navigation.state.params.topic_id, params: { accesstoken: this.props.accesstoken, content: this.state.replyText }});
  }

  render() {
    const { isSending, isReplySuccess, topic_id, screenProps } = this.props;
    return (
      <KeyboardAvoidingView>
        {
          isSending?
          <View style={{alignItems: 'center', paddingTop: 20, paddingBottom: 20}}>
            <ActivityIndicator
              color='#909090'
              size='large'
            />
            <Text style={{fontSize: 15, marginTop: 15, color: screenProps.isNightMode? '#c2bdbd' : null}}>正在发送中...</Text>
          </View>
          :
          null
        }
        <TextInput
          autoCapitalize='none'
          style={{ height: 200, borderColor: 'gray', borderWidth: pixel, paddingLeft: 10, fontSize: 20}}
          placeholder='请输入评论内容'
          multiline={true}
          onChangeText={(text) => this.setState({ replyText: text })}
          valuea={this.state.replyText}
        />
      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    paddingLeft: 8,
    paddingRight: 8,
    // backgroundColor: 'red'
  }
});

const mapStateToProps = state => {
  const stateOfReplyPageState = state.ReplyPageState.toJS();
  const stateOfGlobalState = state.GlobalState.toJS();
  return {
    isSending: stateOfReplyPageState.isSending,
    isReplySuccess: stateOfReplyPageState.isReplySuccess,
    topic_id: stateOfReplyPageState.topic_id,
    screenProps: stateOfGlobalState.screenProps,
    accesstoken: stateOfGlobalState.accesstoken,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ReplyPage);
