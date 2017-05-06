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
  StyleSheet
} from 'react-native';
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
  static navigationOptions = {
    title: '新建主题',
    headerTintColor: '#ffffff',
    tabBarLabel: '发帖',
    // lazyLoad: true,
    headerStyle: {
      backgroundColor: '#878fe0',
      paddingLeft: 8,
      paddingRight: 8,
    },
    headerLeft: <HeaderButton title='预览' textStyle={{color: '#ffffff'}}  handler={() => console.log('leftButtonPress')} /> ,
    headerRight: <HeaderButton title='发帖' textStyle={{color: '#ffffff'}} handler={() => console.log('rightButtonPress')} />,
    tabBarIcon: () => <Icon name='ios-create-outline' size={30} color='#c8bebe' />
  };

  render() {
    return (
      <View style={{ flex: 1}}>
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
        <KeyboardSpacer />
      </View>
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
    marginLeft: 8,
    fontSize: 15,
    marginTop: 10,
    // flex: 1
  }
});


export default NewTopic;
