/**
 * React Native App
 * https://github.com/ztplz/CNode-react-native
 * email: mysticzt@gmail.com
 */

import {put, take, call } from 'redux-saga/effects';
import {
  HAVEREADMESSAGE_REPLY,
  FETCH_HAVEREADMESSAGE_DATA,
  FETCH_HAVEREADMESSAGE_DATA_SUCCESS,
  FETCH_HAVEREADMESSAGE_DATA_FAILURE,
  REFRESH_HAVEREADMESSAGE_DATA,
  REFRESH_HAVEREADMESSAGE_DATA_SUCCESS,
  REFRESH_HAVEREADMESSAGE_DATA_FAILURE,
} from '../constants/actionTypes';
import { getFetch, postFetch } from '../utils/fetchUtils';
import { getMessageUrl, replyToUserUrl } from '../constants/api';
import Toast from 'react-native-root-toast';

function* fetchHavereadMessage(action) {
  try {
    const url = getMessageUrl +'?accesstoken=' + action.payload.accesstoken;
    const data = yield call(getFetch, action.payload.timeout, url);
    yield put({
      type: FETCH_HAVEREADMESSAGE_DATA_SUCCESS,
      payload: {
        isLoading: false,
        isLoaded: true,
        data: data.has_read_messages,
      }
    });
  } catch(error) {
    yield put({
      type: FETCH_HAVEREADMESSAGE_DATA_FAILURE,
      payload: {
        isLoading: false,
        error: error,
      }
    });
  }
}

function* refreshHavereadMessage(action) {
  try {
    const url = getMessageUrl +'?accesstoken=' + action.payload.accesstoken;
    const data = yield call(getFetch, action.payload.timeout, url);
    yield put({
      type: REFRESH_HAVEREADMESSAGE_DATA_SUCCESS,
      payload: {
        isRefreshing: false,
        data: data.has_read_messages,
      }
    });
  } catch(error) {
    Toast.show('刷新失败，请重试...', {position: 80});
    yield put({
      type: REFRESH_HAVEREADMESSAGE_DATA_FAILURE,
      payload: {
        isRefreshing: false,
        error
      }
    });
  }
}

function* havereadMessageReply(action) {
  try {
    const url = replyToUserUrl + action.payload.topic_id + '/replies';
    const res = yield call(postFetch, action.payload.timeout, url, action.payload.params);
    if(res.success === true) {
      Toast.show('回复成功', {position: 80});
    }
  } catch(error) {
    Toast.show('回复失败', {position: 80});
  }
}


export function* watchFetchHavereadMessage() {
  while(true) {
    const action = yield take(FETCH_HAVEREADMESSAGE_DATA);
    yield call(fetchHavereadMessage, action);
  }
}

export function* watchRefreshHavereadMessage() {
  while(true) {
    const action = yield take(REFRESH_HAVEREADMESSAGE_DATA);
    yield call(refreshHavereadMessage, action);
  }
}

export function* watchHavereadMessageReply() {
  while(true) {
    const action = yield take(HAVEREADMESSAGE_REPLY);
    yield call(havereadMessageReply, action);
  }
}
