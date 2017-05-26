/**
 * React Native App
 * https://github.com/ztplz/CNode-react-native
 * email: mysticzt@gmail.com
 */

import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { autoRehydrate } from 'redux-persist'
import { createLogger } from 'redux-logger';
import rootReducer from '../reducers';
import rootSaga from '../sagas';
import RehydrationServices from './rehydrationServices';
import ReduxPersist from './reduxPersist';

const middlewares = [];
const enhancers = [];

const sagaMiddleware = createSagaMiddleware();
middlewares.push(sagaMiddleware);

if(process.env.NODE_ENV === 'development') {
  const logger = createLogger();
  middlewares.push(logger);
}

// enhancers.push(applyMiddleware(...middlewares));
//
// export default function configStore() {
//   const store = createStore(rootReducer,  compose(...enhancers));
//   sagaMiddleware.run(rootSaga);
//
//   return store;
// }

export default function configStore() {
  enhancers.push(applyMiddleware(...middlewares));

  if (ReduxPersist.active) {
    enhancers.push(autoRehydrate());
  }

  const store = createStore(rootReducer, compose(...enhancers));

  if (ReduxPersist.active) {
    console.log('sagdsagd');
    RehydrationServices.updateReducers(store);
  }

  sagaMiddleware.run(rootSaga);

  return store;
}
