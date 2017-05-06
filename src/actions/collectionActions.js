/**
 * React Native App
 * https://github.com/ztplz/CNode-react-native
 * email: mysticzt@gmail.com
 */

import {
  FETCH_COLLECTION_DATA,
  REFRESH_COLLECTION_DATA
} from '../constants/actionTypes';

export function getCollectionData(payload) {
  return {
    type: FETCH_COLLECTION_DATA,
    payload
  }
}

export function refreshCollectionData(payload) {
  return {
    type: REFRESH_COLLECTION_DATA,
    payload
  }
}
