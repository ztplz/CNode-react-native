/**
 * React Native App
 * https://github.com/ztplz/CNode-react-native
 * email: mysticzt@gmail.com
 */

import {
  FETCH_HOMEPAGE_DATA,
  REFRESH_HOMEPAGE_DATA,
  FETCH_MORE_HOMEPAGE_DATA,
} from '../constants/actionTypes';

export function getHomePageData(payload) {
  console.log(payload);
  return {
    type: FETCH_HOMEPAGE_DATA,
    payload,
  }
}

export function refreshHomePageData(payload) {
  return {
    type: REFRESH_HOMEPAGE_DATA,
    payload,
  }
}

export function loadMoreHomePageData(payload) {
  return {
    type: FETCH_MORE_HOMEPAGE_DATA,
    payload,
  }
}
