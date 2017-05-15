/**
 * React Native App
 * https://github.com/ztplz/CNode-react-native
 * email: mysticzt@gmail.com
 */

import {
  FETCH_HAVEREADMESSAGE_DATA,
  REFRESH_HAVEREADMESSAGE_DATA,
  HAVEREADMESSAGE_REPLY,
  HAVEREAD_MESSAGE_REPLY_TEXTINPUT_SHOW,
  HAVEREAD_MESSAGE_REPLY_TEXT_CHANGE
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
  return {
    type: HAVEREAD_MESSAGE_REPLY_TEXTINPUT_SHOW,
    payload
  }
}


export function havereadMessageTextChange(payload) {
  return {
    type: HAVEREAD_MESSAGE_REPLY_TEXT_CHANGE,
    payload
  }
}

export function havereadMessageReply(payload) {
  return {
    type: HAVEREADMESSAGE_REPLY,
    payload
  }
}
