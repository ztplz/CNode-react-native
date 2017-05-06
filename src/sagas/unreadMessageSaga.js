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
  console.log(action.payload);
  try {
    const url = getMessageUrl +'?accesstoken=' + action.payload.accesstoken;
    const data = yield call(getFetch, action.payload.timeout, url);
    console.log(data);
    if(action.payload.hasOwnProperty('isLoading')) {
      yield put({
        type: FETCH_UNREADMESSAGE_DATA_SUCCESS,
        payload: {
          isLoading: false,
          data: data.hasnot_read_messages,
        }
      });
    } else {
      console.log('REFRESH_UNREADMESSAGE_DATA_SUCCESS');
      yield put({
        type: REFRESH_UNREADMESSAGE_DATA_SUCCESS,
        payload: {
          isRefreshing: false,
          data: data.hasnot_read_messages,
        }
      });
    }
  } catch(error) {
    if(action.payload.hasOwnProperty('isLoading')) {
      yield put({
        type: FETCH_UNREADMESSAGE_DATA_FAILURE,
        payload: {
          isLoading: false,
          error: error,
        }
      })
    } else {
      yield put({
        type: REFRESH_UNREADMESSAGE_DATA_FAILURE,
        payload: {
          isRefreshing: false,
          error: error,
        }
      })
    }
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
    yield call(fetchUnreadMessage, action);
  }
}
