/**
 * React Native App
 * https://github.com/ztplz/CNode-react-native
 * email: mysticzt@gmail.com
 */

import { put, take, call, fork, race, takeEvery, takeLatest } from 'redux-saga/effects';
import {
  FETCH_MESSAGE,
  FETCH_MESSAGE_SUCCESS,
  FETCH_MESSAGE_FAILURE
} from '../constants/actionTypes';
import { getFetch } from '../utils/fetchUtils';
import { getMessageUrl } from '../constants/api';

function* fetchMessage(action) {
  try {
    console.log(action);
    const url = getMessageUrl + '?accesstoken=' + action.payload.accesstoken;
    const data = yield call(getFetch, action.payload.timeout, url);
    yield put({
      type: FETCH_MESSAGE_SUCCESS,
      payload: {
        isLoading: false,
        isLoaded: true,
        data
      }
    });
  } catch(error) {
    console.log(error);
    yield put({
      type: FETCH_MESSAGE_FAILURE,
      payload: {
        isLoading: false,
        error
      }
    });
  }
}

export function* watchFetchMessage() {
  while(true) {
    const action = yield take(FETCH_MESSAGE);
    console.log(action);
    yield call(fetchMessage, action)
  }
}
