/**
 * React Native App
 * https://github.com/ztplz/CNode-react-native
 * email: mysticzt@gmail.com
 */

// import React, { Component, PropTypes } from 'react';
import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  TouchableHighlight,
  StyleSheet
} from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions/globalconfigActions';
import Icon from 'react-native-vector-icons/Ionicons';
import CustomRow from '../../components/CustomRow';
import { Pixel } from '../../utils/deviceSize';

class Me extends Component {
  static navigationOptions = {
    tabBarLabel: '我的',
    lazyLoad: true,
    tabBarIcon: () => <Icon name='ios-contact-outline' size={30} color='#c8bebe' />,
    title: '我的',
    headerTintColor: '#ffffff',
    headerStyle: {
      backgroundColor: '#878fe0',
    },
  };

  render() {
    const { accesstoken } = this.props;

    if(accesstoken) {
      return (
        <ScrollView style={styles.container}>
          <View style={styles.userInfoContainer}>
            <Image source={require('../../components/test.jpg')} style={styles.avatar}/>
            <View style={styles.userInfo}>
              <Text style={styles.username}>mysticzt</Text>
              <Text style={styles.createTime}>注册时间： 五年前</Text>
            </View>
          </View>
          <View style={styles.replyAndPostContainer}>
            <TouchableOpacity
              activeOpacity={0.6}
            >
              <CustomRow
                leftIcon={<Icon name='ios-chatboxes' size={30} color='#635bed' />}
                rightIcon={<Icon name='ios-arrow-forward' size={20} color='#9d9eab' />}
                title='最近回复'
                rowStyle={styles.replyRow}
              />
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.6}
            >
              <CustomRow
                leftIcon={<Icon name='ios-brush' size={30} color='#e71fc7' />}
                rightIcon={<Icon name='ios-arrow-forward' size={20} color='#9d9eab' />}
                title='最近发帖'
                rowStyle={styles.postRow}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.collectionContainer}>
            <TouchableOpacity
              activeOpacity={0.6}
            >
              <CustomRow
                leftIcon={<Icon name='ios-star' size={30} color='#e2525b' />}
                rightIcon={<Icon name='ios-arrow-forward' size={20} color='#9d9eab' />}
                title='我的收藏'
                rowStyle={styles.collectionRow}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.draftboxContainer}>
            <TouchableOpacity
              activeOpacity={0.6}
            >
              <CustomRow
                leftIcon={<Icon name='ios-basket' size={30} color='#e2525b' />}
                rightIcon={<Icon name='ios-arrow-forward' size={20} color='#9d9eab' />}
                title='草稿箱'
                rowStyle={styles.collectionRow}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.settingContainer}>
            <TouchableOpacity
              activeOpacity={0.6}
            >
              <CustomRow
                leftIcon={<Icon name='ios-settings' size={30} color='#5b656c' />}
                rightIcon={<Icon name='ios-arrow-forward' size={20} color='#9d9eab' />}
                title='设置'
                rowStyle={styles.settingRow}
              />
            </TouchableOpacity>
          </View>
          {/* <View style={styles.cleanContainer}>
            <TouchableOpacity
              activeOpacity={0.6}
            >
              <CustomRow
                leftIcon={<Icon name='ios-trash' size={30} color='#8533d7' />}
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
                leftIcon={<Icon name='ios-information-circle' size={30} color='#32d7d7' />}
                rightIcon={<Icon name='ios-arrow-forward' size={20} color='#9d9eab' />}
                title='关于'
                rowStyle={styles.aboutRow}
              />
            </TouchableOpacity>
          </View> */}
        </ScrollView>
      );
    } else {
      return (
        <ScrollView style={styles.container}>
          {/* <View style={styles.userInfoContainer}>
            <Image source={require('../../components/test.jpg')} style={styles.avatar}/>
            <View style={styles.userInfo}>
              <Text style={styles.username}>mysticzt</Text>
              <Text style={styles.createTime}>注册时间： 五年前</Text>
            </View>
          </View> */}
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={() => this.props.navigation.navigate('Login')}
            style={{marginTop: 50}}
          >
            <View style={styles.loginBtn}>
              <Text style={styles.loginBtnText}>你还未登录，请登录</Text>
            </View>
          </TouchableOpacity>
          <View style={styles.settingContainer}>
            <TouchableOpacity
              activeOpacity={0.6}
            >
              <CustomRow
                leftIcon={<Icon name='ios-settings' size={30} color='#5b656c' />}
                rightIcon={<Icon name='ios-arrow-forward' size={20} color='#9d9eab' />}
                title='设置'
                rowStyle={styles.settingRow}
              />
            </TouchableOpacity>
          </View>
          {/* <View style={styles.cleanContainer}>
            <TouchableOpacity
              activeOpacity={0.6}
            >
              <CustomRow
                leftIcon={<Icon name='ios-trash' size={30} color='#8533d7' />}
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
                leftIcon={<Icon name='ios-information-circle' size={30} color='#32d7d7' />}
                rightIcon={<Icon name='ios-arrow-forward' size={20} color='#9d9eab' />}
                title='关于'
                rowStyle={styles.aboutRow}
              />
            </TouchableOpacity>
          </View> */}
        </ScrollView>
      )
    }
  }
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
  },
  userInfoContainer: {
    flexDirection: 'row',
    paddingLeft: 8,
    paddingRight: 8,
    paddingTop: 7,
    paddingBottom: 7,
    backgroundColor: '#ffffff',
    marginTop: 20,
  },
  avatar: {
    height: 45,
    width: 45,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#b2b0b6'
  },
  userInfo: {
    marginLeft: 10,
    justifyContent: 'space-between',
  },
  username: {
    fontSize: 18,

  },
  createTime: {
    fontSize: 12,
  },
  replyAndPostContainer: {
    marginTop: 20,
  },
  replyRow: {
    borderBottomWidth: Pixel,
    borderTopWidth: Pixel,
    paddingTop: 5,
    paddingBottom: 5,
    borderColor: '#b2b0b6',
    backgroundColor: '#ffffff'
  },
  postRow: {
    borderBottomWidth: Pixel,
    borderTopWidth: Pixel,
    paddingTop: 5,
    paddingBottom: 5,
    borderColor: '#b2b0b6',
    backgroundColor: '#ffffff'
  },
  collectionContainer: {
    marginTop: 20,
  },
  collectionRow: {
    borderBottomWidth: Pixel,
    borderTopWidth: Pixel,
    paddingTop: 5,
    paddingBottom: 5,
    borderColor: '#b2b0b6',
    backgroundColor: '#ffffff'
  },
  draftboxContainer: {
    marginTop: 20
  },
  draftboxRow: {
    borderBottomWidth: Pixel,
    borderTopWidth: Pixel,
    paddingTop: 5,
    paddingBottom: 5,
    borderColor: '#b2b0b6',
    backgroundColor: '#ffffff'
  },
  settingContainer: {
    marginTop: 40
  },
  settingRow: {
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
  loginBtn: {
    height: 50,
    // marginTop: 50,
    backgroundColor: '#e32872',
    justifyContent: 'center',
    alignItems: 'center'
  },
  loginBtnText: {
    fontSize: 20,
    color: '#ebeceb'
  }
});

const mapStateToProps = state => {
  const GlobalState = state.GlobalState.toJS();
  return {
    accesstoken: GlobalState.accesstoken
  }
}

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Me);
