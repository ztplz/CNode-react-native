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
  UNREADMESSAGE_REPLY
} from '../constants/actionTypes';
import { getFetch, postFetch } from '../utils/fetchUtils';
import { getMessageUrl, replyToUserUrl } from '../constants/api';
import Toast from 'react-native-root-toast';

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

function* unreadMessageReply(action) {
  try {
    const url = replyToUserUrl + action.payload.topic_id + '/replies';
    const res = yield call(postFetch, action.payload.timeout, url, action.payload.params);
    if(res.success === true) {
      Toast.show('回复成功', {position: 80});
    }
  } catch(error) {
    Toast.show('回复失败', {position: 80});
    // yield put({
    //   type: REFRESH_UNREADMESSAGE_DATA_FAILURE,
    //   payload: {
    //     isRefreshing: false,
    //     error
    //   }
    // });
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

export function* watchUnreadMessageReply() {
  while(true) {
    const action = yield take(UNREADMESSAGE_REPLY);
    yield call(unreadMessageReply, action);
  }
}
