/**
 * React Native App
 * https://github.com/ztplz/CNode-react-native
 * email: mysticzt@gmail.com
 */

import {
  REPLY_TO_TOPIC,
} from '../constants/actionTypes';

export function replyToTopic(payload) {
  return {
    type: REPLY_TO_TOPIC,
    payload
  }
}
