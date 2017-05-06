/**
 * React Native App
 * https://github.com/ztplz/CNode-react-native
 * email: mysticzt@gmail.com
 */

import { put, take, call, fork, race, takeEvery, takeLatest } from 'redux-saga/effects';
import {
  FETCH_USERDETAIL_DATA,
  FETCH_USERDETAIL_DATA_SUCCESS,
  FETCH_USERDETAIL_DATA_FAILURE
} from '../constants/actionTypes';
import {
  getUserDetailUrl
} from '../constants/api';
import { getFetch } from '../utils/fetchUtils';

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

export function* watchFetchUserDetailData() {
  while(true) {
    const action = yield take(FETCH_USERDETAIL_DATA);
    yield call(fetchUserDetailData, action);
  }
}
