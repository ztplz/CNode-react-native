/**
 * React Native App
 * https://github.com/ztplz/CNode-react-native
 * email: mysticzt@gmail.com
 */

import {put, take, call, fork, race, takeEvery, takeLatest } from 'redux-saga/effects';
import {
  FETCH_TOPICDETAIL_DATA,
  FETCH_TOPICDETAIL_DATA_SUCCESS,
  FETCH_TOPICDETAIL_DATA_FAILURE,
  REFRESH_TOPICDETAIL_DATA,
  REFRESH_TOPICDETAIL_DATA_SUCCESS,
  REFRESH_TOPICDETAIL_DATA_FAILURE,
  COLLECT_TOPIC,
  NOT_COLLECT_TOPIC
} from '../constants/actionTypes';
import { getTopicDetailUrl, collectTopicUrl, notCollectTopicUrl } from '../constants/api';
import { getFetch, postFetch } from '../utils/fetchUtils';
import Toast from 'react-native-root-toast';

function* fetchTopicDetailData(action) {
  try {
    const accesstoken = action.payload.accesstoken ? '?accesstoken=' + action.payload.accesstoken : null ;
    const url = getTopicDetailUrl + action.payload.topicId + accesstoken;
    const data = yield call(getFetch, action.payload.timeout, url);
    yield put({
      type: FETCH_TOPICDETAIL_DATA_SUCCESS,
      payload: {
        isLoading: false,
        isLoaded: true,
        data,
      }
    });
  } catch(error) {
    yield put({
      type: FETCH_TOPICDETAIL_DATA_FAILURE,
      payload: {
        isLoading: false,
        error: error,
      }
    });
  }
}

function* refreshTopicDetailData(action) {
  try {
    const accesstoken = action.payload.accesstoken ? '?accesstoken=' + action.payload.accesstoken : null ;
    const url = getTopicDetailUrl + action.payload.topicId + accesstoken;
    const data = yield call(getFetch, action.payload.timeout, url);
    yield put({
      type: REFRESH_TOPICDETAIL_DATA_SUCCESS,
      payload: {
        isRefreshing: false,
        data,
      }
    });
  } catch(error) {
    yield put({
      type: FETCH_TOPICDETAIL_DATA_FAILURE,
      payload: {
        isRefreshing: false,
        error: error,
      }
    });
  }
}

function* toCollectTopic(action) {
  try {
    const res = yield call(postFetch, action.payload.timeout, collectTopicUrl, action.payload.params);
    if(res.success === false) {
      Toast.show('收藏失败，请重试...', {position: 80});
    }
  } catch(error) {
    //  (ÒωÓױ)呃！！！！
  }
}

function* toNotCollectTopic(action) {
  try {
    const res = yield call(postFetch, action.payload.timeout, notCollectTopicUrl, action.payload.params);
    if(res.success === false) {
      Toast.show('取消收藏失败，请重试...', {position: 80});
    }
  } catch(error) {
    //  (ÒωÓױ)呃！！！！
  }
}

export function* watchFetchTopicDetailData() {
  while(true) {
    const action = yield take(FETCH_TOPICDETAIL_DATA);
    console.log(action);
    yield call(fetchTopicDetailData, action);
  }
}

export function* watchRefreshTopicDetailData() {
  while(true) {
    const action = yield take(REFRESH_TOPICDETAIL_DATA);
    console.log(action);
    yield call(refreshTopicDetailData, action);
  }
}

export function* watchTopicCollect() {
  while(true) {
    const action = yield take(COLLECT_TOPIC);
    console.log(action);
    yield call(toCollectTopic, action);
  }
}

export function* watchNotTopicCollect() {
  while(true) {
    const action = yield take(NOT_COLLECT_TOPIC);
    console.log(action);
    yield call(toNotCollectTopic, action);
  }
}
