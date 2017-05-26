/**
 * React Native App
 * https://github.com/ztplz/CNode-react-native
 * email: mysticzt@gmail.com
 */

import immutablePersistenceTransform from './immutablePersistenceTransform';
// import { persistentStoreBlacklist, persistentStoreWhitelist } from '../reducers/'
import { AsyncStorage } from 'react-native';
// import GlobalState from '../reducers/GlobalState';
import HomePageState from '../reducers/HomePageState';

const REDUX_PERSIST = {
  active: true,
  reducerVersion: '1',
  storeConfig: {
    storage: AsyncStorage,
    // blacklist: persistentStoreBlacklist,
    whitelist: [
      'GlobalState',
      // HomePageState
    ],
    transforms: [immutablePersistenceTransform]
  }
}

export default REDUX_PERSIST;
