/**
 * React Native App
 * https://github.com/ztplz/CNode-react-native
 * email: mysticzt@gmail.com
 */

import {put, take, call, fork, race, takeEvery, takeLatest } from 'redux-saga/effects';
import {
  FETCH_UNREADMESSAGE_DATA,
  FETCH_UNREADMESSAGE_DATA_SUCCESS,
  FETCH_UNREADMESSAGE_DATA_FAILURE,
  REFRESH_UNREADMESSAGE_DATA,
  REFRESH_UNREADMESSAGE_DATA_SUCCESS,
  REFRESH_UNREADMESSAGE_DATA_FAILURE,
} from '../constants/actionTypes';
import { getFetch } from '../utils/fetchUtils';
import { getMessageUrl } from '../constants/api';

function* fetchUnreadMessage(action) {
  try {
    const url = getMessageUrl +'?accesstoken=' + action.payload.accesstoken;
    const data = yield call(getFetch, action.payload.timeout, url);
    console.log(data);
    yield put({
      type: FETCH_UNREADMESSAGE_DATA_SUCCESS,
      payload: {
        isLoading: false,
        isLoaded: true,
        data: data.hasnot_read_messages,
      }
    });
  } catch(error) {
    yield put({
      type: FETCH_UNREADMESSAGE_DATA_FAILURE,
      payload: {
        isLoading: false,
        error: error,
      }
    });
  }
}

function* refreshUnreadMessage(action) {
  try {
    const url = getMessageUrl +'?accesstoken=' + action.payload.accesstoken;
    const data = yield call(getFetch, action.payload.timeout, url);
    console.log(data);
    yield put({
      type: REFRESH_UNREADMESSAGE_DATA_SUCCESS,
      payload: {
        isRefreshing: false,
        data: data.hasnot_read_messages,
      }
    });
  } catch(error) {
    Toast.show('刷新失败，请重试...', {position: 80});
    yield put({
      type: REFRESH_UNREADMESSAGE_DATA_FAILURE,
      payload: {
        isRefreshing: false,
        error
      }
    });
  }
}

export function* watchFetchUnreadMessage() {
  while(true) {
    const action = yield take(FETCH_UNREADMESSAGE_DATA);
    yield call(fetchUnreadMessage, action);
  }
}

export function* watchRefreshUnreadMessage() {
  while(true) {
    const action = yield take(REFRESH_UNREADMESSAGE_DATA);
    yield call(refreshUnreadMessage, action);
  }
}
