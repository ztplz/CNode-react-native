/**
 * React Native App
 * https://github.com/ztplz/CNode-react-native
 * email: mysticzt@gmail.com
 */

import { fromJS } from 'immutable';
import {
  REFRESH_RECENT_DETAIL,
  REFRESH_RECENT_DETAIL_SUCCESS,
  REFRESH_RECENT_DETAIL_FAILURE
} from '../constants/actionTypes';

const initialState = fromJS({
  isRefreshing: false,
  error: '',
});

export default function UserRecentState(state=initialState, action) {
  switch (action.type) {
    case REFRESH_RECENT_DETAIL:
      return state.set('isRefreshing', action.payload.isRefreshing);
    case REFRESH_RECENT_DETAIL_SUCCESS:
      return state.set('isRefreshing', action.payload.isRefreshing)
    case REFRESH_RECENT_DETAIL_FAILURE:
      return state.set('isRefreshing', action.payload.isRefreshing)
                  .set('error', action.payload.error);
    default:
      return state;
  }
}
