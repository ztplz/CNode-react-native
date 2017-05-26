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
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions/globalconfigActions';
import CustomRow from '../../components/CustomRow';
import Icon from 'react-native-vector-icons/Ionicons';
import { Pixel } from '../../utils/deviceSize';
// import { changeThemeColor } from '../../AppNavigator';
// import { changeAppThemeColor } from '../../CNode';
import {
  NIGHT_HEADER_COLOR,
  NIGHT_BACKGROUND_COLOR
} from '../../constants/themecolor';
import GlobalConfigStorage from '../../localStorage/GlobalConfigStorage';

class ThemeColor extends Component {
  // static navigationOptions =（{navigation, screenProps}) =>（{
  //   // title:  navigation.state.params.title || '更改主题颜色',
  //   title: '更改主题颜色',
  //   headerTintColor: '#ffffff',
  //   headerStyle: {
  //     // backgroundColor: '#878fe0',
  //     backgroundColor: screenProps.themeColor
  //   },
  // };

  static navigationOptions = ({ navigation, screenProps }) => ({
    title: '更改主题颜色',
    headerTintColor: '#ffffff',
    headerStyle: {
      // backgroundColor: '#878fe0',
      backgroundColor: screenProps.isNightMode? NIGHT_HEADER_COLOR : screenProps.themeColor
    },
  });

  // static navigationOptions = {
  //   title:  '更改主题颜色',
  //   headerTintColor: '#ffffff',
  //   headerStyle: {
  //     // backgroundColor: '#878fe0',
  //     backgroundColor: screenProps.
  //   },
  // }

  constructor(props) {
    super(props);
    this.rows = [
      ['道奇蓝', 'dodgerblue', '#878fe0'],
      ['纯黑色', 'black', '#000000'],
      ['红色', 'red', '#ff0000'],
      ['燃橙色', 'bruntorange', '#ff7300'],
      ['卡布其', 'khaki', '#996b1f'],
      ['咖啡色', 'coffee', '#4d3900'],
      ['金色', 'golden', '#ffd700'],
      ['苹果绿', 'applegreen', '#8ce600'],
      ['紫罗兰', 'violet', '#8b00ff'],
      ['暖粉色', 'hotpink', '#ff69b4'],
    ]
  }

  itemChange(color) {
    new GlobalConfigStorage().saveThemeColor(color);
    this.props.actions.changeThemecolor({themeColor: color})
  }

  render() {
    const { screenProps } = this.props;
    console.log(this.props);
    // console.log(selectedColor);
    // console.log(themeColor);
    return (
      <ScrollView style={{ backgroundColor: screenProps.isNightMode? NIGHT_BACKGROUND_COLOR : null }}>
        <View style={[styles.container, ]}>
          {
            this.rows.map( (item, index) => (
              <View
                key={ 'ThemeColor' + index  }

              >
                <TouchableOpacity
                  activeOpacity={0.6}
                  // onPress={() => this.props.changeThemecolor({ selectedColor: item[1], themeColor: item[2] })}
                  // onPress={() => changeThemeColor(item[2])}
                  onPress = {() => this.itemChange(item[2]) }
                >
                  <CustomRow
                    leftIcon={ screenProps.themeColor === item[2] ? <Icon name='ios-checkmark-circle' size={20} color={item[2]} /> : <View style={styles.circle}></View>}
                    title={item[0]}
                    rowStyle={[styles.colorRow, { backgroundColor: screenProps.isNightMode? '#87838a' : '#ffffff' }]}
                    titleStyle={[styles.titleStyle, {color: item[2]}]}
                  />
                </TouchableOpacity>
              </View>
            ))
          }
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60
  },
  // colorContainer: {
  //   // marginTop: 30,
  // },
  colorRow: {
    borderBottomWidth: Pixel,
    borderTopWidth: Pixel,
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 10,
    borderColor: '#ffffff',
    backgroundColor: '#ffffff'
  },
  titleStyle: {
    marginLeft: 20
  },
  circle: {
    width: 17,
    height: 17,
    borderRadius: 17,
    borderWidth: 1,
    borderColor: '#bab2b2'
  }
});

const mapStateToProps = state => {
  // console.log(state.GlobalState.toJS());
  return {
    // themeColor: state.GlobalState.get('themeColor'),
    // selectedColor: state.GlobalState.get('selectedColor'),
  }
}

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ThemeColor);
