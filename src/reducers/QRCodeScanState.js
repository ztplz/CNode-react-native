/**
 * React Native App
 * https://github.com/ztplz/CNode-react-native
 * email: mysticzt@gmail.com
 */

import { fromJS } from 'immutable';
import {
  LOGIN_TO_CNODE,
  LOGIN_TO_CNODE_SUCCESS,
  LOGIN_TO_CNODE_FAILURE,
  RETRY_TO_LOGIN
} from '../constants/actionTypes';

const initialState = fromJS({
  isReadingScan: true,
  isLogging: false,
  isLoginSuccess: false
});

export default function QRCodeScanState(state=initialState, action) {
  switch (action.type) {
    case LOGIN_TO_CNODE:
      return state.set('isReadingScan', action.payload.isReadingScan)
                  .set('isLogging', action.payload.isLogging);
    case LOGIN_TO_CNODE_SUCCESS:
      return state.set('isLogging', action.payload.isLogging)
                  .set('isLoginSuccess', action.payload.isLoginSuccess);
    case LOGIN_TO_CNODE_FAILURE:
      return state.set('isLogging', action.payload.isLogging);
    case RETRY_TO_LOGIN:
      return state.set('isReadingScan', action.payload.isReadingScan)
                  .set('isLogging', action.payload.isLogging)
                  .set('isLoginSuccess', action.payload.isLoginSuccess);
    default:
      return state;
  }
}
