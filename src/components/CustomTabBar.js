/**
 * React Native App
 * https://github.com/ztplz/CNode-react-native
 * email: mysticzt@gmail.com
 */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import { connect } from 'react-redux';
import { TabBarBottom } from 'react-navigation';

class CustomTabBar extends Component {
  render() {
    const { screenProps } = this.props;
    return (
      <TabBarBottom
        {...this.props}
        style={{
          backgroundColor: screenProps.isNightMode? '#797979' : '#f4f4f4'
        }}
      />
    )
  }
}

const mapStateToProps = state => {
  return {
    screenProps: state.GlobalState.get('screenProps').toJS()
  }
}

const mapDispatchToProps = dispatch => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(CustomTabBar);
