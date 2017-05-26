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
import * as actions from '../../actions/meActions';
import Icon from 'react-native-vector-icons/Ionicons';
import CustomRow from '../../components/CustomRow';
import { Pixel } from '../../utils/deviceSize';
import LoadingPage from '../../components/LoadingPage';
import timeDiff from '../../utils/timeDiffUtil';
import {
  NIGHT_HEADER_COLOR,
  NIGHT_BACKGROUND_COLOR,
  NIGHT_CUSTOMROW_TEXT_COLOR,
  NIGHT_ME_SETTING_BACKGROUND_COLOR
} from '../../constants/themecolor';

class Me extends Component {
  static navigationOptions = ({ navigation, screenProps }) => ({
    tabBarLabel: ({focused}) => (<Text style={{color: focused? screenProps.isNightMode? '#2f2f91' : screenProps.themeColor : '#c4c5c8', fontSize: 10, textAlign: 'center', marginBottom: 1.5, backgroundColor: 'transparent',}}>我的</Text>) ,
    tabBarIcon: ({ focused }) => (<Icon name={focused? 'ios-contact' : 'ios-contact-outline'} size={30} color={focused? screenProps.isNightMode? '#1f1f9f' : screenProps.themeColor : '#c4c5c8'} />),
    title: '我的',
    headerTintColor: '#ffffff',
    headerStyle: {
      backgroundColor: screenProps.isNightMode? NIGHT_HEADER_COLOR : screenProps.themeColor
    },
    tabBarOptions: {
      inactiveBackgroundColor: '#7c7c7c'
    },
  });

  componentWillReceiveProps(nextProps) {
    if(nextProps.isLogged && !nextProps.user_create_at ) {
      console.log(nextProps.isLogged);
      nextProps.actions.getMeData({loginname: nextProps.loginname, timeout: 10000})
    }
  }

  render() {
    const { isLogged, accesstoken, loginname, avatar_url, user_create_at, navigation, screenProps } = this.props;
    console.log(user_create_at);
    if(!isLogged) {
      return (
        <ScrollView style={[styles.container, { backgroundColor: screenProps.isNightMode? NIGHT_BACKGROUND_COLOR : null}]}>
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={() => navigation.navigate('Login', {onGoBack: null})}
            style={{marginTop: 50}}
          >
            <View style={styles.loginBtn}>
              <Text style={styles.loginBtnText}>你还未登录，请登录</Text>
            </View>
          </TouchableOpacity>
          <View style={styles.settingContainer}>
            <TouchableOpacity
              activeOpacity={0.6}
              onPress={() => navigation.navigate('Setting')}
            >
              <CustomRow
                leftIcon={<Icon name='ios-settings' size={30} color='#5b656c' />}
                rightIcon={<Icon name='ios-arrow-forward' size={20} color='#9d9eab' />}
                title='设置'
                  titleStyle={{ color: screenProps.isNightMode? NIGHT_CUSTOMROW_TEXT_COLOR : null }}
                rowStyle={[styles.settingRow, { backgroundColor: screenProps.isNightMode? NIGHT_ME_SETTING_BACKGROUND_COLOR : '#ffffff'}]}
              />
            </TouchableOpacity>
          </View>
        </ScrollView>
      )
    }

    if(isLogged) {
      return (
        <ScrollView style={[styles.container, { backgroundColor: screenProps.isNightMode? NIGHT_BACKGROUND_COLOR : null}]}>
          <View style={styles.userInfoContainer}>
            <Image source={{uri: avatar_url}} style={styles.avatar}/>
            <View style={styles.userInfo}>
              <Text style={styles.username}>{ loginname }</Text>
              <Text style={styles.createTime}>注册时间： {timeDiff(user_create_at)}</Text>
            </View>
          </View>
          <View style={styles.replyAndPostContainer}>
            <TouchableOpacity
              activeOpacity={0.6}
              onPress={() => navigation.navigate('RecentReply', {authorname: '我'})}
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
              onPress={() => navigation.navigate('RecentTopics', {authorname: '我'})}
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
              onPress={() => navigation.navigate('Collection', {isCurrentUser: true, authorname: loginname})}
            >
              <View>
                <CustomRow
                  leftIcon={<Icon name='ios-star' size={30} color='#e2525b' />}
                  rightIcon={<Icon name='ios-arrow-forward' size={20} color='#9d9eab' />}
                  title='我的收藏'
                  rowStyle={styles.collectionRow}
                />
              </View>
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
              onPress={() => navigation.navigate('Setting')}
            >
              <CustomRow
                leftIcon={<Icon name='ios-settings' size={30} color='#5b656c' />}
                rightIcon={<Icon name='ios-arrow-forward' size={20} color='#9d9eab' />}
                title='设置'
                rowStyle={styles.settingRow}
              />
            </TouchableOpacity>
          </View>

        </ScrollView>
      );
    }

    if(isLoading) {
      return (
        <LoadingPage title='正在加载，请稍候...' />
      )
    }

    if(error !== '') {
      return (
        <NetErrorPage
          error={error.message}
          handler={() => actions.getMeData({isLoading: true, isLoaded: false, username: loginname, timeout: 10000, error: ''})}
        />
      )
    }

    return null;
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
    color: '#e7e7e7'
  }
});

const mapStateToProps = state => {
  const GlobalState = state.GlobalState.toJS();
  return {
    // isLoading: state.MeState.get('isLoading'),
    isLogged: GlobalState.isLogged,
    accesstoken: GlobalState.accesstoken,
    loginname: GlobalState.loginname,
    avatar_url: GlobalState.avatar_url,
    user_create_at: GlobalState.user_create_at
  }
}

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Me);
