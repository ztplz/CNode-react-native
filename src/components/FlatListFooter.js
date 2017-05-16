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

const FlatListFooter = props => {
  const { isLoadingMore, isLoadedAll, error } = props;
  if(isLoadingMore) {
    return (
      <View style={styles.container}>
        <ActivityIndicator />
        <Text style={styles.isLoadingMoreText}>正在加载...</Text>
      </View>
    )
  }

  if(error) {
    return (
      <View style={styles.container}>
        <Text style={styles.isLoadedAllText}>加载失败，请重试...</Text>
      </View>
    )
  }

  if(isLoadedAll) {
    return (
      <View style={styles.container}>
        <Text style={styles.isLoadedAllText}>已经加载全部内容...</Text>
      </View>
    )
  }

  return null
};

const styles = StyleSheet.create({
  container: {
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  isLoadingMoreText: {
    marginLeft: 10,
    color: '#676c67'
  },
  isLoadedAllText: {
    color: '#676c67',
  },
})

export default FlatListFooter;
