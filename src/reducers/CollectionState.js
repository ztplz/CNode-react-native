/**
 * React Native App
 * https://github.com/ztplz/CNode-react-native
 * email: mysticzt@gmail.com
 */

import { fromJS } from 'immutable';
import {
  FETCH_COLLECTION_DATA,
  FETCH_COLLECTION_DATA_SUCCESS,
  FETCH_COLLECTION_DATA_FAILURE,
  REFRESH_COLLECTION_DATA,
  REFRESH_COLLECTION_DATA_SUCCESS,
  REFRESH_COLLECTION_DATA_FAILURE
} from '../constants/actionTypes';

const initialState = fromJS({
  isLoading: false,
  isLoaded: false,
  isRefreshing: false,
  error: '',
  data: []
});

export default function CollectionState(state=initialState, action) {
  switch (action.type) {
    case FETCH_COLLECTION_DATA:
      return state.set('isLoading', action.payload.isLoading)
                  .set('isLoaded', action.payload.isLoaded)
                  .set('error', action.payload.error);
    case FETCH_COLLECTION_DATA_SUCCESS:
      return state.set('isLoading', action.payload.isLoading)
                  .set('isLoaded', action.payload.isLoaded)
                  .set('data', action.payload.data);
    case FETCH_COLLECTION_DATA_FAILURE:
      return state.set('isLoading', action.payload.isLoading)
                  .set('error', action.payload.error);
    case REFRESH_COLLECTION_DATA:
      return state.set('isRefreshing', action.payload.isRefreshing)
                  .set('error', action.payload.error);
    case REFRESH_COLLECTION_DATA_SUCCESS:
      return state.set('isRefreshing', action.payload.isRefreshing)
                  .set('data', action.payload.data);
    case REFRESH_COLLECTION_DATA_FAILURE:
      return state.set('isRefreshing', action.payload.isRefreshing)
                  .set('error', action.payload.error);
    default:
      return state;
  }
}
