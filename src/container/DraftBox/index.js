/**
 * React Native App
 * https://github.com/ztplz/CNode-react-native
 * email: mysticzt@gmail.com
 */

import React, { Component } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet
} from 'react-native';
import Swipeout from 'react-native-swipeout';
import DraftBoxRow from '../../components/DraftBoxRow';
import {
  NIGHT_HEADER_COLOR
} from '../../constants/themecolor';

class DraftBox extends Component {
  static navigationOptions = {
    title: '草稿箱',
    headerTintColor: '#ffffff',
    headerStyle: {
      backgroundColor: '#878fe0',
    },
  };

  constructor(props) {
    super(props);
    this.state = {
      data: [
        {title: 'asgdadsgsadgsadgasdgasdgasgasgd', key: '1'},
        {title: 'asgdasgasgdasgsagasgsag',  key: '2'},
        {title: 'asdgasdgasdgasgasgasgsadg',  key: '3'},
        {title: 'asgdasgasgdasgsa爱上电视柜gasgsag',  key: '4'},
        {title: 'asdga大飒飒大嘎达是gasgasgasgsadg',  key: '5'},
      ]
    }
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <FlatList
          data={this.state.data}
          renderItem={({item}) => <DraftBoxRow title={item.title} />}
          keyExtractor={item => item.key}
        />
      </View>
    )
  }
}

export default DraftBox;
