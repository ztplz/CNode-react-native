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
  ActivityIndicator,
  StyleSheet,
} from 'react-native';

const LoadingPage = props => (
  <View style={styles.container}>
    <ActivityIndicator
      style={styles.activityIndicator}
      size='large'
    />
    <Text style={styles.text}>{props.title}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
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
