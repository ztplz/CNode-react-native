/**
 * React Native App
 * https://github.com/ztplz/CNode-react-native
 * email: mysticzt@gmail.com
 */

import { fromJS } from 'immutable';
import {
  FETCH_ME_DATA,
  FETCH_ME_DATA_SUCCESS,
  FETCH_ME_DATA_FAILURE,
  REFRESH_ME_DATA,
  REFRESH_ME_DATA_SUCCESS,
  REFRESH_ME_DATA_FAILURE
} from '../constants/actionTypes';

const initialState = fromJS({
  isLoading: false,
  isLoaded: false,
  isRefreshing: false,
  data: {},
  error: ''
});

export default function MeState(state=initialState, action) {
  switch (action.type) {
    case FETCH_ME_DATA:
      return state.set('isLoading', action.payload.isLoading)
                  .set('error', action.payload.error)
                  .set('isLoaded', action.payload.isLoaded);
    case FETCH_ME_DATA_SUCCESS:
      return state.set('isLoading', action.payload.isLoading)
                  .set('isLoaded', action.payload.isLoaded)
                  .set('data', action.payload.data);
    case FETCH_ME_DATA_FAILURE:
      return state.set('isLoading', action.payload.isLoading)
                  .set('error', action.payload.error);
    case REFRESH_ME_DATA:
      return state.set('isRefreshing', action.payload.isRefreshing);
    case REFRESH_ME_DATA_SUCCESS:
      return state.set('isRefreshing', action.payload.isRefreshing)
                  .set('data', action.payload.data);
    case REFRESH_ME_DATA_FAILURE:
      return state.set('isRefreshing', action.payload.isRefreshing);
    default:
      return state;
  }
}
