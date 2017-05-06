/**
 * React Native App
 * https://github.com/ztplz/CNode-react-native
 * email: mysticzt@gmail.com
 */

import {
  GET_DRAFTBOX_DATA,
  SAVE_DRAFT_DATA,
} from '../constants/actionTypes';

export function getDraftBoxData(payload) {
  return {
    type: GET_DRAFTBOX_DATA,
    payload
  }
}

export function saveDraftData(payload) {
  type: SAVE_DRAFT_DATA,
  payload
}
