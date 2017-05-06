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
  LOGIN_TO_CNODE_SUCCESS
} from '../constants/actionTypes';

const initialState = fromJS({
  isNightMode: false,
  themeColor: null,
  selectedColor: null,
  isLogged: false,
  accesstoken: '',
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
                  .set('accesstoken', action.payload.accesstoken);
    case CHANEGE_COLOR_SELECT:
      return state.set('selectedColor', action.payload.selectedColor);
    case LOGIN_TO_CNODE_SUCCESS:
      return state.set('accesstoken', action.payload.accesstoken);
    default:
      return state;
  }
}
