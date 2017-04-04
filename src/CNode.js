/**
 * React Native App
 * https://github.com/ztplz/CNode-react-native
 * email: mysticzt@gmail.com
 */

import React from 'react';
import { Provider } from 'react-redux';
import AppNavigator from './AppNavigator';
import configStore from './store/configStore';
import rootSaga from './sagas';

const store = configStore();
store.runSaga(rootSaga);

const CNode = () => (
  <Provider store={store}>
    <AppNavigator />
  </Provider>
);

export default CNode;
