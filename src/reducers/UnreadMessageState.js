/**
 * React Native App
 * https://github.com/ztplz/CNode-react-native
 * email: mysticzt@gmail.com
 */

import { fromJS } from 'immutable';
import {
  FETCH_UNREADMESSAGE_DATA,
  FETCH_UNREADMESSAGE_DATA_SUCCESS,
  FETCH_UNREADMESSAGE_DATA_FAILURE,
  REFRESH_UNREADMESSAGE_DATA,
  REFRESH_UNREADMESSAGE_DATA_SUCCESS,
  REFRESH_UNREADMESSAGE_DATA_FAILURE,
} from '../constants/actionTypes';

const initialState = fromJS({
  isLoading: false,
  isRefreshing: false,
  error: null,
  data: [],
});

export default function UnreadMessageState(state=initialState, action) {
  switch (action.type) {
    case FETCH_UNREADMESSAGE_DATA:
      return state.set('isLoading', action.payload.isLoading);
    case FETCH_UNREADMESSAGE_DATA_SUCCESS:
      return state.merge(state, {
        isLoading: action.payload.isLoading,
        data: action.payload.data,
      });
    case FETCH_UNREADMESSAGE_DATA_FAILURE:
      return state.merge(state, {
        isLoading: action.payload.isLoading,
        error: action.payload.error,
      });
    case REFRESH_UNREADMESSAGE_DATA:
      return state.set('isRefreshing', action.payload.isRefreshing);
    case REFRESH_UNREADMESSAGE_DATA_SUCCESS:
      return state.merge(state, {
        isRefreshing: action.payload.isRefreshing,
        data: action.payload.data,
      });
    case REFRESH_UNREADMESSAGE_DATA_FAILURE:
      return state.merge(state, {
        isRefreshing: action.payload.isRefreshing,
        error: action.payload.error
      })
    default:
      return state;
  }
}
