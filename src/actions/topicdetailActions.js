/**
 * React Native App
 * https://github.com/ztplz/CNode-react-native
 * email: mysticzt@gmail.com
 */

import {
  FETCH_TOPICDETAIL_DATA,
  REFRESH_TOPICDETAIL_DATA,
  COLLECT_TOPIC,
  NOT_COLLECT_TOPIC,
  REPLY_TO_TOPIC,
  SENT_REPLY_MESSAGE
} from '../constants/actionTypes';

export function getTopicDetailData(payload) {
  return {
    type: FETCH_TOPICDETAIL_DATA,
    payload
  }
}

export function refreshTopicDetailData(payload) {
  return {
    type: REFRESH_TOPICDETAIL_DATA,
    payload
  }
}

export function replyToTopic(payload) {
  return {
    type: REPLY_TO_TOPIC,
    payload
  }
}

export function sentReplyMessage(payload) {
  return {
    type: SENT_REPLY_MESSAGE,
    payload
  }
}

export function topicCollect(payload) {
  return {
    type: COLLECT_TOPIC,
    payload
  }
}

export function topicNotCollect(payload) {
  return {
    type: NOT_COLLECT_TOPIC,
    payload
  }
}
