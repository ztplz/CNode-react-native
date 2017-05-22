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
  TouchableWithoutFeedback,
  TouchableHighlight,
  StyleSheet
} from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// import * as actions from '../../actions/messageActions';
import Icon from 'react-native-vector-icons/Ionicons';
import CustomRow from '../../components/CustomRow';
import { pixel } from '../../utils/deviceSize';
import LoadingPage from '../../components/LoadingPage';
// import NetErrorPage from '../../components/NetErrorPage';
import {
  NIGHT_HEADER_COLOR,
  NIGHT_BACKGROUND_COLOR,
  NIGHT_MESSAGE_UNLOGGED_TEXT_COLOR
} from '../../constants/themecolor';

class Message extends Component {
  static navigationOptions = ({ navigation, screenProps}) => ({
    // tabBarLabel: '消息',
    tabBarLabel: ({focused}) => (<Text style={{color: focused? screenProps.isNightMode? '#2f2f91' : screenProps.themeColor : '#c4c5c8', fontSize: 10, textAlign: 'center', marginBottom: 1.5, backgroundColor: 'transparent',}}>消息</Text>) ,
    lazyLoad: true,
    tabBarIcon: ({  focused }) => (<Icon name={focused? 'ios-chatbubbles' : 'ios-chatbubbles-outline'} size={30} color={focused? screenProps.isNightMode? '#1f1f9f' : screenProps.themeColor : '#c4c5c8'} />),
    title: '消息',
    headerTintColor: '#ffffff',
    headerStyle: {
      // backgroundColor: '#878fe0',
      backgroundColor: screenProps.isNightMode? NIGHT_HEADER_COLOR : screenProps.themeColor
    },
    // tabBarOptions: {
    //   activeTintColor: screenProps.themeColor,
    //   // inactiveBackgroundColor: '#d73754'
    // },
    labelStyle: {
      color: screenProps.themeColor
    }
  });

  // componentDidMount() {
  //   console.log('message componentDidMount')
  //   if(this.props.isLogged) {
  //     this.props.getMessage({accesstoken: this.props.accesstoken, timeout: 10000, isLoading: true, isLoaded: false, error: ''});
  //   }
  //
  //   return null;
  // }

  // componentWillReceiveProps() {
  //   this.props.actions.getMessage({accesstoken: this.props.accesstoken, timeout: 10000, isLoading: true, isLoaded: false, error: ''});
  // }

  render() {
    const { isLogged, navigation, screenProps } = this.props;

    if(!isLogged) {
      return (
        <View style={[styles.notLoggedPageContaienr, { backgroundColor: screenProps.isNightMode? NIGHT_BACKGROUND_COLOR : null }]}>
          <Text style={[styles.notLoggedPageText, { color: screenProps.isNightMode? NIGHT_MESSAGE_UNLOGGED_TEXT_COLOR : null }]}>你还未登录，请登录后查看</Text>
          <TouchableWithoutFeedback
            onPress={() => navigation.navigate('Login', { onGoBack: null})}
            // onPress={() => navigation.navigate('Login', { onGoBack: null})}
          >
            <View style={styles.notLoggedPageBtnContainer}>
              <Text style={styles.notLoggedPageBtnText}>登 录</Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
      )
    } else {
      return (
        <View>
          <TouchableHighlight
            underlayColor='#c0c2c3'
            onPress={() => navigation.navigate('UnreadMessage')}
          >
            <View>
              <CustomRow
                title='未读消息'
                // badge={data.hasnot_read_messages.length}
                leftIcon={<View style={styles.unreadMessageLeftIcon}><Icon name='ios-mail' size={30} color='#ffffff' /></View>}
                rightIcon={<Icon name='ios-arrow-forward' size={35} color='#9d9eab' />}
                rowStyle={styles.messageContainer}
                titleStyle={styles.messageTitle}
              />
            </View>

          </TouchableHighlight>
          <TouchableHighlight
            underlayColor='#c0c2c3'
            onPress={() => navigation.navigate('HavereadMessage')}
          >
            <View>
              <CustomRow
                title='已读消息'
                // badge={50}
                leftIcon={<View style={styles.havereadMessageLeftIcon}><Icon name='ios-mail-open' size={30} color='#ffffff' /></View>}
                rightIcon={<Icon name='ios-arrow-forward' size={35} color='#9d9eab' />}
                rowStyle={styles.messageContainer}
                titleStyle={styles.messageTitle}
              />
            </View>

          </TouchableHighlight>
        </View>

      )
    }

    // if(isLoading) {
    //   return (
    //     <LoadingPage title='正在加载中...' />
    //   )
    // }

    // if(isLoaded) {
    //   return (
    //     <View>
    //       <TouchableHighlight
    //         underlayColor='#c0c2c3'
    //         onPress={() => navigation.navigate('UnreadMessage')}
    //       >
    //         <View>
    //           <CustomRow
    //             title='未读消息'
    //             // badge={data.hasnot_read_messages.length}
    //             leftIcon={<View style={styles.unreadMessageLeftIcon}><Icon name='ios-mail' size={30} color='#ffffff' /></View>}
    //             rightIcon={<Icon name='ios-arrow-forward' size={35} color='#9d9eab' />}
    //             rowStyle={styles.messageContainer}
    //             titleStyle={styles.messageTitle}
    //           />
    //         </View>
    //
    //       </TouchableHighlight>
    //       <TouchableHighlight
    //         underlayColor='#c0c2c3'
    //         onPress={() => navigation.navigate('HavereadMessage')}
    //       >
    //         <View>
    //           <CustomRow
    //             title='已读消息'
    //             // badge={50}
    //             leftIcon={<View style={styles.havereadMessageLeftIcon}><Icon name='ios-mail-open' size={30} color='#ffffff' /></View>}
    //             rightIcon={<Icon name='ios-arrow-forward' size={35} color='#9d9eab' />}
    //             rowStyle={styles.messageContainer}
    //             titleStyle={styles.messageTitle}
    //           />
    //         </View>
    //
    //       </TouchableHighlight>
    //     </View>
    //
    //   )
    // }
  }
}

const styles = StyleSheet.create({
  notLoggedPageContaienr: {
    flex: 1,
    alignItems: 'center'
  },
  notLoggedPageText: {
    marginTop: 100,
    fontSize: 18
  },
  notLoggedPageBtnText: {
    fontSize: 20,
    color: '#ffffff'
  },
  notLoggedPageBtnContainer: {
    marginTop: 20,
    backgroundColor: '#bac1c9',
    padding: 5,
    borderRadius: 5
  },
  messageContainer: {
    height: 65,
    borderBottomWidth: pixel,
    borderBottomColor: '#89828a'
  },
  messageTitle: {
    fontSize: 15
  },
  unreadMessageLeftIcon: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#4493ba',
    borderRadius: 40
  },
  havereadMessageLeftIcon: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#e2415e',
    borderRadius: 40
  }
});

const mapStateToProps = state => {
  // const stateOfGlobalState = state.GlobalState.toJS();
  // const stateOfMessage = state.MessageState.toJS();
  // console.log(stateOfMessage);
  return {
    isLogged: state.GlobalState.get('isLogged'),
    // accesstoken: stateOfGlobalState.accesstoken,
    // isLoading: stateOfMessage.isLoading,
    // isLoaded: stateOfMessage.isLoaded,
    // error: stateOfMessage.error,
    // data: stateOfMessage.data,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    // actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Message);
