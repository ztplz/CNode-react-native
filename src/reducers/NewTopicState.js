/**
 * React Native App
 * https://github.com/ztplz/CNode-react-native
 * email: mysticzt@gmail.com
 */

import { fromJS } from 'immutable';
import {
  POST_TO_CNODE,
  POST_TO_CNODE_SUCCESS,
  POST_TO_CNODE_FAILURE
} from '../constants/actionTypes';

const initialState = fromJS({
  isPosting: false,
  topic_id: '',
});

export default function NewTopicState(state=initialState, action) {
  switch (action.type) {
    case POST_TO_CNODE:
      return state.set('isPosting', action.payload.isPosting);
    case POST_TO_CNODE_SUCCESS:
      return state.set('isPosting', action.payload.isPosting)
                  .set('topic_id', action.payload.topic_id);
    case POST_TO_CNODE_FAILURE:
      return state.set('isPosting', action.payload.isPosting);
    default:
      return state;
  }
}
