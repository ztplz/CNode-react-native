/**
 * React Native App
 * https://github.com/ztplz/CNode-react-native
 * email: mysticzt@gmail.com
 */

// import React, { Component, PropTypes } from 'react';
import React, { Component } from 'react';
import { View, StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import AppNavigator from './AppNavigator';
import configStore from './store/configStore';
import { startup } from './actions/startupActions';
import GlobalConfigStorage from './localStorage/GlobalConfigStorage';


const store = configStore();
// const startupAction = {
//   ...new GlobalConfigStorage().getUserInfo(),
//   screenProps: {
//     isNightMode: new GlobalConfigStorage().getMode(),
//     themeColor: new GlobalConfigStorage().getThemeColor()
//   }
// }
// console.log(startupAction);
// store.dispatch(startup({
//
// }));

StatusBar.setBarStyle('light-content', true);

class CNode extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppNavigator />
        {/* <App /> */}
      </Provider>
    );
  }
}
// const CNode = () => (
//   <Provider store={store}>
//     <AppNavigator />
//   </Provider>
// );

// CNode.PropTypes = {
//   stroe: PropTypes.object.isRequired,
// };

export default CNode;
