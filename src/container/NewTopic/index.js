/**
 * React Native App
 * https://github.com/ztplz/CNode-react-native
 * email: mysticzt@gmail.com
 */

// import React, { Component, PropTypes } from 'react';
import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  Alert,
  TouchableWithoutFeedback,
  ActivityIndicator,
  KeyboardAvoidingView,
  StyleSheet
} from 'react-native';
import { NavigationActions } from 'react-navigation'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions/newtopicActions';
import Icon from 'react-native-vector-icons/Ionicons';
import KeyboardSpacer from 'react-native-keyboard-spacer';
import { defaultHeader } from 'react-navigation';
import HeaderButton from '../../components/HeaderButton';
import { DeviceHeight, pixel } from '../../utils/deviceSize';
import {
  NIGHT_HEADER_COLOR,
  NIGHT_BACKGROUND_COLOR,
  NIGHT_PLACEHOLDERTEXT_COLOR,
  NIGHT_INPUT_COLOR
} from '../../constants/themecolor';

class NewTopic extends Component {

  static navigationOptions = ({ navigation, screenProps,  }) => ({
    // title: navigation.state.params.title || '新建主题',
    title: '新建主题',
    headerTintColor: '#ffffff',
    // tabBarLabel: '发帖',
    tabBarLabel: ({focused}) => (<Text style={{color: focused? screenProps.isNightMode? '#2f2f91' : screenProps.themeColor : '#c4c5c8', fontSize: 10, textAlign: 'center', marginBottom: 1.5, backgroundColor: 'transparent',}}>发帖</Text>),
    // lazy: true,
    headerStyle: {
      backgroundColor: screenProps.isNightMode? NIGHT_HEADER_COLOR : screenProps.themeColor,
      // paddingLeft: 8,
      // paddingRight: 8,
    },
    // tabBarOptions: {
    //   activeTintColor: screenProps.themeColor,
    //   // inactiveBackgroundColor: '#d73754'
    // },
    labelStyle: {
      color: screenProps.themeColor
    },
    headerLeft: <HeaderButton title='保存' textStyle={{color: '#ffffff', marginLeft: 8}}  handler={() => console.log('leftButtonPress')} /> ,
    headerRight: <HeaderButton title='发帖' textStyle={{color: '#ffffff', marginRight: 8}} handler={ navigation.state.params?  navigation.state.params.rightButtonHandler : null } />,
    tabBarIcon: ({  focused }) => (<Icon name={focused? 'ios-create' : 'ios-create-outline'} size={30} color={focused? screenProps.isNightMode? '#1f1f9f' : screenProps.themeColor : '#c4c5c8'} />)
  });

  constructor(props) {
    super(props);
    this.state = {
      titleText: '',
      contentText: '',
    }
  }

  componentDidMount() {
    console.log('new topic');
    this.props.navigation.setParams({
      rightButtonHandler: () => this.rightClick(),
    })
  }

  // checkTitleLength(str) {
  //   let len = 0;
  //   for (let i=0; i<this.length; i++) {
  //     if (this.charCodeAt(i)>127 || this.charCodeAt(i)==94) {
  //       len += 2;
  //     } else {
  //       len ++;
  //     }
  //   }
  // }

  rightClick() {
    if(!this.props.isLogged) {
      Alert.alert(
        '请先登录',
        null,
        [
          {text: '登录', onPress: () => this.props.navigation.navigate('Login', { onGoBack: null })},
          {text: '取消', }
        ],
      );
    }

    if(this.props.isLogged) {
      if(this.state.titleText.length <= 10) {
        console.log(this.state.titleText);
        console.log(this.state.titleText.length);
        console.log('title too short');
        Alert.alert(
          '标题字数 10 字以上',
          null,
          [
            {text: '确认'}
          ]
        )
        return false;
      }

      Alert.alert(
        '请选择一个版块',
        null,
        [
          {text: '问答', onPress: () => this.props.actions.postToCNode({isPosting: true, timeout: 10000, params: {accesstoken: this.props.accesstoken, title: this.state.titleText, tab: 'ask', content: this.state.contentText }})},
          {text: '分享', onPress: () => this.props.actions.postToCNode({isPosting: true, timeout: 10000, params: {accesstoken: this.props.accesstoken, title: this.state.titleText, tab: 'share', content: this.state.contentText }})},
          {text: '工作', onPress: () => this.props.actions.postToCNode({isPosting: true, timeout: 10000, params: {accesstoken: this.props.accesstoken, title: this.state.titleText, tab: 'job', content: this.state.contentText }})},
          {text: '取消', }
        ],
        // { cancelable: true }
      )
    }
  }

  render() {
    const { screenProps, isPosting, isPosted, actions } = this.props;
    console.log(this.props);
    if(!isPosted) {
      return (
        <KeyboardAvoidingView
          style={{ flex: 1, height: DeviceHeight - 150, backgroundColor: screenProps.isNightMode? NIGHT_BACKGROUND_COLOR : null }}
          behavior='padding'
          keyboardVerticalOffset={65}
        >
          {
            isPosting?
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
          <View style={styles.titleInputContainer}>
            <TextInput
              placeholder='请输入标题（10字以上)'
              onChangeText={(text) => this.setState({ titleText: text })}
              value={this.state.titleInput}
              style={[styles.titleInput, { color: screenProps.isNightMode? NIGHT_INPUT_COLOR : null }]}
              autoCapitalize='none'
              placeholderTextColor= { screenProps.isNightMode? NIGHT_PLACEHOLDERTEXT_COLOR : null }
            />
          </View>
          <View style={{flex: 1}}>
            <TextInput
              placeholder='请输入内容'
              autoCapitalize='none'
              onChangeText={(text) => this.setState({ contentText: text })}
              value={this.state.contentInput}
              style={[styles.contentInput, { color: screenProps.isNightMode? NIGHT_INPUT_COLOR : null }]}
              multiline={true}
              placeholderTextColor='#9e9e9e'
            />
          </View>
        </KeyboardAvoidingView>
      )
    } else {
      return (
        <View style={[styles.container, { backgroundColor: screenProps.isNightMode? NIGHT_BACKGROUND_COLOR : null }]}>
          <Text style={[styles.postSuccessText, { color: screenProps.isNightMode? NIGHT_INPUT_COLOR : null}]}>你的帖子已经发布成功</Text>
          <TouchableWithoutFeedback
            onPress={() => actions.postAgain({ isPosted: false })}
          >
            <View style={{marginTop: 20, backgroundColor: '#bac1c9', padding: 8, borderRadius: 5}}>
              <Text style={{color: '#f2f2f2', fontSize: 18}}>再发一帖</Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
      )
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  postSuccessText: {
    marginTop: 100,
    fontSize: 20
  },
  titleInputContainer: {
    borderBottomWidth: pixel,
    borderBottomColor: '#a0a6aa'
  },
  titleInput: {
    marginLeft: 8,
    height: 40,
    fontSize: 20,
    // flex: 1
  },
  contentInput: {
    // height: DeviceHeight - 304,
    // height: 400,
    marginLeft: 8,
    fontSize: 15,
    marginTop: 10,
    flex: 1
  }
});

const mapStateToProps = state => {
  const stateOfGlobalState = state.GlobalState.toJS();
  const stateOfNewTopicState = state.NewTopicState.toJS();
  return {
    isLogged: stateOfGlobalState.isLogged,
    isPosting: stateOfNewTopicState.isPosting,
    isPosted: stateOfNewTopicState.isPosted,
    topic_id: stateOfNewTopicState.topic_id,
    screenProps: stateOfGlobalState.screenProps,
    accesstoken: stateOfGlobalState.accesstoken
  }
}

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewTopic);
