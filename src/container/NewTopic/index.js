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
  KeyboardAvoidingView,
  StyleSheet
} from 'react-native';
import { NavigationActions } from 'react-navigation'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';
import KeyboardSpacer from 'react-native-keyboard-spacer';
import { defaultHeader } from 'react-navigation';
import HeaderButton from '../../components/HeaderButton';
import { DeviceHeight, pixel } from '../../utils/deviceSize';

class NewTopic extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     titleText: '',
  //     contentText: '',
  //   }
  // }

  static navigationOptions = ({ navigation, screenProps }) => ({
    // title: navigation.state.params.title || '新建主题',
    // title: navigation.state.key,
    headerTintColor: '#ffffff',
    tabBarLabel: '发帖',
    // lazy: true,
    // headerStyle: {
    //   backgroundColor: '#878fe0',
    //   paddingLeft: 8,
    //   paddingRight: 8,
    // },
    headerLeft: <HeaderButton title='保存' textStyle={{color: '#ffffff'}}  handler={() => console.log('leftButtonPress')} /> ,
    headerRight: <HeaderButton title='发帖' textStyle={{color: '#ffffff'}} handler={() => console.log(this)} />,
    tabBarIcon: () => <Icon name='ios-create-outline' size={30} color='#c8bebe' />
  });

  // static navigationOptions = {
  //   title: '新建主题',
  //   headerTintColor: '#ffffff',
  //   tabBarLabel: '发帖',
  //   // lazyLoad: true,
  //   headerStyle: {
  //     backgroundColor: '#878fe0',
  //     paddingLeft: 8,
  //     paddingRight: 8,
  //   },
  //   headerLeft: <HeaderButton title='保存' textStyle={{color: '#ffffff'}}  handler={() => console.log('leftButtonPress')} /> ,
  //   headerRight: <HeaderButton title='发帖' textStyle={{color: '#ffffff'}} handler={() => console.log(this)} />,
  //   tabBarIcon: () => <Icon name='ios-create-outline' size={30} color='#c8bebe' />
  // };

  componentWillMount() {
    const setParamsAction = NavigationActions.setParams({
      params: { title: 'Hello' },
      key: this.props.navigation.state.key,
    });
    console.log(this.props);
    console.log(this.props.navigation.state.key);
    this.props.navigation.dispatch(setParamsAction);
  }

  rightClick() {
    if(!this.props.isLogged) {
      Alert.alert(
        '请先登录',
        null,
        [
          {text: '登录', onPress: () => this.props.navigation.navigate('Login', { onGoBack: () => this.props.actions.getTopicDetailData({topicId: this.props.navigation.state.params.topicId, accesstoken: this.props.accesstoken, isLoading: true, isLoaded: false, error: '', timeout: 10000})})},

        ],

      )
    }
  }

  render() {
    return (
      <KeyboardAvoidingView
        style={{ flex: 1, height: DeviceHeight - 150}}
        behavior='padding'
        keyboardVerticalOffset={65}
      >
        <View style={styles.titleInputContainer}>
          <TextInput
            placeholder='请输入标题'
            style={styles.titleInput}
            autoCapitalize='none'
          />
        </View>
        <View style={{flex: 1}}>
          <TextInput
            placeholder='请输入内容'
            autoCapitalize='none'
            style={styles.contentInput}
            multiline={true}
          />
        </View>
        {/* <KeyboardSpacer /> */}
      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
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
  return {
    isLogged: state.GlobalState.get('isLogged'),
  }
}

const mapDispatchToProps = dispatch => {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewTopic);
