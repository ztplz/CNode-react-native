/**
 * React Native App
 * https://github.com/ztplz/CNode-react-native
 * email: mysticzt@gmail.com
 */

import { fromJS } from 'immutable';
import {
  FETCH_HOMEPAGE_DATA,
  FETCH_HOMEPAGE_DATA_SUCCESS,
  FETCH_HOMEPAGE_DATA_FAILURE,
  REFRESH_HOMEPAGE_DATA,
  REFRESH_HOMEPAGE_DATA_SUCCESS,
  REFRESH_HOMEPAGE_DATA_FAILURE,
  FETCH_MORE_HOMEPAGE_DATA,
  FETCH_MORE_HOMEPAGE_DATA_SUCCESS,
  FETCH_MORE_HOMEPAGE_DATA_FAILURE,
  LOADED_ALL_DATA,
} from '../constants/actionTypes';

const initialState = fromJS({
  all: {
    isLoading: false,
    isLoaded: false,
    isRefreshing: false,
    isLoadingMore: false,
    isLoadedAll: false,
    pageIndex: 1,
    error: '',
    data: []
  },
  good: {
    isLoading: false,
    isLoaded: false,
    isRefreshing: false,
    isLoadingMore: false,
    isLoadedAll: false,
    pageIndex: 1,
    error: '',
    data: []
  },
  share: {
    isLoading: false,
    isLoaded: false,
    isRefreshing: false,
    isLoadingMore: false,
    isLoadedAll: false,
    error: '',
    data: []
  },
  ask: {
    isLoading: false,
    isLoaded: false,
    isRefreshing: false,
    isLoadingMore: false,
    isLoadedAll: false,
    pageIndex: 1,
    error: '',
    data: []
  },
  job: {
    isLoading: false,
    isLoaded: false,
    isRefreshing: false,
    isLoadingMore: false,
    isLoadedAll: false,
    pageIndex: 1,
    error: '',
    data: []
  },
});

export default function HomePageState(state=initialState, action) {
  switch (action.type) {
    case FETCH_HOMEPAGE_DATA:
      return state.setIn([action.payload.tabName, 'isLoading'], action.payload.isLoading)
                  .setIn([action.payload.tabName, 'isLoaded'], action.payload.isLoaded)
                  .setIn([action.payload.tabName, 'error'], action.payload.error)
                  .setIn([action.payload.tabName, 'isLoadedAll'], action.payload.isLoadedAll);
    case FETCH_HOMEPAGE_DATA_SUCCESS:
      return state.setIn([action.payload.tabName, 'isLoading'], action.payload.isLoading)
                  .setIn([action.payload.tabName, 'isLoaded'], action.payload.isLoaded)
                  .setIn([action.payload.tabName, 'pageIndex'], action.payload.pageIndex)
                  .setIn([action.payload.tabName, 'data'], action.payload.data);
    case FETCH_HOMEPAGE_DATA_FAILURE:
      console.log('1111110');
      return state.setIn([action.payload.tabName, 'isLoading'], action.payload.isLoading)
                  .setIn([action.payload.tabName, 'error'], action.payload.error);
    case REFRESH_HOMEPAGE_DATA:
      return state.setIn([action.payload.tabName, 'isRefreshing'], action.payload.isRefreshing)
                  .setIn([action.payload.tabName, 'isLoadedAll'], action.payload.isLoadedAll)
                  .setIn([action.payload.tabName, 'pageIndex'], action.payload.pageIndex);
    case REFRESH_HOMEPAGE_DATA_SUCCESS:
      return state.setIn([action.payload.tabName, 'isRefreshing'], action.payload.isRefreshing)
                  .setIn([action.payload.tabName, 'pageIndex'], action.payload.pageIndex)
                  .setIn([action.payload.tabName, 'data'], action.payload.data);
    case REFRESH_HOMEPAGE_DATA_FAILURE:
      return state.setIn([action.payload.tabName, 'isRefreshing'], action.payload.isRefreshing)
                  .setIn([action.payload.tabName, 'error'], action.payload.error);
    case FETCH_MORE_HOMEPAGE_DATA:
      return state.setIn([action.payload.tabName, 'isLoadingMore'], action.payload.isLoadingMore)
                  .setIn([action.payload.tabName, 'isLoadedAll'], action.payload.isLoadedAll);
    case FETCH_MORE_HOMEPAGE_DATA_SUCCESS:
      return state.setIn([action.payload.tabName, 'isLoadingMore'], action.payload.isLoadingMore)
                  .setIn([action.payload.tabName, 'pageIndex'], action.payload.pageIndex)
                  .updateIn([action.payload.tabName, 'data'], data => data.concat(action.payload.data));
    case FETCH_MORE_HOMEPAGE_DATA_FAILURE:
      return state.setIn([action.payload.tabName, 'isLoadingMore'], action.payload.isLoadingMore)
                  .setIn([action.payload.tabName, 'error'], action.payload.error);
    case LOADED_ALL_DATA:
      return state.setIn([action.payload.tabName, 'isLoadingMore'], action.payload.isLoadingMore)
                  .setIn([action.payload.tabName, 'isLoadedAll'], action.payload.isLoadedAll);
    default:
      return state;
  }
}
