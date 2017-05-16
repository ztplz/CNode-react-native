/**
 * React Native App
 * https://github.com/ztplz/CNode-react-native
 * email: mysticzt@gmail.com
 */

import {
  LOGIN_TO_CNODE,
  RETRY_TO_LOGIN
} from '../constants/actionTypes';

export function loginToCNode(payload) {
  return {
    type: LOGIN_TO_CNODE,
    payload
  }
}

export function retryToLogin(payload) {
  return {
    type: RETRY_TO_LOGIN,
    payload
  }
}
