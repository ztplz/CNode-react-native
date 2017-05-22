/**
 * React Native App
 * https://github.com/ztplz/CNode-react-native
 * email: mysticzt@gmail.com
 */

import {
  POST_TO_CNODE
} from '../constants/actionTypes';

export function postToCNode(payload) {
  return {
    type: POST_TO_CNODE,
    payload
  }
}

export function postAgain(payload) {
  return {
    type: POST_TO_CNODE_AGAIN,
    payload
  }
}
