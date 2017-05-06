/**
 * React Native App
 * https://github.com/ztplz/CNode-react-native
 * email: mysticzt@gmail.com
 */

import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions/homepageActions';
import Icon from 'react-native-vector-icons/Ionicons';
import ScrollableTabView, { DefaultTabBar } from 'react-native-scrollable-tab-view';
import ScrollTab from './ScrollTab';
import LoadingPage from '../../components/LoadingPage';

class HomePage extends Component {

  // static navigationOptions = ({ navigation }) => ({
  //   tabBarLabel: '首页',
  //   // lazyLoad: true,
  //   tabBarIcon: () => <Icon name="ios-home-outline" size={30} color="#c8bebe" />,
  //   headerVisible: false,
  // })

  static navigationOptions = {
    tabBarLabel: '首页',
    // lazyLoad: true,
    tabBarIcon: () => <Icon name="ios-home-outline" size={30} color="#c8bebe" />,
    // headerVisible: false,
    header: null
  }

  constructor(props) {
    super(props);
    console.log(this.props);
    this.tabNames = [
      ['全部', 'all', 'ScrollTab_1', ],
      ['精华', 'good', 'ScrollTab_2', ],
      ['分享', 'share', 'ScrollTab_3',],
      ['问答', 'ask', 'ScrollTab_4', ],
      ['招聘', 'job', 'ScrollTab_5', ],
    ];
  }

  render() {
    const { state, actions, navigation } = this.props;
    // console.log(this.props);
    return (
      <ScrollableTabView
        renderTabBar={() => <DefaultTabBar />}
        tabBarBackgroundColor="#6076e6"
        tabBarUnderlineStyle={{ backgroundColor: '#f0f5f2' }}
        tabBarTextStyle={{ color: '#f0f5f2', marginTop: 20 }}
      >
        {
          this.tabNames.map(item => <ScrollTab
            tabLabel={item[0]}
            tabName={item[1]}
            key={item[2]}
            actions={actions}
            // isLoading={isLoading}
            // isRefreshing={isRefreshing}
            // isLoadingMore={isLoadingMore}
            // isLoaded={isLoaded}
            // isLoadedAll={isLoadedAll}
            // error={error}
            // date={date}
            // data={data}
            navigation={navigation}
            state={state[item[1]]}
          /> )
        }
      </ScrollableTabView>
    );
  }
}

const mapStateToProps = state => {
  // const stateOfHomePageState = state.HomePageState.toJS();
  return {
    // isLoading: stateOfHomePageState.isLoading,
    // isLoaded: stateOfHomePageState.isLoaded,
    // isRefreshing: stateOfHomePageState.isRefreshing,
    // isLoadingMore: stateOfHomePageState.isLoadingMore,
    // isLoadedAll: stateOfHomePageState.isLoadedAll,
    // error: stateOfHomePageState.error,
    // data: stateOfHomePageState.data
    state: state.HomePageState.toJS()
  }
};

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(actions, dispatch)
  }

};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
