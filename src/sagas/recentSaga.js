/**
 * React Native App
 * https://github.com/ztplz/CNode-react-native
 * email: mysticzt@gmail.com
 */

import {put, take, call, fork, race, takeEvery, takeLatest } from 'redux-saga/effects';
import {
  // FETCH_RECENT_TOPICS,
  // FETCH_RECENT_TOPICS_SUCCESS,
  // FETCH_RECENT_TOPICS_FAILURE,
  REFRESH_RECENT_DETAIL,
  REFRESH_RECENT_DETAIL_SUCCESS,
  REFRESH_RECENT_DETAIL_FAILURE
} from '../constants/actionTypes';
import { getUserDetailUrl } from '../constants/api';
import { getFetch } from '../utils/fetchUtils';
import Toast from 'react-native-root-toast';

function* refreshRecentData(action) {
  try {
    const url = getUserDetailUrl + action.payload.authorname;
    const data = yield call(getFetch, action.payload.timeout, url);
    yield put({
      type: REFRESH_RECENT_DETAIL_SUCCESS,
      payload: {
        isRefreshing: false,
        data
      }
    });
  } catch(error) {
    Toast.show('刷新失败，请重试...', {position: 80});
    yield put({
      type: REFRESH_RECENT_DETAIL_FAILURE,
      payload: {
        isRefreshing: false,
      }
    });
  }
}

export function* watchRefreshRecent() {
  while(true) {
    const action = yield take(REFRESH_RECENT_DETAIL);
    console.log(action);
    yield call(refreshRecentData, action);
  }
}
