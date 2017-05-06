/**
 * React Native App
 * https://github.com/ztplz/CNode-react-native
 * email: mysticzt@gmail.com
 */

import { fromJS } from 'immutable';
import {
  // FETCH_RECENT_TOPICS,
  // FETCH_RECENT_TOPICS_SUCCESS,
  // FETCH_RECENT_TOPICS_FAILURE,
  REFRESH_RECENT_DETAIL,
  REFRESH_RECENT_DETAIL_SUCCESS,
  REFRESH_RECENT_DETAIL_FAILURE
} from '../constants/actionTypes';

const initialState = fromJS({
  // isLoading: false,
  // isLoaded: false,
  isRefreshing: false,
  error: '',
  // data: {}
});

export default function UserRecentState(state=initialState, action) {
  switch (action.type) {
    // case FETCH_RECENT_TOPICS:
    //   return state.set('isLoading', action.payload.isLoading)
    //               .set('isLoaded', action.payload.isLoaded);
    // case FETCH_RECENT_TOPICS_SUCCESS:
    //   return state.set('isLoading', action.payload.isLoading)
    //               .set('isLoaded', action.payload.isLoaded)
    //               .set('data', action.payload.data);
    // case FETCH_RECENT_TOPICS_FAILURE:
    //   return state.set('isLoading', action.payload.isLoading)
    //               .set('error', action.payload.error);
    case REFRESH_RECENT_DETAIL:
      return state.set('isRefreshing', action.payload.isRefreshing);
    case REFRESH_RECENT_DETAIL_SUCCESS:
      return state.set('isRefreshing', action.payload.isRefreshing)
                  // .set('data', action.payload.data)；
    case REFRESH_RECENT_DETAIL_FAILURE:
      return state.set('isRefreshing', action.payload.isRefreshing)
                  .set('error', action.payload.error);
    default:
      return state;
  }
}
