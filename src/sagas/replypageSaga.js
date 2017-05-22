/**
 * React Native App
 * https://github.com/ztplz/CNode-react-native
 * email: mysticzt@gmail.com
 */

import {put, take, call, fork, race, takeEvery, takeLatest } from 'redux-saga/effects';
import {
  REPLY_TO_TOPIC,
  REPLY_TO_TOPIC_SUCCESS,
  REPLY_TO_TOPIC_FAILURE
} from '../constants/actionTypes';
import { postFetch } from '../utils/fetchUtils';
import { replyToUserUrl } from '../constants/api';
import Toast from 'react-native-root-toast';

function* userReplyToTopic(action) {
  try {
    const url = replyToUserUrl + action.payload.topic_id + '/replies';
    const res = yield call(postFetch, action.payload.timeout, url, action.payload.params);
    console.log(res);
    if(res.success == true) {
      Toast.show('评论成功', {position: 80});
      yield put({
        type: REPLY_TO_TOPIC_SUCCESS,
        payload: {
          isSending: false,
          isReplySuccess: true,
          // topic_id: action.payload.topic_id,
        }
      });
    }
  } catch(error) {
    Toast.show('评论失败，请重试...', {position: 80});
    yield put({
      type: REPLY_TO_TOPIC_FAILURE,
      payload: {
        isSending: false
      }
    })
  }
}

export function* watchReplyToTopic() {
  while(true) {
    const action = yield take(REPLY_TO_TOPIC);
    console.log(action);
    yield call(userReplyToTopic, action);
  }
}
