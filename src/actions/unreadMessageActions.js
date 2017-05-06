/**
 * React Native App
 * https://github.com/ztplz/CNode-react-native
 * email: mysticzt@gmail.com
 */

import {
  FETCH_UNREADMESSAGE_DATA,
  REFRESH_UNREADMESSAGE_DATA,
} from '../constants/actionTypes';

export function getUnreadMessageData(payload) {
  return {
    type: FETCH_UNREADMESSAGE_DATA,
    payload,
  }
}

export function refreshUnreadMessageData(payload) {
  return {
    type: REFRESH_UNREADMESSAGE_DATA,
    payload,
  }
}
