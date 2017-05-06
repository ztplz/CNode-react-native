/**
 * React Native App
 * https://github.com/ztplz/CNode-react-native
 * email: mysticzt@gmail.com
 */

import {
  // FETCH_RECENT_TOPICS,
  REFRESH_RECENT_DETAIL
} from '../constants/actionTypes';

// export function getRecentTopicsData(payload) {
//   return {
//     type: FETCH_RECENT_TOPICS,
//     payload
//   }
// }

export function refreshRecentDetailData(payload) {
  return {
    type: REFRESH_RECENT_DETAIL,
    payload
  }
}
