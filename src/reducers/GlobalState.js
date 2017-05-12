/**
 * React Native App
 * https://github.com/ztplz/CNode-react-native
 * email: mysticzt@gmail.com
 */

import { fromJS } from 'immutable';
import {
  CHANGE_MODE,
  CHANGE_THEMECOLOR,
  USER_LOGIN,
  CHANEGE_COLOR_SELECT,
  LOGIN_TO_CNODE_SUCCESS,
  START_UP,
  GET_USERINFO_SUCCESS,
  FETCH_ME_DATA_SUCCESS
} from '../constants/actionTypes';

const initialState = fromJS({
  isNightMode: false,
  themeColor: null,
  selectedColor: null,
  isLogged: false,
  accesstoken: '',
  loginname: null,
  avatar_url: null,
  user_create_at: null
});

export default function GlobalState(state=initialState, action) {
  // console.log(action);
  switch (action.type) {
    case CHANGE_MODE:
      return state.set('isNightMode', action.payload.isNightMode);
    case CHANGE_THEMECOLOR:
      return state.set('themeColor', action.payload.themeColor);
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
    // case LOGIN_TO_CNODE_SUCCESS:
    //   return state.set('accesstoken', action.payload.accesstoken);
    default:
      return state;
  }
}
