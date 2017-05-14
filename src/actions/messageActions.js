/**
 * React Native App
 * https://github.com/ztplz/CNode-react-native
 * email: mysticzt@gmail.com
 */

import {
  FETCH_MESSAGE
} from '../constants/actionTypes';

export function getMessage(payload) {
  console.log(payload);
  return {
    type: FETCH_MESSAGE,
    payload
  }
}
