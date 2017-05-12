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

class Setting extends Component {
  static navigationOptions = {
    title: '设置',
    headerTintColor: '#ffffff',
    headerStyle: {
      backgroundColor: '#878fe0',
    },
  };

  render() {
    const { isNightMode, navigation } = this.props;
    console.log(isNightMode);
    return (
      <View style={styles.container}>
        <CustomRow
          leftIcon={<Icon name='ios-moon' size={30} color='#8533d7' />}
          rightIcon={
            <Switch
              value={isNightMode}
              onValueChange={() => this.props.actions.changeMode({isNightMode: !isNightMode})}
              style={{}}
            />
          }
          title='夜间模式'
          rowStyle={styles.moonRow}
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
              rowStyle={styles.themeColorRow}
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
              rowStyle={styles.cleanRow}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.aboutContainer}>
          <TouchableOpacity
            activeOpacity={0.6}
          >
            <CustomRow
              leftIcon={<Icon name='ios-information-circle' size={30} color='#333737' />}
              rightIcon={<Icon name='ios-arrow-forward' size={20} color='#9d9eab' />}
              title='关于'
              rowStyle={styles.aboutRow}
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
              rowStyle={styles.logoutRow}
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
    backgroundColor: null
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
    isNightMode: state.GlobalState.toJS().isNightMode,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Setting);
