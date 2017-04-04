/**
 * React Native App
 * https://github.com/ztplz/CNode-react-native
 * email: mysticzt@gmail.com
 */

import { Navigator } from '../AppNavigator';

export default function NavState(state, action) {
  const newState = Navigator.router.getStateForAction(action, state);
  return newState || state;
}
