/**
 * React Native App
 * https://github.com/ztplz/CNode-react-native
 * email: mysticzt@gmail.com
 */

import immutablePersistenceTransform from './immutablePersistenceTransform';
import { AsyncStorage } from 'react-native';
import HomePageState from '../reducers/HomePageState';
import MeState from '../reducers/MeState';

const REDUX_PERSIST = {
  active: true,
  reducerVersion: '1',
  storeConfig: {
    storage: AsyncStorage,
    whitelist: [
      'GlobalState',
      'MeState'
      // HomePageState
    ],
    transforms: [immutablePersistenceTransform]
  }
}

export default REDUX_PERSIST;
