/**
 * React Native App
 * https://github.com/ztplz/CNode-react-native
 * email: mysticzt@gmail.com
 */

import { fromJS } from 'immutable';
import {
  REPLY_TO_TOPIC,
  REPLY_TO_TOPIC_SUCCESS,
  REPLY_TO_TOPIC_FAILURE,
  FETCH_TOPICDETAIL_DATA
} from '../constants/actionTypes';

const initialState = fromJS({
  isSending: false,
  isReplySuccess: false,
  // topic_id: ''
});

export default function ReplyPageState(state=initialState, action) {
  switch (action.type) {
    case REPLY_TO_TOPIC:
      return state.set('isSending', action.payload.isSending);
    case REPLY_TO_TOPIC_SUCCESS:
      return state.set('isSending', action.payload.isSending)
                  .set('isReplySuccess', action.payload.isReplySuccess);
    case REPLY_TO_TOPIC_FAILURE:
      return state.set('isSending', action.payload.isSending);
    case FETCH_TOPICDETAIL_DATA:
      return state.set('isReplySuccess', action.payload.isReplySuccess);
    default:
      return state;
  }
}
