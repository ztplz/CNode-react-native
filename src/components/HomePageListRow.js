/**
 * React Native App
 * https://github.com/ztplz/CNode-react-native
 * email: mysticzt@gmail.com
 */

import React, { PropTypes } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const HomePageListRow = () => (
  <View style={styles.container}>
    <View style={styles.topContainer}>
      <View style={styles.topLeftContainer}>
        <Image source={require('../asset/images/test.jpg')} style={styles.avatar}/>
        <Text style={styles.authorName}>mysticzt</Text>
        <View style={styles.good}>
          <Text style={styles.goodText}>精华</Text>
        </View>
        <View style={styles.top}>
          <Text style={styles.topText}>置顶</Text>
        </View>
      <View>
      <View>
        <Icon name='ios-clock-outline' size={15} color='#62615a' />
        <Text>2012-01-01</Text>
        <View>
          <Text>全部</Text>
        </View>
      </View>
    </View>
    <Text>时光如梭，转眼间 Egg.js 已经开源半年了，我们很荣幸地宣布，Egg.js 正式发布 1.0 版本。</Text>
    <View>
      <View>
        <Icon name='ios-eye-outline' size={15} color='#62615a' />
        <Text>1123</Text>
        <Icon name='ios-text-outline' size={15} color='#62615a' />
        <Text>25</Text>
      </View>
      <Text>三天前</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    padding: 8
  },
  topContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  avatar: {
    width: 30,
    height: 30,
  },
  authorName: {
    marginLeft: 8,
    fontSize: 15,
    color: '#958994'
  },
  good: {
    marginLeft: 5,
    padding: 3,
    backgroundColor: '#ee535d',
    borderRadius: 10,
  },
  goodText: {
    fontSize: 13,
    color: '#f6f5f1'
  },
  top: {
    marginLeft: 3,
    padding: 3,
    backgroundColor: '#53dd58',
    borderRadius: 10,
  },
  topText: {
    fontSize: 13,
    color: '#f6f5f1',
  }
});

export default HomePageListRow;
