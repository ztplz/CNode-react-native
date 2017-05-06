/**
 * React Native App
 * https://github.com/ztplz/CNode-react-native
 * email: mysticzt@gmail.com
 */

import {
  FETCH_HAVEREADMESSAGE_DATA,
  REFRESH_HAVEREADMESSAGE_DATA,
  HAVEREADMESSAGE_REPLY,
  HAVEREAD_MESSAGE_REPLY_TEXTINPUT_SHOW
} from '../constants/actionTypes';

export function getHavereadMessageData(payload) {
  return {
    type: FETCH_HAVEREADMESSAGE_DATA,
    payload,
  }
}

export function refreshHavereadMessageData(payload) {
  return {
    type: REFRESH_HAVEREADMESSAGE_DATA,
    payload,
  }
}

export function replyTextInputShow(payload) {
  console.log(payload);
  console.log(HAVEREAD_MESSAGE_REPLY_TEXTINPUT_SHOW);
  return {
    type: HAVEREAD_MESSAGE_REPLY_TEXTINPUT_SHOW,
    payload
  }
}
