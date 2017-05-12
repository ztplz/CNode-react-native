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
import { changeThemecolor } from '../../actions/globalconfigActions';
import CustomRow from '../../components/CustomRow';
import Icon from 'react-native-vector-icons/Ionicons';
import { Pixel } from '../../utils/deviceSize';
import { changeThemeColor } from '../../AppNavigator';

class ThemeColor extends Component {
  // static navigationOptions =（{navigation} =>（{
  //   // title:  navigation.state.params.title || '更改主题颜色',
  //   title: '更改主题颜色',
  //   headerTintColor: '#ffffff',
  //   headerStyle: {
  //     backgroundColor: '#878fe0',
  //   },
  // }）

  static navigationOptions = {
    title:  '更改主题颜色',
    headerTintColor: '#ffffff',
    headerStyle: {
      backgroundColor: '#878fe0',
    },
  }

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

  componentDidMount() {
    this.props.navigation.setParams({title: 123});
  }
  render() {
    const { selectedColor, themeColor } = this.props;
    console.log(this.props);
    console.log(selectedColor);
    console.log(themeColor);
    return (
      <ScrollView>
        <View style={styles.container}>
          {
            this.rows.map( (item, index) => (
              <View key={ 'ThemeColor' + index  }>
                <TouchableOpacity
                  activeOpacity={0.6}
                  // onPress={() => this.props.changeThemecolor({ selectedColor: item[1], themeColor: item[2] })}
                  onPress={() => changeThemeColor(item[2])}
                >
                  <CustomRow
                    leftIcon={ selectedColor === item[1] ? <Icon name='ios-checkmark-circle' size={20} color={item[2]} /> : <View style={styles.circle}></View>}
                    title={item[0]}
                    rowStyle={styles.colorRow}
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
    borderColor: '#b2b0b6',
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
  console.log(state.GlobalState.toJS());
  return {
    themeColor: state.GlobalState.get('themeColor'),
    selectedColor: state.GlobalState.get('selectedColor'),
  }
}

const mapDispatchToProps = dispatch => {
  return {
    changeThemecolor: bindActionCreators(changeThemecolor, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ThemeColor);
