/**
 * React Native App
 * https://github.com/ztplz/CNode-react-native
 * email: mysticzt@gmail.com
 */

import {
  FETCH_ME_DATA,
  REFRESH_ME_DATA
} from '../constants/actionTypes';

export function getMeData(payload) {
  return {
    type: FETCH_ME_DATA,
    payload
  }
}

export function refreshMeData(payload) {
  return {
    type: REFRESH_ME_DATA,
    payload
  }
}
