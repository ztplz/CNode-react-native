/**
 * React Native App
 * https://github.com/ztplz/CNode-react-native
 * email: mysticzt@gmail.com
 */

import { fromJS } from 'immutable';

const fromImmutable = (state) => {
  return state.toJS();
}

const toImmutable = (raw) => {
  return fromJS(raw);
}

export default {
  out: (state) => {
    return toImmutable(state);
  },
  in: (raw) => {
    return fromImmutable(raw)
  }
}
