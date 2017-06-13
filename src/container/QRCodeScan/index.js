/**
 * React Native App
 * https://github.com/ztplz/CNode-react-native
 * email: mysticzt@gmail.com
 */

import React, { Component } from 'react';
import {
  View,
  Text,
  Animated,
  Easing,
  TouchableWithoutFeedback,
  StyleSheet
} from 'react-native';
import Camera from 'react-native-camera';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions/qrcodescanActions';
import LoadingPage from '../../components/LoadingPage';
import { DeviceWidth, DeviceHeight } from '../../utils/deviceSize';
import {
  NIGHT_HEADER_COLOR
} from '../../constants/themecolor';

class QRCodeScan extends Component {
  static navigationOptions = ({ navigation, screenProps}) => ({
    title: '扫描二维码',
    headerTintColor: '#ffffff',
    headerStyle: {
      backgroundColor: screenProps.isNightMode? NIGHT_HEADER_COLOR : screenProps.themeColor
    },
  });

  constructor(props) {
    super(props);
    this.state = {
      animatedValue: new Animated.Value(0),
    }
  }

  componentDidMount() {
    this.scannerLineMove();
  }

  componentWillReceiveProps(nextProps) {
    if(!nextProps.isLogging && nextProps.isLoginSuccess) {
      this.props.navigation.goBack(this.props.navigation.state.params.currentPageKey);
      if(this.props.navigation.state.params.onGoBack) {
        this.props.navigation.state.params.onGoBack();
      }
    }
  }

  scannerLineMove() {
        this.state.animatedValue.setValue(0);
        Animated.timing(this.state.animatedValue, {
            toValue: 200,
            duration: 2000,
            easing: Easing.linear
        }).start(() => this.scannerLineMove());
    }

  render() {
    const { isReadingScan, screenProps, isLogging, isLoginSuccess,  actions, navigation, accesstoken } = this.props;
    console.log(this.props);
    if(isReadingScan) {
      return (
         <View style={{flex: 1}}>
          <Camera
            onBarCodeRead={(event) => actions.loginToCNode({isReadingScan: false, isLogging: true, timeout: 10000, params: {accesstoken: event.data}})}
            style={{flex: 1}}
          >
            <View style={{flex: 1 }}>
              <View style={{  height: (DeviceHeight - 250)/3, backgroundColor: '#000000', opacity: 0.7}}/>
              <View style={{flexDirection: 'row'}} >
                <View style={{width: (DeviceWidth -250)/2, height: 250, backgroundColor: '#000000', opacity: 0.7}} />
                <View style={{width: 250, height: 250, backgroundColor: 'transparent', borderWidth: 1, borderColor: '#f1f1f1', alignItems: 'center'}}>
                  <Animated.View style={[{height: 2, width: 200, marginTop: 20, backgroundColor: '#21cb74'}, {transform: [{translateY: this.state.animatedValue}] }]}/>
                  <View style={{width: 250, height: 125, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start'}}>
                    <View style={{width: 30, height: 30, marginTop: -23, marginLeft: -1,  borderLeftWidth: 3, borderTopWidth: 3, borderLeftColor: '#27a743', borderTopColor: '#27a743'}}/>
                    <View style={{width: 30, height: 30, marginTop: -23, marginRight: -1, borderRightWidth: 3, borderTopWidth: 3, borderRightColor: '#27a743', borderTopColor: '#27a743'}}/>
                  </View>
                  <View style={{width: 250, height: 125, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end'}}>
                    <View style={{width: 30, height: 30, marginLeft: -1, marginBottom: 22,  borderLeftWidth: 3, borderBottomWidth: 3, borderLeftColor: '#27a743', borderBottomColor: '#27a743'}}/>
                    <View style={{width: 30, height: 30,  marginRight: -1, marginBottom: 22, borderRightWidth: 3, borderBottomWidth: 3, borderRightColor: '#27a743', borderBottomColor: '#27a743'}}/>
                  </View>
                </View>
                <View style={{width: (DeviceWidth -250)/2, height: 250, backgroundColor: '#000000', opacity: 0.7}} />
              </View>
              <View style={{flex: 1, alignItems: 'center', backgroundColor: '#000000', opacity: 0.7}}>
                <Text style={{fontSize: 18, color: '#ffffff', backgroundColor: 'transparent', marginTop: 20}}>请将扫描框对准二维码</Text>
              </View>
            </View>
          </Camera>
        </View>
      )
    }

    if(isLogging) {
      return (
        <LoadingPage
          screenProps={screenProps}
          title='正在验证，请稍候...'
        />
      )
    }

    if(!isLogging && isLoginSuccess) {
      return null;
    }

    if(!isLogging && !isLoginSuccess) {
      return (
        <View style={styles.container}>
          <Text style={{fontSize: 17}}>对不起，你的 accesstoken 验证失败</Text>
          <TouchableWithoutFeedback
            onPress={() => actions.loginToCNode({isReadingScan: true, timeout: 10000, params: {accesstoken: '01605c45-3648-470a-8c2c-04551b61672b'}})}
            style={{marginTopq: 25}}
          >
            <View style={{backgroundColor: '#4970c9', padding: 5}}>
              <Text style={{fontSize: 20, color: '#ffffff'}}>重 试</Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
      )
    }
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
    isReadingScan: state.QRCodeScanState.get('isReadingScan'),
    isLogging: state.QRCodeScanState.get('isLogging'),
    isLoginSuccess: state.QRCodeScanState.get('isLoginSuccess'),
    accesstoken: state.GlobalState.get('accesstoken'),
  }
}

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(QRCodeScan);
