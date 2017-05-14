/**
 * React Native App
 * https://github.com/ztplz/CNode-react-native
 * email: mysticzt@gmail.com
 */

import { fromJS } from 'immutable';
import {
  FETCH_TOPICDETAIL_DATA,
  FETCH_TOPICDETAIL_DATA_SUCCESS,
  FETCH_TOPICDETAIL_DATA_FAILURE,
  REFRESH_TOPICDETAIL_DATA,
  REFRESH_TOPICDETAIL_DATA_SUCCESS,
  REFRESH_TOPICDETAIL_DATA_FAILURE,
  REPLY_TO_TOPIC,
  SENT_REPLY_MESSAGE,
  COLLECT_TOPIC,
  COLLECT_TOPIC_SUCCESS,
  COLLECT_TOPIC_FAILURE,
  NOT_COLLECT_TOPIC,
  NOT_COLLECT_TOPIC_SUCCESS,
  NOT_COLLECT_TOPIC_FAILURE,
  UPED_ITEM,
} from '../constants/actionTypes';

const initialState = fromJS({
  isLoading: true,
  isRefreshing: false,
  isloaded: false,
  isCollected: false,
  isReplyTextInputShow: false,
  error: '',
  data: {}
});

export default function TopicDetailState(state=initialState, action) {
  switch (action.type) {
    case FETCH_TOPICDETAIL_DATA:
      return state.set('isLoading', action.payload.isLoading)
                  .set('isLoaded', action.payload.isLoaded)
                  .set('error', action.payload.error);
    case FETCH_TOPICDETAIL_DATA_SUCCESS:
      return state.set('isLoading', action.payload.isLoading)
                  .set('isLoaded', action.payload.isLoaded)
                  .set('isCollected', action.payload.isCollected)
                  .set('data', action.payload.data);
    case FETCH_TOPICDETAIL_DATA_FAILURE:
      return state.set('isLoading', action.payload.isLoading)
                  .set('error', action.payload.error);
    case REFRESH_TOPICDETAIL_DATA:
      return state.set('isRefreshing', action.payload.isRefreshing)
                  .set('error', action.payload.error);
    case REFRESH_TOPICDETAIL_DATA_SUCCESS:
      return state.set('isRefreshing', action.payload.isRefreshing)
                  .set('data', action.payload.data);
    case REFRESH_TOPICDETAIL_DATA_FAILURE:
      return state.set('isRefreshing', action.payload.isRefreshing)
                  .set('error', action.payload.error);
    case COLLECT_TOPIC:
      return state.set('isCollected', action.payload.isCollected);
    case COLLECT_TOPIC_SUCCESS:
      return state.set('isCollected', action.payload.isCollected);
    case COLLECT_TOPIC_FAILURE:
      return state.set('error', action.payload.error);
    case NOT_COLLECT_TOPIC:
      return state.set('isCollected', action.payload.isCollected);
    case NOT_COLLECT_TOPIC_SUCCESS:
      return state.set('isCollected', action.payload.isCollected);
    case NOT_COLLECT_TOPIC_FAILURE:
      return state.set('error', action.payload.error);
    case REPLY_TO_TOPIC:
      return state.set('isReplyTextInputShow', action.payload.isReplyTextInputShow);
    case SENT_REPLY_MESSAGE:
      return state.set('isReplyTextInputShow', action.payload.isReplyTextInputShow);
    case UPED_ITEM:
      console.log(action);
      // console.log(state.get(['data', 'replies']));
      // console.log(state.get('data').replies[action.payload.index].is_uped);
      // return state.updateIn(['data', 'replies'], replies => replies.setIn([action.payload.index, 'is_uped'], action.payload.isUped) );
      // return state.updateIn(['data', 'replies'], list => list.updateIn([action.payload.index + 1, 'is_uped'], is_uped => action.payload.isUped))
      // return state.set('data', {...state.get('data'), {...state.get('data').replies,  }.replies[action.payload.index].is_uped)
      // return state.update('data', {
      //   ...state.get('data'), [
      //     ...state.get('data').replies, {
      //       ...state.get('data').replies[action.payload.index],  is_uped: action.payload.isUped
      //     }
      //   ]
      // })
      // return state.merge(state.get('data').replies[action.payload.index].is_uped);
      state.set('data', {a: 1});
      console.log(state.get('data'))
    default:
      return state;
  }
}
