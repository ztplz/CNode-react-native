/**
 * React Native App
 * https://github.com/ztplz/CNode-react-native
 * email: mysticzt@gmail.com
 */

import { fromJS } from 'immutable';
import {
  HOMEPAGE_STARTUP,
  CHANGE_MODE,
  CHANGE_THEMECOLOR,
  USER_LOGIN,
  CHANEGE_COLOR_SELECT,
  LOGIN_TO_CNODE_SUCCESS,
  START_UP,
  GET_USERINFO_SUCCESS,
  FETCH_ME_DATA_SUCCESS,
  USER_LOGOUT
} from '../constants/actionTypes';

const initialState = fromJS({
  screenProps: {
    isNightMode: false,
    themeColor: '#878fe0'
  },
  selectedColor: null,
  isLogged: false,
  accesstoken: '',
  loginname: null,
  avatar_url: null,
  user_create_at: null
});

export default function GlobalState(state=initialState, action) {
  switch (action.type) {
    case HOMEPAGE_STARTUP:
      return state.set('screenProps', action.payload.screenProps)
                  .set('selectedColor', action.payload.selectedColor)
                  .set('isLogged', action.payload.isLogged)
                  .set('accesstoken', action.payload.accesstoken)
                  .set('loginname', action.payload.loginname);
    case START_UP:
      return state.set('screenProps', action.payload.screenProps)
                  .set('selectedColor', action.payload.selectedColor)
                  .set('isLogged', action.payload.isLogged)
                  .set('accesstoken', action.payload.accesstoken)
                  .set('loginname', action.payload.loginname);
    case CHANGE_MODE:
      return state.setIn(['screenProps', 'isNightMode'], action.payload.isNightMode);
    case CHANGE_THEMECOLOR:
      console.log('change color');
      return state.setIn(['screenProps', 'themeColor'], action.payload.themeColor);
    case LOGIN_TO_CNODE_SUCCESS:
      return state.set('isLogged', action.payload.isLogged)
                  .set('accesstoken', action.payload.accesstoken)
                  .set('loginname', action.payload.loginname)
                  .set('avatar_url', action.payload.avatar_url);
    case CHANEGE_COLOR_SELECT:
      return state.set('selectedColor', action.payload.selectedColor);
    case GET_USERINFO_SUCCESS:
      return state.set('isLogged', action.payload.data.isLogged)
                  .set('accesstoken', action.payload.data.accesstoken)
                  .set('loginname', action.payload.data.loginname)
                  .set('avatar_url', action.payload.data.avatar_url);
    case FETCH_ME_DATA_SUCCESS:
      return state.set('user_create_at', action.payload.user_create_at);
    case USER_LOGOUT:
      return state.set('isLogged', action.payload.isLogged)
                  .set('accesstoken', action.payload.accesstoken)
                  .set('loginname', action.payload.loginname)
                  .set('avatar_url', action.payload.avatar_url)
                  .set('user_create_at', action.payload.user_create_at);
    default:
      return state;
  }
}
