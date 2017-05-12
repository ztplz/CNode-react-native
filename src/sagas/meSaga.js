/**
 * React Native App
 * https://github.com/ztplz/CNode-react-native
 * email: mysticzt@gmail.com
 */

import {put, take, call, fork, race, takeEvery, takeLatest } from 'redux-saga/effects';
import {
  FETCH_ME_DATA,
  FETCH_ME_DATA_SUCCESS,
  FETCH_ME_DATA_FAILURE
} from '../constants/actionTypes';
import { getUserDetailUrl } from '../constants/api';
import { getFetch } from '../utils/fetchUtils';
import Toast from 'react-native-root-toast';
import GlobalConfigStorage from '../localStorage/GlobalConfigStorage';

function* fetchMeData(action) {
  try {
    console.log(action);
    const url = getUserDetailUrl + action.payload.loginname;
    console.log(url);
    const data = yield call(getFetch, action.payload.timeout, url);
    yield put({
      type: FETCH_ME_DATA_SUCCESS,
      payload: {
        isLoading: false,
        user_create_at: data.create_at,
        data
      }
    });
    new GlobalConfigStorage().saveUserCreateAt(data.create_at);
  } catch(error) {
    console.log(error);
    yield put({
      type: FETCH_ME_DATA_FAILURE,
      payload: {
        isLoading: false,
        error
      }
    });
  }
}

export function* watchFetchMeData() {
  while(true) {
    const action = yield take(FETCH_ME_DATA);
    console.log(action);
    yield call(fetchMeData, action)
  }
}
