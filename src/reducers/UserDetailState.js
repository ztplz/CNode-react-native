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
  REFRESH_USERDETAIL_DATA,
  REFRESH_USERDETAIL_DATA_SUCCESS,
  REFRESH_USERDETAIL_DATA_FAILURE
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
      return state.set('isLoading', action.payload.isLoading)
                  .set('error', action.payload.error)
                  .set('isLoaded', action.payload.isLoaded);
    case FETCH_USERDETAIL_DATA_SUCCESS:
      return state.set('isLoading', action.payload.isLoading)
                  .set('isLoaded', action.payload.isLoaded)
                  .set('data', action.payload.data);
    case FETCH_USERDETAIL_DATA_FAILURE:
      return state.set('isLoading', action.payload.isLoading)
                  .set('error', action.payload.error);
    case REFRESH_USERDETAIL_DATA:
      return state.set('isRefreshing', action.payload.isRefreshing);
    case REFRESH_USERDETAIL_DATA_SUCCESS:
      return state.set('isRefreshing', action.payload.isRefreshing)
                  .set('data', action.payload.data);
    case REFRESH_USERDETAIL_DATA_FAILURE:
      return state.set('isRefreshing', action.payload.isRefreshing);
    default:
      return state;
  }
}
