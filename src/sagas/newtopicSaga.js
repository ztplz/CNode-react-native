/**
 * React Native App
 * https://github.com/ztplz/CNode-react-native
 * email: mysticzt@gmail.com
 */

import { put, take, call } from 'redux-saga/effects';
import {
  POST_TO_CNODE,
  POST_TO_CNODE_SUCCESS,
  POST_TO_CNODE_FAILURE
} from '../constants/actionTypes';
import { postToCNodeUrl } from '../constants/api';
import { postFetch } from '../utils/fetchUtils';
import Toast from 'react-native-root-toast';

function* postToCNode(action) {
  try {
    const res = yield call(postFetch, action.payload.timeout, postToCNodeUrl, action.payload.params);
    if(res.success == true) {
      Toast.show('你的帖子已经发布成功', {position: 80});
      yield put({
        type: POST_TO_CNODE_SUCCESS,
        payload: {
          isPosting: false,
          isPosted: true,
          topic_id: res.topic_id
        }
      });
    }
  } catch(error) {
    Toast.show('发帖失败，请重试...', {position: 80});
    yield put({
      type: POST_TO_CNODE_FAILURE,
      payload: {
        isPosting: false,
      }
    })
  }
}

export function* watchPostToCNode() {
  while(true) {
    const action = yield take(POST_TO_CNODE);
    yield call(postToCNode, action)
  }
}
