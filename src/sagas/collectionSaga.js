/**
 * React Native App
 * https://github.com/ztplz/CNode-react-native
 * email: mysticzt@gmail.com
 */

import { put, take, call, fork, race, takeEvery, takeLatest } from 'redux-saga/effects';
import {
  FETCH_COLLECTION_DATA,
  FETCH_COLLECTION_DATA_SUCCESS,
  FETCH_COLLECTION_DATA_FAILURE,
  REFRESH_COLLECTION_DATA,
  REFRESH_COLLECTION_DATA_SUCCESS,
  REFRESH_COLLECTION_DATA_FAILURE
} from '../constants/actionTypes';
import { getFetch } from '../utils/fetchUtils';
import { getUserCollectUrl } from '../constants/api';
import Toast from 'react-native-root-toast';

function* fetchCollectionData(action) {
  try {
    const url = getUserCollectUrl + action.payload.username;
    const data = yield call(getFetch, action.payload.timeout, url);
    yield put({
      type: FETCH_COLLECTION_DATA_SUCCESS,
      payload: {
        isLoading: false,
        isLoaded: true,
        data
      }
    });
  } catch(error) {
    yield put({
      type: FETCH_COLLECTION_DATA_FAILURE,
      payload: {
        isLoading: false,
        error
      }
    });
  }
}

function* refreshCollectionData(action) {
  try {
    const url = getUserCollectUrl + action.payload.username;
    const data = yield call(getFetch, action.payload.timeout, url);
    yield put({
      type: REFRESH_COLLECTION_DATA_SUCCESS,
      payload: {
        isRefreshing: false,
        data
      }
    });
  } catch(error) {
    Toast.show('刷新失败，请重试...', {position: 80});
    yield put({
      type: REFRESH_COLLECTION_DATA_FAILURE,
      payload: {
        isRefreshing: false,
        error
      }
    });
  }
}


export function* watchFetchCollectionData() {
  while(true) {
    const action = yield take(FETCH_COLLECTION_DATA);
    console.log(action);
    yield call(fetchCollectionData, action);
  }
}

export function* watchRefreshCollectionData() {
  while(true) {
    const action = yield take(REFRESH_COLLECTION_DATA);
    yield call(refreshCollectionData, action);
  }
}
