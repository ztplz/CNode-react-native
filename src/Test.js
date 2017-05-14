import React, { Component } from 'react';
import {
  TextInput,
  KeyboardAvoidingView
} from 'react-native';

class Test extends Component {
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
