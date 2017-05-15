/**
 * React Native App
 * https://github.com/ztplz/CNode-react-native
 * email: mysticzt@gmail.com
 */

import { fromJS } from 'immutable';
import {
  FETCH_USERDETAIL_DATA,
  FETCH_USERDETAIL_DATA_SUCCESS,
  FETCH_USERDETAIL_DATA_FAILURE,
  REFRESH_RECENT_DETAIL_SUCCESS,
} from '../constants/actionTypes';

const initialState = fromJS({
  isLoading: false,
  isLoaded: false,
  isRefreshing: false,
  isReply: false,
  error: '',
  data: [],
});

export default function UserDetailState(state=initialState, action) {
  switch (action.type) {
    case FETCH_USERDETAIL_DATA:
      // return state.merge({
      //   isLoading: action.payload.isLoading,
      //   isLoaded: action.payload.isLoaded
      // });
      
    case FETCH_USERDETAIL_DATA_SUCCESS:
      return state.merge({
        isLoading: action.payload.isLoading,
        isLoaded: action.payload.isLoaded,
        data: action.payload.data
      });
    case FETCH_USERDETAIL_DATA_FAILURE:
      return state.merge({
        isLoading: action.payload.isLoading,
        error: action.payload.error
      });
    case REFRESH_RECENT_DETAIL_SUCCESS:
      return state.set('data', action.payload.data);
    default:
      return state;
  }
}
