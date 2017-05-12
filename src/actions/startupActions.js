/**
 * React Native App
 * https://github.com/ztplz/CNode-react-native
 * email: mysticzt@gmail.com
 */

import {
  START_UP
} from '../constants/actionTypes';

export function startup(payload) {
  return {
    type: START_UP,
    payload
  }
}
