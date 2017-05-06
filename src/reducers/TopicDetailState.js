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
  // COLLECT_TOPIC,
  // NOT_COLLECT_TOPIC
} from '../constants/actionTypes';

const initialState = fromJS({
  isLoading: true,
  isRefreshing: false,
  isloaded: false,
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
    default:
      return state;
  }
}
