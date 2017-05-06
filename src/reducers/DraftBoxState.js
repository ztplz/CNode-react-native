/**
 * React Native App
 * https://github.com/ztplz/CNode-react-native
 * email: mysticzt@gmail.com
 */

import { fromJS } from 'immutable';
import {
  GET_DRAFTBOX_DATA,
  SAVE_DRAFT_DATA
} from '../constants/actionTypes';

const initialState = fromJS({
  data: [],
});

export default function DraftBoxState(state=initialState, action) {
  switch (action.type) {
    case GET_DRAFTBOX_DATA:
      return state.set('data', action.payload.data);
    case SAVE_DRAFT_DATA:
      return state.set('data', state.get('data').concat(action.payload.data));
    default:
      return state;
  }
}
