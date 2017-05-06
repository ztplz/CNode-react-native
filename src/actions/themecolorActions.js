/**
 * React Native App
 * https://github.com/ztplz/CNode-react-native
 * email: mysticzt@gmail.com
 */

import { CHANEGE_COLOR_SELECT } from '../constants/actionTypes';

export function changeColorSelect(payload) {
  return {
    type: CHANEGE_COLOR_SELECT,
    payload
  }
}
