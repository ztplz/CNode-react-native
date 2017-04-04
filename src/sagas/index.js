/**
 * React Native App
 * https://github.com/ztplz/CNode-react-native
 * email: mysticzt@gmail.com
 */

import { fork } from 'redux-saga/effects';
import { watchFetchHomePageData } from './homepageSaga';

export default function* rootSaga() {
  yield [
    fork(watchFetchHomePageData),
  ];
}
