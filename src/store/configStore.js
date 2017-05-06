/**
 * React Native App
 * https://github.com/ztplz/CNode-react-native
 * email: mysticzt@gmail.com
 */

import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';
import rootReducer from '../reducers';
import rootSaga from '../sagas';

const middlewares = [];
const enhancers = [];

const sagaMiddleware = createSagaMiddleware();
middlewares.push(sagaMiddleware);

if(process.env.NODE_ENV === 'development') {
  const logger = createLogger();
  middlewares.push(logger);
}

enhancers.push(applyMiddleware(...middlewares));

export default function configStore() {
  const store = createStore(rootReducer,  compose(...enhancers));
  sagaMiddleware.run(rootSaga);

  return store;
}
