/**
 * React Native App
 * https://github.com/ztplz/CNode-react-native
 * email: mysticzt@gmail.com
 */

import React, { Component } from 'react';
import {
  View,
  Text,
  Switch,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions/globalconfigActions';
import CustomRow from '../../components/CustomRow';
import Icon from 'react-native-vector-icons/Ionicons';
import { Pixel } from '../../utils/deviceSize';
import HTMLView from 'react-native-htmlview';
import {
  NIGHT_HEADER_COLOR,
  NIGHT_BACKGROUND_COLOR,
  NIGHT_SETTING_MOONROW_BACKGROUNDCOLOR,
  NIGHT_CUSTOMROW_TEXT_COLOR,
} from '../../constants/themecolor';

class Setting extends Component {
  static navigationOptions = ({ navigation, screenProps }) => ({
    title: '设置',
    headerTintColor: '#ffffff',
    headerStyle: {
      // backgroundColor: '#878fe0',
      backgroundColor: screenProps.isNightMode? NIGHT_HEADER_COLOR : screenProps.themeColor
    },
  });

  render() {
    const { screenProps, navigation } = this.props;
    return (
      <View style={[styles.container, { backgroundColor: screenProps.isNightMode? NIGHT_BACKGROUND_COLOR : null }]}>
        <CustomRow
          leftIcon={<Icon name='ios-moon' size={30} color='#8533d7' />}
          rightIcon={
            <Switch
              value={screenProps.isNightMode}
              onValueChange={() => this.props.actions.changeMode({isNightMode: !screenProps.isNightMode})}
              style={{}}
            />
          }
          title='夜间模式'
          titleStyle={{color: screenProps.isNightMode? NIGHT_CUSTOMROW_TEXT_COLOR : null }}
          rowStyle={[styles.moonRow,  { backgroundColor: screenProps.isNightMode? NIGHT_SETTING_MOONROW_BACKGROUNDCOLOR : '#ffffff'}]}
        />
        <View style={styles.themeColorContainer}>
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={() => navigation.navigate('ThemeColor')}
          >
            <CustomRow
              leftIcon={<Icon name='ios-color-palette' size={30} color='#32d7d7' />}
              rightIcon={<Icon name='ios-arrow-forward' size={20} color='#9d9eab' />}
              title='更改主题颜色'
              titleStyle={{ color: screenProps.isNightMode? NIGHT_CUSTOMROW_TEXT_COLOR : null }}
              rowStyle={[styles.themeColorRow, { backgroundColor: screenProps.isNightMode? NIGHT_SETTING_MOONROW_BACKGROUNDCOLOR : '#ffffff' }]}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.cleanContainer}>
          <TouchableOpacity
            activeOpacity={0.6}
          >
            <CustomRow
              leftIcon={<Icon name='ios-trash' size={30} color='#17ad14' />}
              rightIcon={<Icon name='ios-arrow-forward' size={20} color='#9d9eab' />}
              title='清理缓存'
              titleStyle={{ color: screenProps.isNightMode? NIGHT_CUSTOMROW_TEXT_COLOR : null }}
              rowStyle={[styles.cleanRow,  { backgroundColor: screenProps.isNightMode? NIGHT_SETTING_MOONROW_BACKGROUNDCOLOR : '#ffffff'}]}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.aboutContainer}>
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={() => navigation.navigate('About')}
          >
            <CustomRow
              leftIcon={<Icon name='ios-information-circle' size={30} color='#333737' />}
              rightIcon={<Icon name='ios-arrow-forward' size={20} color='#9d9eab' />}
              title='关于'
              titleStyle={{ color: screenProps.isNightMode? NIGHT_CUSTOMROW_TEXT_COLOR : null }}
              rowStyle={[styles.aboutRow, { backgroundColor: screenProps.isNightMode? NIGHT_SETTING_MOONROW_BACKGROUNDCOLOR : '#ffffff'}]}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.logoutContainer}>
          <TouchableOpacity
            activeOpacity={0.6}
          >
            <CustomRow
              leftIcon={<Icon name='ios-log-out' size={30} color='#de4a53' />}
              rightIcon={<Icon name='ios-arrow-forward' size={20} color='#9d9eab' />}
              title='退出登录'
              titleStyle={{ color: screenProps.isNightMode? NIGHT_CUSTOMROW_TEXT_COLOR : null }}
              rowStyle={[styles.logoutRow, { backgroundColor: screenProps.isNightMode? NIGHT_SETTING_MOONROW_BACKGROUNDCOLOR : '#ffffff'}]}
            />
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: this.props.screenProps.isNightMode? NIGHT_BACKGROUND_COLOR : null
  },
  moonRow: {
    marginTop: 20,
    borderBottomWidth: Pixel,
    borderTopWidth: Pixel,
    paddingTop: 5,
    paddingBottom: 5,
    borderColor: '#b2b0b6',
    backgroundColor: '#ffffff'
  },
  themeColorContainer: {
    marginTop: 35,
  },
  themeColorRow: {
    marginTop: 20,
    borderBottomWidth: Pixel,
    borderTopWidth: Pixel,
    paddingTop: 5,
    paddingBottom: 5,
    borderColor: '#b2b0b6',
    backgroundColor: '#ffffff'
  },
  cleanContainer: {
    marginTop: 20,
  },
  cleanRow: {
    borderBottomWidth: Pixel,
    borderTopWidth: Pixel,
    paddingTop: 5,
    paddingBottom: 5,
    borderColor: '#b2b0b6',
    backgroundColor: '#ffffff'
  },
  aboutContainer: {
    marginTop: 45,
  },
  aboutRow: {
    borderBottomWidth: Pixel,
    borderTopWidth: Pixel,
    paddingTop: 5,
    paddingBottom: 5,
    borderColor: '#b2b0b6',
    backgroundColor: '#ffffff'
  },
  logoutContainer: {
    marginTop: 80,
  },
  logoutRow: {
    borderBottomWidth: Pixel,
    borderTopWidth: Pixel,
    paddingTop: 5,
    paddingBottom: 5,
    borderColor: '#b2b0b6',
    backgroundColor: '#ffffff'
  }
});

const mapStateToProps = state => {
  console.log(state);
  return {
    // isNightMode: state.GlobalState.getIn(['scisNightMode,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Setting);
