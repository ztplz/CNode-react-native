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

// console.log(configStore);

const store = configStore();
// store.dispatch()
// console.log(store.getState());
// let themeColor;
// export function changeAppThemeColor(payload) {
//   console.log(payload);
//   themeColor = payload.themecolor;
//   console.log(themeColor);
// }
// console.log(themeColor);

class CNode extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppNavigator />
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
