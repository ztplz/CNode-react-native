/**
 * React Native App
 * https://github.com/ztplz/CNode-react-native
 * email: mysticzt@gmail.com
 */

import React, { Component } from 'react';
import { Text } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions/homepageActions';
import Icon from 'react-native-vector-icons/Ionicons';
import ScrollableTabView, { DefaultTabBar } from 'react-native-scrollable-tab-view';
import ScrollTab from './ScrollTab';
import LoadingPage from '../../components/LoadingPage';
import { deviceWidth, DeviceHeight, pixel } from '../../utils/deviceSize';
import {
  NIGHT_HEADER_COLOR
} from '../../constants/themecolor';

class HomePage extends Component {
  static navigationOptions = ({ navigation, screenProps }) => ({
    tabBarLabel: ({focused}) => (<Text style={{color: focused? screenProps.isNightMode? '#2f2f91' : screenProps.themeColor : '#c4c5c8', fontSize: 10, textAlign: 'center', marginBottom: 1.5, backgroundColor: 'transparent',}}>首页</Text>),
    tabBarIcon: ({  focused }) => (<Icon name={focused? "ios-home" : "ios-home-outline"} size={30}  color={focused? screenProps.isNightMode? '#1f1f9f' : screenProps.themeColor : '#c4c5c8'}  />),
    header: null,
    tabBarOptions: {
      activeTintColor: '#ff0000',
    },
  })

  constructor(props) {
    super(props);
    this.tabNames = [
      ['全部', 'all', 'ScrollTab_1', ],
      ['精华', 'good', 'ScrollTab_2', ],
      ['分享', 'share', 'ScrollTab_3',],
      ['问答', 'ask', 'ScrollTab_4', ],
      ['招聘', 'job', 'ScrollTab_5', ],
    ];
  }

  render() {
    const { state, actions, navigation, screenProps } = this.props;
    return (
      <ScrollableTabView
        renderTabBar={() => <DefaultTabBar style={{ borderWidth: 0}} />}
        tabBarBackgroundColor={screenProps.isNightMode? NIGHT_HEADER_COLOR : screenProps.themeColor}
        tabBarUnderlineStyle={{ backgroundColor: '#f0f5f2', }}
        tabBarTextStyle={{ color: '#f0f5f2', marginTop: 20 }}
      >
        {
          this.tabNames.map(item => <ScrollTab
            tabLabel={item[0]}
            tabName={item[1]}
            key={item[2]}
            actions={actions}
            screenProps={screenProps}
            navigation={navigation}
            state={state[item[1]]}
          /> )
        }
      </ScrollableTabView>
    );
  }
}

const mapStateToProps = state => {
  return {
    state: state.HomePageState.toJS()
  }
};

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(actions, dispatch)
  }

};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
