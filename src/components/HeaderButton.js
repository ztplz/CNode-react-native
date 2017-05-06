/**
 * React Native App
 * https://github.com/ztplz/CNode-react-native
 * email: mysticzt@gmail.com
 */

import React from 'react';
import {
  View,
  Text,
  TouchableWithoutFeedback,
} from 'react-native';

const HeaderButton = props => (
  <TouchableWithoutFeedback
    onPress={props.handler}
  >
    <View style={props.btnStyle}>
      {props.title? <Text style={props.textStyle}>{props.title}</Text> : null}
      {props.icon? props.icon : null}
      {/* <Text style={props.textStyle}>{props.title}</Text> */}
    </View>
  </TouchableWithoutFeedback>
);

export default HeaderButton;
