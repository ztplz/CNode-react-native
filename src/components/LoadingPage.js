/**
 * React Native App
 * https://github.com/ztplz/CNode-react-native
 * email: mysticzt@gmail.com
 */

import React from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
import {
  NIGHT_BACKGROUND_COLOR,
  NIGHT_LOADINGPAGE_TEXT
} from '../constants/themecolor';

const LoadingPage = props => (
  <View style={[styles.container, { backgroundColor: props.screenProps.isNightMode? NIGHT_BACKGROUND_COLOR : null}]}>
    <ActivityIndicator
      style={styles.activityIndicator}
      size='large'
    />
    <Text style={[styles.text, { color: props.screenProps.isNightMode? NIGHT_LOADINGPAGE_TEXT : null }]}>{props.title}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1
  },
  activityIndicator: {
    marginTop: 50,
  },
  text: {
    fontSize: 15,
    marginTop: 20,
    color: '#443f3f',
  }
});

export default LoadingPage;
