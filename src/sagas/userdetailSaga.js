/**
 * React Native App
 * https://github.com/ztplz/CNode-react-native
 * email: mysticzt@gmail.com
 */

import { put, take, call } from 'redux-saga/effects';
import {
  FETCH_USERDETAIL_DATA,
  FETCH_USERDETAIL_DATA_SUCCESS,
  FETCH_USERDETAIL_DATA_FAILURE,
  REFRESH_USERDETAIL_DATA,
  REFRESH_USERDETAIL_DATA_SUCCESS,
  REFRESH_USERDETAIL_DATA_FAILURE
} from '../constants/actionTypes';
import {
  getUserDetailUrl
} from '../constants/api';
import { getFetch } from '../utils/fetchUtils';
import Toast from 'react-native-root-toast';

function* fetchUserDetailData(action) {
  try {
    const url = getUserDetailUrl + action.payload.username;
    const data = yield call(getFetch, action.payload.timeout, url);
    yield put({
      type: FETCH_USERDETAIL_DATA_SUCCESS,
      payload: {
        isLoading: false,
        isLoaded: true,
        data: data
      }
    });
  } catch(error) {
    yield put({
      type: FETCH_USERDETAIL_DATA_FAILURE,
      payload: {
        isLoading: false,
        error: error
      }
    });
  }
}

function* refreshUserDetailData(action) {
  try {
    const url = getUserDetailUrl + action.payload.authorname;
    const data = yield call(getFetch, action.payload.timeout, url);
    yield put({
      type: REFRESH_USERDETAIL_DATA_SUCCESS,
      payload: {
        isRefreshing: false,
        data: data
      }
    });
  } catch(error) {
    Toast.show('刷新失败，请重试...', {position: 80});
    yield put({
      type: REFRESH_USERDETAIL_DATA_FAILURE,
      payload: {
        isRefreshing: false
      }
    });
  }
}

export function* watchFetchUserDetailData() {
  while(true) {
    const action = yield take(FETCH_USERDETAIL_DATA);
    yield call(fetchUserDetailData, action);
  }
}

export function* watchRefreshUserDetailData() {
  while(true) {
    const action = yield take(REFRESH_USERDETAIL_DATA);
    yield call(refreshUserDetailData, action);
  }
}
