/**
 * React Native App
 * https://github.com/ztplz/CNode-react-native
 * email: mysticzt@gmail.com
 */

import {
  FETCH_UNREADMESSAGE_DATA,
  REFRESH_UNREADMESSAGE_DATA,
  UNREADMESSAGE_REPLY,
  UNREAD_MESSAGE_REPLY_TEXTINPUT_SHOW,
  UNREAD_MESSAGE_REPLY_TEXT_CHANGE,
  UNREAD_MESSAGE_SEND
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

export function replyTextInputShow(payload) {
  return {
   type: UNREAD_MESSAGE_REPLY_TEXTINPUT_SHOW,
   payload
  }
}

export function unreadMessageTextChange(payload) {
  return {
    type: UNREAD_MESSAGE_REPLY_TEXT_CHANGE,
    payload
  }
}

export function unreadMessageReply(payload) {
  return {
    type: UNREADMESSAGE_REPLY,
    payload
  }
}
