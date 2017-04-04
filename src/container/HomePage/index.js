/**
 * React Native App
 * https://github.com/ztplz/CNode-react-native
 * email: mysticzt@gmail.com
 */

import React, { Component } from 'react';
// import {
//   Text,
// } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import ScrollableTabView, { DefaultTabBar } from 'react-native-scrollable-tab-view';
import ScrollTab from './ScrollTab';

console.log(ScrollTab);

class HomePage extends Component {
  static navigationOptions = {
    title: '首页',
    tabBar: {
      icon: () => <Icon name="ios-home-outline" size={30} color="#c8bebe" />,
    },
    header: {
      visible: false,
    },
  };

  constructor(props) {
    super(props);
    this.tabNames = [
      ['全部', 'all', 'ScrollTab_1'],
      ['精华', 'good', 'ScrollTab_2'],
      ['分享', 'share', 'ScrollTab_3'],
      ['问答', 'ask', 'ScrollTab_4'],
      ['招聘', 'job', 'ScrollTab_5'],
    ];
  }

  render() {
    return (
      <ScrollableTabView
        // style={{ paddingTop: 20 }}
        renderTabBar={() => <DefaultTabBar />}
        tabBarBackgroundColor="#6076e6"
        tabBarUnderlineStyle={{ backgroundColor: '#f0f5f2' }}
        tabBarTextStyle={{ color: '#f0f5f2', marginTop: 20 }}
      >
        { this.tabNames.map(item => (
          <ScrollTab tabLabel={item[0]} tabName={item[1]} key={item[2]} />
          ),
        )}
      </ScrollableTabView>
    );
  }
}

export default HomePage;
