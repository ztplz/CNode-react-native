/**
 * React Native App
 * https://github.com/ztplz/CNode-react-native
 * email: mysticzt@gmail.com
 */

import {
  FETCH_USERDETAIL_DATA,
  REFRESH_USERDETAIL_DATA
} from '../constants/actionTypes';

export function getUserDetailData(payload) {
  console.log(FETCH_USERDETAIL_DATA);
  return {
    type: FETCH_USERDETAIL_DATA,
    payload
  }
}

export function refreshUserDetail(payload) {
  return {
    type: REFRESH_USERDETAIL_DATA,
    payload
  }
}
