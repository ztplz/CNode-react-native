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
  TouchableHighlight,
  StyleSheet
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Swipeout from 'react-native-swipeout';


var swipeoutBtns = [
  {
    text: '删除',
    backgroundColor: '#db5050',
    color: '#ffffff',
    type: 'secondary'
  }
]

const DraftBoxRow = props => (
  <Swipeout right={swipeoutBtns}>
    <View style={styles.container}>
      <Text style={styles.titleText}>{props.title}</Text>
    </View>
  </Swipeout>
)


const styles = StyleSheet.create({
  container: {
    paddingLeft: 8,
    justifyContent: 'center',
    height: 60,
    backgroundColor: '#3ce2d9'
  },
  titleText: {
    fontSize: 20
  }
});

export default DraftBoxRow;
