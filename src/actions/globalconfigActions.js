/**
 * React Native App
 * https://github.com/ztplz/CNode-react-native
 * email: mysticzt@gmail.com
 */

import {
  CHANGE_MODE,
  CHANGE_THEMECOLOR,
  USER_LOGIN
} from '../constants/actionTypes';

export function changeMode(payload) {
  console.log('changeMode');
  return {
    type: CHANGE_MODE,
    payload
  }
}

export function changeThemecolor(payload) {
  console.log('changeThemecolor');
  return {
    type: CHANGE_THEMECOLOR,
    payload
  }
}

export function userLogin(payload) {
  console.log('userLogin');
  return {
    type: USER_LOGIN,
    payload
  }
}
