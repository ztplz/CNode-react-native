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
    // state.mergeDeep = R.identity
    console.log(state);
    return toImmutable(state);
    // return state;
  },
  in: (raw) => {
    // console.log({ storing: raw })
    console.log(raw.toJS());
    return fromImmutable(raw)
  }
}
