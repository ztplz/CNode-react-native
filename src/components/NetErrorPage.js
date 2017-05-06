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
  TouchableWithoutFeedback,
  StyleSheet,
} from 'react-native';

const NetErrorPage = props => (
  <View style={styles.container}>
    <Text style={styles.textStyle}>
      {props.error === 'FETCH_TIME_OUT'? '网络请求超时，请重试或者检查网络...' : null}
      {props.error === 'FETCH_ERROR'? '服务器响应错误， 请重试...' : null}
    </Text>
    <TouchableWithoutFeedback
      onPress={props.handler}
    >
      <View style={styles.btn}>
        <Text style={styles.btnText}>重 试</Text>
      </View>
    </TouchableWithoutFeedback>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  textStyle: {
    marginTop: 100,
    fontSize: 18
  },
  btn: {
    marginTop: 20,
    backgroundColor: '#bac1c9',
    padding: 5,
    borderRadius: 5
  },
  btnText: {
    fontSize: 20,
    color: '#ffffff'
  }
})

export default NetErrorPage;
