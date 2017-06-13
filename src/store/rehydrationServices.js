/**
 * React Native App
 * https://github.com/ztplz/CNode-react-native
 * email: mysticzt@gmail.com
 */

import ReduxPersist from './reduxPersist';
import { AsyncStorage } from 'react-native';
import { persistStore } from 'redux-persist';

const updateReducers = (store) => {

  const reducerVersion = ReduxPersist.reducerVersion
  const config = ReduxPersist.storeConfig

  AsyncStorage.getItem('reducerVersion').then((localVersion) => {
    if (localVersion !== reducerVersion) {
      persistStore(store, config).purge()
      AsyncStorage.setItem('reducerVersion', reducerVersion)
    } else {
      persistStore(store, config)
    }
  }).catch(() => {
    persistStore(store, config)
    AsyncStorage.setItem('reducerVersion', reducerVersion)
  })
}

export default { updateReducers }
