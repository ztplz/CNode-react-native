/**
 * React Native App
 * https://github.com/ztplz/CNode-react-native
 * email: mysticzt@gmail.com
 */

import React, { PropTypes } from 'react';
import {
  View,
  Text,
} from 'react-native';
import HomePageListRow from '../../components/HomePageListRow';

const ScrollTab = props => (
  <View>
    <HomePageListRow />
  </View>
);

ScrollTab.propTypes = {
  tabLabel: PropTypes.string.isRequired,
};

export default ScrollTab;
