/**
 * React Native App
 * https://github.com/ztplz/CNode-react-native
 * email: mysticzt@gmail.com
 */

import React, { Component } from 'react';
import {
  View,
  Text,
  ScrollView,
  Linking,
  TouchableWithoutFeedback,
  StyleSheet
} from 'react-native';
import { deviceWidth } from '../../utils/deviceSize';
import {
  NIGHT_HEADER_COLOR,
  NIGHT_BACKGROUND_COLOR,
  NIGHT_ABOUT_TEXT_COLOR
} from '../../constants/themecolor';

class About extends Component {
  static navigationOptions = ({ navigation, screenProps }) => ({
    title: '关于',
    headerTintColor: '#ffffff',
    headerStyle: {
      backgroundColor: screenProps.isNightMode? NIGHT_HEADER_COLOR : screenProps.themeColor
    },
  })

  render() {
    const { screenProps } = this.props;
    return (
      <ScrollView style={[styles.container, { backgroundColor: screenProps.isNightMode? NIGHT_BACKGROUND_COLOR : null}]}>
        <View style={styles.itemContainer}>
          <Text style={[styles.itemText, { color: screenProps.isNightMode? NIGHT_ABOUT_TEXT_COLOR : null }]}>项目地址：</Text>
            <Text
              style={styles.projectUrl}
              onPress={() => Linking.openURL('https://github.com/ztplz/CNode-react-native')}
            >
              https://github.com/ztplz/CNode-react-native
            </Text>
        </View>
        <View style={styles.itemContainer}>
          <Text style={[styles.itemText, { color: screenProps.isNightMode? NIGHT_ABOUT_TEXT_COLOR : null }]}>作者邮箱：</Text>
          <Text style={[styles.mailText, { color: screenProps.isNightMode? NIGHT_ABOUT_TEXT_COLOR : null }]}>mysticzt@gmail.com</Text>
        </View>
        <View style={styles.itemContainer}>
          <Text style={[styles.itemText, { color: screenProps.isNightMode? NIGHT_ABOUT_TEXT_COLOR : null }]}>App所使用的开源组件：</Text>
          <Text style={[styles.componentsText, { marginTop: 10 }, { color: screenProps.isNightMode? NIGHT_ABOUT_TEXT_COLOR : null }]}>immutable</Text>
          <Text style={[styles.componentsText, { color: screenProps.isNightMode? NIGHT_ABOUT_TEXT_COLOR : null }]}>lodash</Text>
          <Text style={[styles.componentsText, { color: screenProps.isNightMode? NIGHT_ABOUT_TEXT_COLOR : null }]}>react</Text>
          <Text style={[styles.componentsText, { color: screenProps.isNightMode? NIGHT_ABOUT_TEXT_COLOR : null }]}>react-native</Text>
          <Text style={[styles.componentsText, { color: screenProps.isNightMode? NIGHT_ABOUT_TEXT_COLOR : null }]}>redux</Text>
          <Text style={[styles.componentsText, { color: screenProps.isNightMode? NIGHT_ABOUT_TEXT_COLOR : null }]}>redux-logger</Text>
          <Text style={[styles.componentsText, { color: screenProps.isNightMode? NIGHT_ABOUT_TEXT_COLOR : null }]}>redux-saga</Text>
          <Text style={[styles.componentsText, { color: screenProps.isNightMode? NIGHT_ABOUT_TEXT_COLOR : null }]}>react-navigation</Text>
          <Text style={[styles.componentsText, { color: screenProps.isNightMode? NIGHT_ABOUT_TEXT_COLOR : null }]}>react-redux</Text>
          <Text style={[styles.componentsText, { color: screenProps.isNightMode? NIGHT_ABOUT_TEXT_COLOR : null }]}>react-native-camera</Text>
          <Text style={[styles.componentsText, { color: screenProps.isNightMode? NIGHT_ABOUT_TEXT_COLOR : null }]}>react-native-htmlview</Text>
          <Text style={[styles.componentsText, { color: screenProps.isNightMode? NIGHT_ABOUT_TEXT_COLOR : null }]}>react-native-root-toast</Text>
          <Text style={[styles.componentsText, { color: screenProps.isNightMode? NIGHT_ABOUT_TEXT_COLOR : null }]}>react-native-scrollable-tab-view</Text>
          <Text style={[styles.componentsText, { color: screenProps.isNightMode? NIGHT_ABOUT_TEXT_COLOR : null }]}>react-native-vector-icons</Text>
        </View>
        <View style={[styles.itemContainer, { marginTop: 25}]}>
          <Text style={[styles.itemText, { color: screenProps.isNightMode? NIGHT_ABOUT_TEXT_COLOR : null }]}>如有疑问或建议，请在gtihub上提issue或者发送邮件到我邮箱，欢迎star和fork，欢迎pr！</Text>
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 8,
    paddingRight: 8
  },
  itemContainer: {
    paddingLeft: 8,
    marginTop: 20
  },
  itemText: {
    fontSize: 18,
  },
  projectUrl: {
    marginTop: 8,
    marginLeft: 16,
    fontSize: 18,
    color: '#e94545'
  },
  mailText: {
    marginTop: 8,
    marginLeft: 16,
    fontSize: 17
  },
  componentsText: {
    marginLeft: 16,
    fontSize: 17
  }
})

export default About;
