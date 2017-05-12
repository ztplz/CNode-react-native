/**
 * React Native App
 * https://github.com/ztplz/CNode-react-native
 * email: mysticzt@gmail.com
 */

import {put, take, call, fork, race, takeEvery, takeLatest } from 'redux-saga/effects';
import {
  START_UP
} from '../constants/actionTypes';
import GlobalConfigStorage from '../localStorage/GlobalConfigStorage';

function* appStartUp(actions) {
  try {
    const data = new GlobalConfigStorage().getUserInfo();
    if(data) {
      yield put({
        type: GET_USERINFO_SUCCESS,
        payload: {
          data
        }
      })
    }
  } catch(error) {
    console.log(error);
  }
}

export function* watchAppStartUp() {
  while(true) {
    const action = yield take(START_UP);
    console.log(action);
    yield call(appStartUp, action);
  }
}
