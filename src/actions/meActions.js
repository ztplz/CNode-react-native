/**
 * React Native App
 * https://github.com/ztplz/CNode-react-native
 * email: mysticzt@gmail.com
 */

import {
  FETCH_ME_DATA
} from '../constants/actionTypes';

export function getMeData(payload) {
  return {
    type: FETCH_ME_DATA,
    payload
  }
}
