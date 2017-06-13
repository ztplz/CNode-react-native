/**
 * React Native App
 * https://github.com/ztplz/CNode-react-native
 * email: mysticzt@gmail.com
 */

import { put, take, call, takeEvery } from 'redux-saga/effects';
import {
  TIME_OUT,
  FETCH_HOMEPAGE_DATA,
  FETCH_HOMEPAGE_DATA_SUCCESS,
  FETCH_HOMEPAGE_DATA_FAILURE,
  REFRESH_HOMEPAGE_DATA,
  REFRESH_HOMEPAGE_DATA_SUCCESS,
  REFRESH_HOMEPAGE_DATA_FAILURE,
  FETCH_MORE_HOMEPAGE_DATA,
  FETCH_MORE_HOMEPAGE_DATA_SUCCESS,
  FETCH_MORE_HOMEPAGE_DATA_FAILURE,
  LOADED_ALL_DATA,
} from '../constants/actionTypes';
import { getTopicsUrl } from '../constants/api';
import { getFetch } from '../utils/fetchUtils';
import Toast from 'react-native-root-toast';

function* fetchHomePageData(action) {
  try {
    const url = getTopicsUrl + '?tab=' + action.payload.tabName + '&page=' + action.payload.pageIndex;
    const data = yield call(getFetch, action.payload.timeout, url);

    yield put({
      type: FETCH_HOMEPAGE_DATA_SUCCESS,
      payload: {
        isLoading: false,
        isLoaded: true,
        tabName: action.payload.tabName,
        pageIndex: action.payload.pageIndex,
        data,
      }
    });
  } catch (error) {
    yield put({
      type: FETCH_HOMEPAGE_DATA_FAILURE,
      payload: {
        tabName: action.payload.tabName,
        isLoading: false,
        error: error.message,
      }
    });
  }
}

function* refreshHomePageData(action) {
  try {
    const url = getTopicsUrl + '?tab=' + action.payload.tabName + '&page=' + action.payload.pageIndex;
    const data = yield call(getFetch, action.payload.timeout, url);
    yield put({
      type: REFRESH_HOMEPAGE_DATA_SUCCESS,
      payload: {
        isRefreshing: false,
        tabName: action.payload.tabName,
        pageIndex: action.payload.pageIndex,
        data,
      }
    });
  } catch(error) {
    yield put({
      type: REFRESH_HOMEPAGE_DATA_FAILURE,
      payload: {
        tabName: action.payload.tabName,
        isRefreshing: false,
        error: error.message,
      }
    });
    yield call(Toast.show, '刷新失败，请重试或者检查网络',  {position: 80});
  }
}

function* fetchMoreHomePageData(action) {
  try {
    const url = getTopicsUrl + '?tab=' + action.payload.tabName + '&page=' + action.payload.pageIndex;
    const data = yield call(getFetch, action.payload.timeout, url);
    console.log(data);
    if(data.length !== 0) {
      yield put({
        type: FETCH_MORE_HOMEPAGE_DATA_SUCCESS,
        payload: {
          isLoadingMore: false,
          tabName: action.payload.tabName,
          pageIndex: action.payload.pageIndex,
          data: data,
        }
      });
    } else {
      yield put({
        type: LOADED_ALL_DATA,
        payload: {
          tabName: action.payload.tabName,
          isLoadingMore: false,
          isLoadedAll: true,
        }
      });
    }
  } catch(error) {
    yield put({
      type: FETCH_MORE_HOMEPAGE_DATA_FAILURE,
      payload: {
        tabName: action.payload.tabName,
        isLoadingMore: false,
        error: 'FETCH_MORE_HOMEPAGE_DATA_FAILURE'
      }
    });
  }
}



export function* watchFetchHomePageData() {
  yield takeEvery(FETCH_HOMEPAGE_DATA, fetchHomePageData);
}

export function* watchRefreshHomePageData() {
  while(true) {
    const action = yield take(REFRESH_HOMEPAGE_DATA);
    console.log(action);
    yield call(refreshHomePageData, action)
  }
}

export function* watchFetchMoreHomePageData() {
  while(true) {
    const action = yield take(FETCH_MORE_HOMEPAGE_DATA);
    console.log(action);
    yield call(fetchMoreHomePageData, action)
  }
}
