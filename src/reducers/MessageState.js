/**
 * React Native App
 * https://github.com/ztplz/CNode-react-native
 * email: mysticzt@gmail.com
 */

import { fromJS } from 'immutable';
import {
  FETCH_MESSAGE,
  FETCH_MESSAGE_SUCCESS,
  FETCH_MESSAGE_FAILURE,
} from '../constants/actionTypes';

const initialState = fromJS({
  isLoading: false,
  isLoaded: false,
  error: null,
  data: {}
});

export default function MessageState(state=initialState, action) {
  console.log(action.payload);
  switch (action.type) {
    case FETCH_MESSAGE:
      return state.set('isLoading', action.payload.isLoading)
                  .set('isloaded', action.payload.isloaded)
                  .set('error', action.payload.error);
    case FETCH_MESSAGE_SUCCESS:
      console.log('fetch message success');
      console.log(action.payload.isLoaded);
      return state.set('isLoading', action.payload.isLoading)
                  .set('isLoaded', action.payload.isLoaded)
                  .set('data', action.payload.data);
    case FETCH_MESSAGE_FAILURE:
      return state.set('isLoading', action.payload.isLoading)
                  .set('error', action.payload.error);
    default:
      return state;
  }
}
