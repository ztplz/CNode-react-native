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
  StyleSheet
} from 'react-native';
import { DeviceHeight, pixel } from '../../utils/deviceSize';

class ReplyPage extends Component {
  static navigationOptions = ({ navigation}) => ({
    title: '回复',
    headerTintColor: '#ffffff',
    headerStyle: {
      backgroundColor: '#878fe0',
    },
  })

  render() {
    return (
      <KeyboardAvoidingView>
        <TextInput
          style={{height: DeviceHeight/2, borderColor: 'gray', borderWidth: pixel, paddingLeft: 10, fontSize: 20}}
          placeholder='请输入评论内容'
          multiline={true}
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
})

export default ReplyPage;
