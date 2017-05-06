/**
 * React Native App
 * https://github.com/ztplz/CNode-react-native
 * email: mysticzt@gmail.com
 */

import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableWithoutFeedback,
  StyleSheet
} from 'react-native';
import Camera from 'react-native-camera';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions/qrcodescanActions';
import LoadingPage from '../../components/LoadingPage';

class QRCodeScan extends Component {
  static navigationOptions = {
    title: '扫描二维码',
    headerTintColor: '#ffffff',
    headerStyle: {
      backgroundColor: '#878fe0',
    },
  };

  render() {
    const { isLogging, isLoginFailed,  actions, navigation } = this.props;
    console.log(this.props.navigation);

    if(!isLogging && !isLoginFailed) {
      return (
        <View style={styles.container}>
          <TouchableWithoutFeedback
            onPress={() => actions.loginToCNode({timeout: 10000, params: {accesstoken: '01605c45-3648-470a-8c2c-04551b61672b'}})}
          >
            <View style={{backgroundColor: '#4970c9', padding: 5}}>
              <Text style={{fontSize: 20, color: '#ffffff'}}>登 录</Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
      )
    }

    if(isLogging) {
      return (
        <LoadingPage title='正在验证，请稍候...'/>
      )
    }

    if(!isLogging && isLogging) {
      return (
        <View style={styles.container}>
          <Text style={{fontSize: 17}}>对不起，你的 accesstoken 验证失败</Text>
          <TouchableWithoutFeedback
            onPress={() => actions.loginToCNode({timeout: 10000, params: {accesstoken: '01605c45-3648-470a-8c2c-04551b61672b'}})}
            style={{marginTopq: 25}}
          >
            <View style={{backgroundColor: '#4970c9', padding: 5}}>
              <Text style={{fontSize: 20, color: '#ffffff'}}>登 录</Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
      )
    }


    // if(!isLoginFailed) {
    //   return (
    //     <View style={styles.container}>
    //       {/* <Camera
    //         onBarCodeRead
    //         style={styles.preview}
    //       >
    //         <Text style={styles.capture} onPress={this.takePicture.bind(this)}>[CAPTURE]</Text>
    //       </Camera> */}
    //       <TouchableWithoutFeedback
    //         onPress={() => actions.loginToCNode({timeout: 10000, params: {accesstoken: '01605c45-3648-470a-8c2c-04551b61672b'}})}
    //       >
    //         <View style={{backgroundColor: '#4970c9', padding: 5}}>
    //           <Text style={{fontSize: 20, color: '#ffffff'}}>登 录</Text>
    //         </View>
    //       </TouchableWithoutFeedback>
    //       {/* <Text>asdgasdg</Text> */}
    //     </View>
    //   )
    // } else {
    //   return (
    //     <View style={{justifyContent: 'center', alignItems: 'center'}}>
    //       <TouchableWithoutFeedback
    //         onPress={() => actions.retryToLogin({isLoginFailed: false})}
    //       >
    //         <View style={{padding: 5, backgroundColor: '#8572dd'}}>
    //           <Text style={{fontSize: 20}}>重 试</Text>
    //         </View>
    //       </TouchableWithoutFeedback>
    //       <Text>登录失败</Text>
    //     </View>
    //   )
    // }

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

const mapStateToProps = state => {
  return {
    isLogging: state.QRCodeScanState.get('isLogging'),
    isLoginFailed: state.QRCodeScanState.get('isLoginFailed'),
    // accesstoken: state.GlobalState.get('accesstoken')
  }
}

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(QRCodeScan);
